'use strict';
const db = uniCloud.database();
const dbCmd = db.command
exports.main = async (event, context) => {
	// 创建回滚
	const transaction = await db.startTransaction()
	
	let integrals = await db.collection('wx_config').where({'key': 'signIntegral'}).get()
	if (integrals.data.length === 0) {
		return {
			success: false,
			msg: '未配置签到参数'
		}
	}
	const integral = parseInt(integrals.data[0].val)
	
	var userId = event.userId
	const startTime = new Date(new Date().toLocaleDateString()).getTime()
	const timeStamp = new Date().getTime()
	try{
		var signList = await db.collection('wx_sign').where({
			'user_id': userId,
			'time': dbCmd.gte(startTime)
		}).get()
		if(signList.data.length > 0){
			return {
				success: false,
				msg: '已经签到过'
			}
		}
		var signResult = await transaction.collection('wx_sign').add({
			'integral': integral,
			'user_id': userId,
			'time': timeStamp
		})
		if(signResult.inserted === 0){
			transaction.rollback(-100)
			return {
				success: false,
				msg: '签到失败'
			}
		}
		let users = await transaction.collection('wx_user').doc(userId).get()
		if(!users.data){
			// 用户不存在
			transaction.rollback(-100)
			return {
				success: false,
				msg: '签到失败'
			}
		}
		// 给用户增加积分
		var userResult = await transaction.collection('wx_user').doc(userId).update({
			'integral': dbCmd.inc(integral)
		})
		
		if(userResult.updated === 0){
			// 签到失败
			transaction.rollback(-100)
			return {
				success: false,
				msg: '签到失败'
			}
		}
		// 添加积分记录
		var signResult = await transaction.collection('wx_record').add({
			'mode': 1,
			'name': '签到奖励积分',
			'integral': integral,
			'user_id': userId,
			'time': timeStamp
		})
		if(signResult.inserted === 0){
			// 签到失败
			transaction.rollback(-100)
			return {
				success: false,
				msg: '签到失败'
			}
		}
		await transaction.commit()
		return {
			success: true,
			integral: integral,
			msg: '签到成功'
		}
	}catch(e){
		await transaction.rollback()
		return {
			success: false,
			msg: e
		}
	}
};
