'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {

	var keys = event.keys
	var array = []
	for (var i = 0; i < keys.length; i++) {
		let result = await db.collection('wx_config').where({
			'key': keys[i]
		}).get()
		var key
		if(result.data.length > 0){
			key = result.data[0].val
		}else{
			key = ''
		}
		array.push(key)
	}
	
	return {
		success: true,
		data: array
	}
};
