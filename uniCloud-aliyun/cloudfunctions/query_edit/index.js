'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	
	var dbName = event.dbName //集合表名
	var filter = event.filter ? event.filter : {} //筛选条件
	var addData = event.addData //新增参数
	var addDatas = event.addDatas //新增多个
	var upData = event.upData //修改参数
	var timeStamp = new Date().getTime()
	var result = {}
	
	let list = await db.collection(dbName).where(filter).get()
	
	if(list.data.length === 0){
		if(!addDatas){
			addData.time = timeStamp
		}
		result = await db.collection(dbName).add(addData)
		if(result.inserted === 0){
			// 删除失败
			return {
				success: false,
				msg: '操作失败'
			}
		}
		return {
			success: true,
			msg: '操作成功'
		}
	}else{
		result = await db.collection(dbName).where(filter).update(upData)
		if(result.updated === 0){
			// 删除失败
			return {
				success: false,
				msg: '操作失败'
			}
		}
		return {
			success: true,
			msg: '操作成功'
		}
	}
};
