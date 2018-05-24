let pre = '/liveService/api';//接口前缀

// 接口地址
let apiUrl = {
	// 主流程
	login: pre + '/user/getWeChatLoginUrl',//获取微信登录链接地址
	userInfo: pre + '/user/getUserInfo',//获取用户信息
	getGameList: pre + '/game/getGameList', //获取游戏列表
	getGameTypeList: pre + '/game/getGameTypeList',//获取游戏分类
	getGameLoginUrl: pre + '/game/getGameLoginUrl',//获取游戏登录地址
	getBanner: pre + '/user/getBanner',//首页banner图获取
	userLogin: pre + '/user/userLogin', //手机号用户登录
	getMessage: pre + '/message/getMessage',//获取系统消息列表
	getActivity: pre + '/message/getActivity',//查询活动消息列表
	//直播
	getAllLiveStyle: pre + '/common/getAllLiveStyle',//获取直播风格列表
	queryLiveList: pre + '/live/queryLiveList',//获取直播间列表
	liveAuthenticate: pre + '/live/liveAuthenticate',//直播认证
	getLiveDetail: pre + '/live/getLiveDetail',//获取直播间详情
	queryAttentionAnchorList: pre + '/live/account/queryAttentionAnchorList',//获取关注主播列表
	queryLiveIncomeList: pre + '/live/queryLiveIncomeList',//用户获取粉丝贡献榜(包括贡献前五)
	followAnchor: pre + '/live/account/followAnchor',//关注主播
	queryAnchorList: pre + '/live/queryAnchorList',//搜索主播
	getUnreadMessage: pre + '/message/getUnreadMessage',//获取未读系统消息条数
	readMessage: pre + '/message/readMessage',//标记已读系统消息
	getUnreadActivity: pre + '/message/getUnreadActivity',//查询未读活动消息条数
	readActivity: pre + '/message/readActivity',//标记已读活动接口


	//用户中心
	getTransPtList: pre + '/game/getTransPtList', //获取可转账游戏平台
	getVerifyCode: pre + '/common/getVerifyCode',//获取图片验证码
	setTel: pre + '/user/setTel',//绑定手机号（观众
	userSign: pre + '/user/userSign', //用户签到
	updatePwd: pre + '/user/updatePwd', //修改登录密码
	updateCashPwd: pre + '/user/updateCashPwd',//修改支付密码（观众）
	getBankNameList: pre + '/user/getBankNameList',//获取可选择银行名称（观众）
	getUserBankList: pre + '/user/getUserBankList',//查询用户银行卡列表（观众）
	addUserBankCard: pre + '/user/addUserBankCard',//新增银行卡（观众）
	setDefaultBankCard: pre + '/user/setDefaultBankCard',//设置默认银行卡（观众）
	delUserBankCard: pre + '/user/delUserBankCard',//删除银行卡（观众）
	updateUserInfo: pre + '/user/updateUserInfo',//修改用户信息（观众）
	queryCityList: pre + '/common/queryCityList', //获取二级城市级联

	//支付
	getPayWay: pre + '/pay/getPayWay',//获取支付类型
	getBank: pre + '/pay/getBank',//获取可支付银行
	getPayOrder: pre + '/pay/getPayOrder',//获取支付订单
	createPayOrder: pre + '/pay/createPayOrder',//创建支付订单
	handleGamePtMoneyTrans: pre + '/game/handleGamePtMoneyTrans', //游戏平台资金转换
	getUserAccountInfo: pre + '/user/getUserAccountInfo',//获取用户资金
	cashApply: pre + '/cash/cashApply',//提现申请
	getCashOrder: pre + '/cash/getCashOrder',//获取提现订单


	// 推广员
	getToken:pre+'/common/uptoken', //获取文件上传token
	getPromoterData: pre + '/promoter/getPromoterData',// 获取推广员中心统计数据
	getTgReport: pre + '/promoter/getTgReport',// 获取佣金收益报表数据
	getTgFeeDetail: pre + '/promoter/getTgFeeDetail',// 获取佣金收益明细
	getTeamUser: pre + '/promoter/getTeamUser',// 获取下级代理用户列表
	getUserTgFee: pre + '/promoter/getUserTgFee',// 获取用户佣金收益明显列表
	getUserTgFeeGroupByDate: pre + '/promoter/getUserTgFeeGroupByDate',// 获取用户佣金收益列表及汇总

	//游戏报表
	getGameReport: pre + '/gameReport/getGameReport',//游戏报表统计
	queryTransferLog: pre + '/game/queryTransferLog',//获取转账记录

	getMyGrade: pre + '/user/getLv',//获取我的等级
	getUseInfo: pre + '/live/account/getAccountInfo',//获取直播用户信息
	
	//排行榜
	getOnliveRank: pre + '/live/getOnliveRank',//获取直播的收礼榜（美女直播排行榜相关接口）
	getGiveRank: pre + '/live/getGiveRank',//获取直播的送礼榜（美女直播排行榜相关接口）
	unfollowAnchor: pre + '/live/account/unfollowAnchor',//取消关注主播
	giftRecord: pre + '/live/queryCoinLogList',//获取用户礼物消费和守护天使消费记录
	
}
export {
	apiUrl
}