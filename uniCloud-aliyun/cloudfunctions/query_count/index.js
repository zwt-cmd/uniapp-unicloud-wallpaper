'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	
	var dbName = event.dbName //集合表名
	var filter = event.filter ? event.filter : {} //筛选条件
	
	const countResult = await db.collection(dbName).where(filter).count()
	const total = countResult.total  //得到总记录数 
	
	return total
};
