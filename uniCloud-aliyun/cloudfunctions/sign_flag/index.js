'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	
	const dbCmd = db.command
	
	var dbName = event.dbName //集合表名
	var startTime = event.startTime //今天开始时间
	var endTime = event.endTime //今天结束时间
	
	const result = await db.collection(dbName).where({
		"user_id": event.userId,
		"time": dbCmd.gte(startTime)
	}).get()
	
	if(result.data.length > 0){
		return {
			success: true
		}
	}else{
		return {
			success: false
		}
	}
};
