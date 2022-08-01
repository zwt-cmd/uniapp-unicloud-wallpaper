'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	var dbName = event.dbName
	var id = event.id
	var data = {}
	
	let result = await db.collection(dbName).doc(id).get();

	if(result.data.length > 0){
		data = result.data[0]
	}
	
	return data
};
