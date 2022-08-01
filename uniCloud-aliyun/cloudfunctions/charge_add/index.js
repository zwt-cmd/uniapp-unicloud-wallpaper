'use strict';
const db = uniCloud.database();
const dbCmd = db.command
exports.main = async (event, context) => {
	// 创建回滚
	const transaction = await db.startTransaction()
	
	var userId = event.userId
	var integral = event.integral
	var timeStamp = new Date().getTime()
	var result
	
	try{
		let users = await transaction.collection('wx_user').doc(userId).get()
		if(!users.data){
			// 用户信息不存在
			transaction.rollback(-100)
			return {
				success: false,
				msg: '用户不存在'
			}
		}
		// 给用户增加积分
		var userResult = await transaction.collection('wx_user').doc(userId).update({
			'integral': dbCmd.inc(integral)
		})
		if(userResult.updated === 0){
			// 用户不存在
			transaction.rollback(-100)
			return {
				success: false,
				msg: '充值错误'
			}
		}
		// 添加积分记录
		var recordResult = await transaction.collection('wx_record').add({
			'mode': 1,
			'name': '成功',
			'integral': integral,
			'user_id': userId,
			'time': timeStamp
		})
		if(recordResult.inserted === 0){
			// 充值记录添加失败
			transaction.rollback(-100)
			return {
				success: false,
				msg: '异常错误'
			}
		}
		await transaction.commit()
		return {
			success: true,
			msg: '充值成功'
		}
	}catch(e){
		await transaction.rollback()
		return {
			success: false,
			msg: e
		}
	}
};
