'use strict';
const db = uniCloud.database()
const dbCmd = db.command
exports.main = async (event, context) => {
	// 创建回滚
	const transaction = await db.startTransaction()
	
	let timeStamp = new Date().getTime()
	var integral = parseInt(event.integral)
	var userId = event.userId
	var coverId = event.coverId
	var index = event.index
	
	try{
		// 查询作品信息
		let covers = await transaction.collection('wx_cover').doc(coverId).get()
		if(!covers.data){
			// 作品不存在
			transaction.rollback(-100)
			return {
				success: false,
				msg: '作品不存在'
			}
		}
		if(covers.data.status != 1){
			// 作品已下架
			transaction.rollback(-100)
			return {
				success: false,
				msg: '作品已下架'
			}
		}
		let cover = covers.data
		let coverName = cover.name
		let coverImage = cover.images[index]
		let coverUserId = cover.user_id
		
		// 查看是否曾经下载过
		var downloads = await db.collection('wx_order').where({
			'user_id': userId,
			'image': coverImage
		}).get()
		if(downloads.data.length > 0){
			// 有下载记录  不再扣除积分
			return {
				success: true,
				msg: '下载成功'
			}
		}else if(integral > 0){
			// 查询用户信息
			let users = await transaction.collection('wx_user').doc(userId).get()
			if(!users.data){
				// 用户信息错误，请重新登录
				transaction.rollback(-100)
				return {
					success: false,
					msg: '用户不存在'
				}
			}
			let user = users.data
			let userName = user.name
			// 查询作者信息
			let authors = await transaction.collection('wx_user').doc(coverUserId).get()
			if(!authors.data){
				// 作者信息错误，请重新登录
				transaction.rollback(-100)
				return {
					success: false,
					msg: '作者不存在'
				}
			}
			let author = authors.data
			// 判断积分
			let userIntegral = user.integral
			if(userIntegral < integral){
				// 积分不足
				transaction.rollback(-100)
				return {
					success: false,
					msg: '积分不足'
				}
			}
			
			// 用户扣除积分
			let userResult = await transaction.collection('wx_user').doc(userId).update({
				'integral': dbCmd.inc(-integral),
			})
			if(userResult.updated === 0){
				//扣除积分失败
				transaction.rollback(-100)
				return {
					success: false,
					msg: '异常错误'
				}
			}
			// 用户增加积分记录
			var recordUserResult = await transaction.collection('wx_record').add({
				'mode': 0,
				'name': '下载壁纸：'+coverName,
				'integral': integral,
				'user_id': userId,
				'time': timeStamp
			})
			if(recordUserResult.inserted === 0){
				// 用户积分记录增加失败
				transaction.rollback(-100)
				return {
					success: false,
					msg: '异常错误'
				}
			}
			
			// 作者增加积分
			let authorResult = await transaction.collection('wx_user').doc(coverUserId).update({
				'integral': dbCmd.inc(integral)
			})
			if(authorResult.updated === 0){
				//增加积分失败
				transaction.rollback(-100)
				return {
					success: false,
					msg: '异常错误'
				}
			}
			// 作者增加积分记录
			var recordAuthorResult = await transaction.collection('wx_record').add({
				'mode': 1,
				'name': userName+' 下载您的壁纸：'+coverName,
				'integral': integral,
				'user_id': coverUserId,
				'time': timeStamp
			})
			if(recordAuthorResult.inserted === 0){
				// 作者积分记录增加失败
				transaction.rollback(-100)
				return {
					success: false,
					msg: '异常错误'
				}
			}
		}
		
		// 构建订单
		let order = {
			'user_id': userId,
			'author_id': coverUserId,
			'cover_id': coverId,
			'integral': integral,
			'current': index,
			'image': coverImage,
			'time': timeStamp
		}
		
		var orderResult = await transaction.collection('wx_order').add(order)
		if(orderResult.inserted === 0){
			// 订单构建失败
			transaction.rollback(-100)
			return {
				success: false,
				msg: '异常错误'
			}
		}
		
		await transaction.commit()
		return {
			success: true,
			msg: '下载成功'
		}
	}catch(e){
		console.log(e)
		await transaction.rollback()
		return {
			success: false,
			msg: e
		}
	}
};
