'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	
	var dbName = event.dbName //集合表名
	var type = event.type //集合表名
	var filter = event.filter ? event.filter : {}//筛选条件
	var userId = event.userId
	var result
	
	let list = await db.collection(dbName).where(filter).get()
	var coll,zan
	if(list.data.length == 0){
		var cover = await db.collection(dbName).doc(filter._id).get()
		if (cover.data.length === 0) {
			return {
				success: false,
				msg: '作品不存在'
			}
		}
		if (cover.data[0].status != 1) {
			return {
				success: false,
				msg: '作品未上架，禁止操作'
			}
		}
		if(type=='zan'){
			zan = cover.data[0].zan
			zan.push({
				"user_id": userId
			})
		}else{
			coll = cover.data[0].coll
			coll.push({
				"user_id": userId
			})
		}
	}else{
		if (list.data[0].status != 1) {
			return {
				success: false,
				msg: '作品未上架，禁止操作'
			}
		}
		if(type=='zan'){
			zan = list.data[0].zan
			for (var i = 0; i < zan.length; i++) {
				if(userId == zan[i].user_id){
			　　　　zan.splice(i, 1)
			　　　　i--
			　　}
			}
		}else{
			coll = list.data[0].coll
			for (var i = 0; i < coll.length; i++) {
				if(userId == coll[i].user_id){
			　　　　coll.splice(i, 1)
			　　　　i--
			　　}
			}
		}
	}
	
	if(type=='zan'){
		result = await db.collection(dbName).doc(filter._id).update({zan: zan})
	}else{
		result = await db.collection(dbName).doc(filter._id).update({coll: coll})
	}
	
	if(result.updated === 0){
		return {
			success: false,
			msg: '失败'
		}
	}
	
	return {
		success: true,
		msg: '成功'
	}
};