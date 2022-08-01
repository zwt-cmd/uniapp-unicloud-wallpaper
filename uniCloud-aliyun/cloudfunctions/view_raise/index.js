'use strict';
const db = uniCloud.database();
const dbCmd = db.command
exports.main = async (event, context) => {

	var result = await db.collection('wx_cover').doc(event.coverId).update({
		'view': dbCmd.inc(1)
	})
	if(result.updated === 0){
		return {
			success: false,
			msg: '增加浏览失败'
		}
	}
	
	return {
		success: true,
		msg: '热度+1'
	}
};
