'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	// #ifdef MP-WEIXIN
	let appIds = await db.collection('wx_config').where({'key': 'wxId'}).get()
	let appSecrets = await db.collection('wx_config').where({'key': 'wxSecret'}).get()
	let accessTokens = await db.collection('wx_config').where({'key': 'access_token'}).get()
	let templateIds = await db.collection('wx_config').where({'key': 'templateId'}).get()
	// #endif
	// #ifdef MP-TOUTIAO
	let appIds = await db.collection('wx_config').where({'key': 'ttId'}).get()
	let appSecrets = await db.collection('wx_config').where({'key': 'ttSecret'}).get()
	let accessTokens = await db.collection('wx_config').where({'key': 'access_token'}).get()
	let templateIds = await db.collection('wx_config').where({'key': 'templatesId'}).get()
	// #endif
	if (appIds.data.length === 0 || appSecrets.data.length === 0) {
		return {
			success: false,
			msg: '审核通知发送失败：未配置系统参数'
		}
	}
	if (accessTokens.data.length === 0 || !accessTokens.data[0].val) {
		return {
			success: false,
			msg: '审核通知发送失败：TOKEN为空'
		}
	}
	if (templateIds.data.length === 0 || !templateIds.data[0].val) {
		return {
			success: false,
			msg: '审核通知发送失败：未配置消息模板ID为空'
		}
	}
	const APPID = appIds.data[0].val
	const APPSECRET = appSecrets.data[0].val
	const ACCESS_TOKEN = accessTokens.data[0].val
	const TEMPLATE_ID = templateIds.data[0].val
	
	const coverList = await db.collection('wx_cover').doc(event.coverId).get()
	if(coverList.data.length === 0){
		return {
			success: false,
			msg: '审核通知发送失败：作品不存在'
		}
	}
	var cover = coverList.data[0]
	
	const userList = await db.collection('wx_user').doc(cover.user_id).get()
	if(userList.data.length === 0){
		return {
			success: false,
			msg: '审核通知发送失败：用户不存在'
		}
	}
	var user = userList.data[0]
	
	var myDate = new Date()
	var mytime = myDate.toLocaleTimeString()
	var name = cover.name
	var phrase = cover.status==1?'审核通过':'审核未通过'
	var remark = cover.status==1?'点击这里快速查看~':cover.examine
	var pages = cover.status==1?'/pages/index/index?detailId='+cover._id:'/pages/system/write'
	var param = {
		thing1: {
			value: name
		},
		thing2: {
			value: phrase
		}, 
		thing3: {
			value: remark
		}
	}
	await sendMsg(user.openid, pages, param, TEMPLATE_ID, ACCESS_TOKEN)
	return {
		success: true,
		msg: '发送成功'
	}
}

// var getAccessToken = async (appid, secret) =>{
// 	const tokenUrl = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + appid + '&secret=' + secret;
// 	// uniCloud.httpclient 发起请求
// 	const res = await uniCloud.httpclient.request(tokenUrl,
// 	{
// 		method: 'GET',
// 		dataType:"json"
// 	});
// 	//返回数据给客户端
// 	const access_token = res.data.access_token;
// 	return access_token
	
// }

var sendMsg = async (openid, pages, param, templateid, token) =>{
	try{
		const url = `https://api.weixin.qq.com/cgi-bin/message/subscribe/send?access_token=${token}`
		const res = await uniCloud.httpclient.request(url,{
			method: 'POST',
			contentType: 'json',
			dataType: 'json',
			data:{
				touser: openid,
				page: pages,
				data: param,
				template_id: templateid
			}
		})
	console.log(res.data)
		return '发送完成'
	} catch (e) {
		console.log('异常错误',e)
		return '异常错误'
	}
}