'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {

	var dbName = event.dbName
	var id = event.id
	var data = {}
	
	let result = await db.collection(dbName).doc(id).get();

	if(result.data.length > 0){
		data = result.data[0]
	}
	
	return data
};
