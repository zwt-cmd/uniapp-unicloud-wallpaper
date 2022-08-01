'use strict';
const db = uniCloud.database();
const dbCmd = db.command
exports.main = async (event, context) => {
	// 创建回滚
	const transaction = await db.startTransaction()
	const timeStamp = new Date().getTime()
	
	let integrals = await db.collection('wx_config').where({'key': 'designIntegral'}).get()
	if (integrals.data.length === 0) {
		return {
			success: false,
			msg: '未配置参数'
		}
	}
	const integral = parseInt(integrals.data[0].val)
	
	var userId = event.userId
	try{
		let users = await transaction.collection('wx_user').doc(userId).get()
		if(!users.data){
			// 用户不存在
			transaction.rollback(-100)
			return {
				success: false,
				msg: '用户不存在'
			}
		}
		var userIntegral = users.data.integral
		if(userIntegral < integral){
			return {
				success: false,
				msg: '积分不足'
			}
		}
		// 给用户扣除积分
		var userResult = await transaction.collection('wx_user').doc(userId).update({
			'integral': dbCmd.inc(-integral)
		})
		if(userResult.updated === 0){
			// 积分增加失败
			transaction.rollback(-100)
			return {
				success: false,
				msg: '积分扣除失败'
			}
		}
		
		// 添加积分记录
		var signResult = await transaction.collection('wx_record').add({
			'mode': 0,
			'name': '制作刘海壁纸扣除积分',
			'integral': integral,
			'user_id': userId,
			'time': timeStamp
		})
		if(signResult.inserted === 0){
			// 积分更新失败
			transaction.rollback(-100)
			return {
				success: false,
				msg: '积分更新失败'
			}
		}
		await transaction.commit()
		return {
			success: true,
			integral: integral,
			msg: '成功'
		}
	}catch(e){
		await transaction.rollback()
		return {
			success: false,
			msg: e
		}
	}
};
