'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	
	var dbName = event.dbName //集合表名
	var filter = event.filter ? event.filter : {}//筛选条件
	var dbToName = event.dbToName //是否有关联删除
	var toFilter = event.toFilter ? event.toFilter : {} //子表删除条件
	
	let result = await db.collection(dbName).where(filter).remove()
	if(result.deleted === 0){
		return {
			success: false,
			msg: '删除失败'
		}
	}
	if(dbToName){
		let toResult = await db.collection(dbToName).where(toFilter).remove()
	}
	
	return {
		success: true,
		msg: '删除成功'
	}
};
