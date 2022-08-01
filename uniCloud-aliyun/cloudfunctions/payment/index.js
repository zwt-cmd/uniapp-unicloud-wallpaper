'use strict';
const db = uniCloud.database();
const spbill_create_ip = '127.0.0.1'
const random = require('./random.js')
const notify_url = 'http://www.weixin.qq.com/wxpay/pay.php'
const trade_type = 'JSAPI'
const crypto = require("crypto")
const requestData = require("./requestData.js")
const request = require("request")
const x2js = require('x2js');
const x2jsone = new x2js(); //实例

//云函数入口函数
exports.main = async (event, content) => {
	
	let appIds = await db.collection('wx_config').where({'key': 'appId'}).get()
	let mchIds = await db.collection('wx_config').where({'key': 'mchId'}).get()
	let mchKeys = await db.collection('wx_config').where({'key': 'mchKey'}).get()
	if (appIds.data.length === 0 || mchIds.data.length === 0 || mchKeys.data.length === 0) {
		return {
			success: false,
			msg: '未配置支付参数'
		}
	}
	const appId = appIds.data[0].val
	const mchId = mchIds.data[0].val
	const mchKey = mchKeys.data[0].val
	
    const out_trade_no = Date.parse(new Date()).toString()
	const total_fee = event.total_fee
	const openid = event.open_id
	const body = event.body
	
    let stringA = `appid=${appId}&body=${body}&mch_id=${mchId}&nonce_str=${random}&notify_url=${notify_url}&openid=${openid}&out_trade_no=${out_trade_no}&spbill_create_ip=${spbill_create_ip}&total_fee=${total_fee}&trade_type=${trade_type}&key=${mchKey}`
	var sign = crypto.createHash('md5').update(stringA).digest('hex').toUpperCase()
    let dataBody = requestData(
	    appId,
	    mchId,
	    random,
	    sign,
	    body,
	    out_trade_no,
	    total_fee,
	    spbill_create_ip,
	    notify_url,
	    trade_type,
	    openid
	)
	return new Promise(reslove => {
		request({
			url:'https://api.mch.weixin.qq.com/pay/unifiedorder', 
			method: "POST",
			body: dataBody,
		}, function optionalCallback(err, httpResponse, body) {
			const result = x2jsone.xml2js(body)  //解析
			let prepay_id = result.xml.prepay_id
			let timeStamp = new Date().getTime().toString()
			let str = `appId=${appId}&nonceStr=${random}&package=prepay_id=${prepay_id}&signType=MD5&timeStamp=${timeStamp}&key=${mchKey}`
			let paySign = crypto.createHash('md5').update(str).digest('hex')
			//返回上面的五个参数
			reslove({
			    data: {
			        timeStamp: timeStamp,
			        nonceStr: random,
			        package: `prepay_id=${prepay_id}`,
			        signType: 'MD5',
			        paySign: paySign
			    }
			})
		})
	})
}
