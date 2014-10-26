
var fakeProgramObject = {
	studentId : '5090379149',
	className : 'F0903705',
	graDate : '2013-09-09',
	compulsory : [
	{courseName : "SE", courseNature : 'Com', courseHours : '24', credit : '2', YJTerm : 1, SJTerm : 2, courseRank : 2, courseRemark : '', changRemark : ''},
	{courseName : "SE", courseNature : 'Com', courseHours : '24', credit : '2', YJTerm : 2, SJTerm : 2, courseRank : 2, courseRemark : '', changRemark : ''},
	{courseName : "SE", courseNature : 'Com', courseHours : '24', credit : '2', YJTerm : 3, SJTerm : 2, courseRank : 2, courseRemark : '', changRemark : ''},
	{courseName : "SE", courseNature : 'Com', courseHours : '24', credit : '2', YJTerm : 3, SJTerm : 2, courseRank : 2, courseRemark : '', changRemark : ''},
	{courseName : "SE", courseNature : 'Com', courseHours : '24', credit : '2', YJTerm : 1, SJTerm : 2, courseRank : 2, courseRemark : '', changRemark : ''}
	],
	electives : [
	{courseName : "SE", courseNature : 'Com', courseHours : '24', credit : '1', SJTerm : 2, courseRank : 2, courseRemark : '', changRemark : ''},
	{courseName : "SE", courseNature : 'Com', courseHours : '24', credit : '2', SJTerm : 2, courseRank : 2, courseRemark : '', changRemark : ''},
	{courseName : "SE", courseNature : 'Com', courseHours : '24', credit : '3', SJTerm : 2, courseRank : 2, courseRemark : '', changRemark : ''},
	{courseName : "SE", courseNature : 'Com', courseHours : '24', credit : '4', SJTerm : 2, courseRank : 2, courseRemark : '', changRemark : ''}
	],
	compulsoryGot : 10,
	compulsoryAll : 19,
	electivesGot : 9,
	electivesAll : 14,
	programRemark : '1'
};

var fakeScheduleObject = {
	studentId : 'studentId123',
	className : 'className456',
	graDate : '2011-01-01',
	courseList : [
	{courseID : 'cid1', courseName : 'cn1', courseHours : 'ch1', credit : 'c1', teacher : 't1', 
	courseTime : 'ct1<br>ct11<br>ct111', courseWeek : 'cw1', courseSuspend : 'cs1', courseMarkup : 'cm1', examPlan : 'ep1', IsPlan : 'FALSE', IsOpen : 'Y'},
	{courseID : 'cid2', courseName : 'cn2', courseHours : 'ch2', credit : 'c2', teacher : 't2', 
	courseTime : 'ct2', courseWeek : 'cw2', courseSuspend : 'cs2', courseMarkup : 'cm2', examPlan : 'ep2', IsPlan : 'FALSE'},
	{courseID : 'cid3', courseName : 'cn3', courseHours : 'ch3', credit : 'c3', teacher : 't3', 
	courseTime : 'ct3', courseWeek : 'cw3', courseSuspend : 'cs3', courseMarkup : 'cm3', examPlan : 'ep3', IsPlan : 'FALSE'}
	]
};

var fakeUnevaluation = {
	courseID : 'courseId123',
	courseName : 'courseName345',
	teacherList : [{
		teacher: 'teacherMr.C',
		
		studentList : [
		{studentID : "id123", studentName : 'student456', className : 'class789'},
		{studentID : "id321", studentName : 'student654', className : 'class987'},
		{studentID : "id321", studentName : 'student654', className : 'class987'},
		{studentID : "id321", studentName : 'student654', className : 'class987'},
		{studentID : "id321", studentName : 'student654', className : 'class987'},
		{studentID : "id321", studentName : 'student654', className : 'class987'},
		{studentID : "id321", studentName : 'student654', className : 'class987'}
		]
	},
	{
		teacher: 'teacherMr.Dg',
		
		studentList: [
		{studentID : "aaaid123", studentName : 'aaastudent456', className : 'class789'},
		{studentID : "aaaid321", studentName : 'aaastudent654', className : 'class987'},
		{studentID : "aaaid321", studentName : 'aaastudent654', className : 'class987'}
		]
	}]
};

var fakeAttendance = {
	year : '2040',
	term : '2',
	courseName : 'cn',
	teacher : 't',
	importTime : '2014年09月13日',
	KQList : [
	{KQDate : '2014年10月13日', startTime : '8:00', endTime : '16:00', clockTime : '7:55', status : '正常'},
	{KQDate : '2014年10月14日', startTime : '8:00', endTime : '16:00', clockTime : '8:25', status : '迟到'},
	{KQDate : '2014年10月15日', startTime : '8:00', endTime : '16:00', clockTime : '', status : '缺课'}
	]
};

var fakeReference = {
	year : '2050',
	term : '1',
	courseID : 'cid',
	courseName : 'cn',
	teacher : 't',
	className : 'class',
	bookList : [
	{bookId : 'bid1', bookName : 'bn1', author : 'a1', publisher : 'p1', pubNo : 'pn1', price : 'pr1'},
	{bookId : 'bid2', bookName : 'bn2', author : 'a2', publisher : 'p2', pubNo : 'pn2', price : 'pr2'},
	{bookId : 'bid3', bookName : 'bn3', author : 'a3', publisher : 'p3', pubNo : 'pn3', price : 'pr3'},
	{bookId : 'bid4', bookName : 'bn4', author : 'a4', publisher : 'p4', pubNo : 'pn4', price : 'pr4'}
	],
	handoutList : [
	{title : 'title1', type : 'type1', url : 'url1'},
	{title : 'title2', type : 'type2', url : 'url2'},
	{title : 'title3', type : 'type3', url : 'url3'}
	]
};
	
var fakePersonalInfoObject = {
	person_id: '67687',
	studentId: 'L1071676',
	studentName: 'xian xing',
	className: 'ruan gong wu ban',
	picurl: '/enrollImage/20141016/676872014-10-16-09.58.21.000000.jpg',
	sex: 'M',
	nationality: '中国',
	identityNo: '5090379149',
	identityNoScope: '其他人不可见',
	bankAccountNo: '123456',
	bankAccountNoScope: '其他人不可见',
	bankName: 'Bank Of China',
	bankNameScope: '其他人不可见',
	
	address: [
		{
			address_main : 'N',
			address_fs: "工作",
			address_dz: "中国北京",
			address_yb: "123456"
		},
		{
			address_main : 'Y',
			address_fs: "工作",
			address_dz: "中国上海",
			address_yb: "123456"
		}
	],
	
	phone: [
		{
			phone_main: 'N',
			phone_fs: 'A',
			phone_qh: '1',
			phone_dh: '13284958374',
			phone_fjh: '2'
		}
	],
	
	email: [
		{
			email_main: 'Y',
			email_lx: 'A',
			email_dz: 'LIU@163.com'
		}
	],
	
	sns: [
		{
			sns_lx: 'C',
			sns_xx: '1111'
		}
	],
	
	education: [
		{
			edu_rxsj:'2005-09-10',
			edu_bysj:'2006-09-10',
			edu_byxx:'北京交通大学',
			edu_xxzy:'Computer Science',
			edu_hdxl:'本科',
			edu_hdxw:'学士学位'
		},
		{
			edu_rxsj:'2005-09-01',
			edu_bysj:'2007-09-01',
			edu_byxx:'上海交通大学',
			edu_xxzy:'Software Engineering',
			edu_hdxl:'本科',
			edu_hdxw:'学士学位'
		}
	],
	
	work: [
		{
			work_kssj: '2014-10-01',
			work_jssj: '2014-10-08',
			work_zwm: '上海交大',
			work_ywm: 'SJTU',
			work_fwzw: '过程自动化解决方案（PA），自动化服务（CS）和机械自动化业务（OEM）',
			work_fwyw: 'Process Automation (PA), Customer Service (CS) and OEM Solution',
			work_zwzw: '职位',
			work_zwyw: 'job',
			work_bmzw: '部门',
			work_bmyw: 'department',
			work_hy: 'hangye',
			work_xz: 'xingzhi',
			work_nr: 'neirong'
		}
	]
};

var fakeAddressBookObject = {
	currentPageNumber: 1,
	totalPageNumber: 11,
	studentList: [{
		studentName: "Liu Zhe", className: "Xue Qian Ban(Zhong Ban)", phone: 12333333333, email: "liuzhe@tz.com",
		nationality: "china", city: "beijing", companyName: "Tz", department: "Front"
	},{
		studentName: "Liu Zhe", className: "Xue Qian Ban(Zhong Ban)", phone: 12333333333, email: "liuzhe@tz.com",
		nationality: "china", city: "beijing", companyName: "Tz", department: "Front"
	},{
		studentName: "Liu Zhe", className: "Xue Qian Ban(Zhong Ban)", phone: 12333333333, email: "liuzhe@tz.com",
		nationality: "china", city: "beijing", companyName: "Tz", department: "Front"
	},{
		studentName: "Liu Zhe", className: "Xue Qian Ban(Zhong Ban)", phone: 12333333333, email: "liuzhe@tz.com",
		nationality: "china", city: "beijing", companyName: "Tz", department: "Front"
	},{
		studentName: "Liu Zhe", className: "Xue Qian Ban(Zhong Ban)", phone: 12333333333, email: "liuzhe@tz.com",
		nationality: "china", city: "beijing", companyName: "Tz", department: "Front"
	},{
		studentName: "Liu Zhe", className: "Xue Qian Ban(Zhong Ban)", phone: 12333333333, email: "liuzhe@tz.com",
		nationality: "china", city: "beijing", companyName: "Tz", department: "Front"
	},{
		studentName: "Liu Zhe", className: "Xue Qian Ban(Zhong Ban)", phone: 12333333333, email: "liuzhe@tz.com",
		nationality: "china", city: "beijing", companyName: "Tz", department: "Front"
	},{
		studentName: "Liu She", className: "Xue Qian Ban(Xiao Ban)", phone: 12333333333, email: "liuzhe@tz.com",
		nationality: "china", city: "beijing", companyName: "Tz", department: "Waiter", job: "Ku Bi"
	},{
		studentName: "Liu Te", className: "Xue Qian Ban(Da Ban)", phone: 12333333333, email: "liuzhe@tz.com", 
		nationality: "china", city: "beijing", companyName: "Tz", department: "Tech.", job: "Niu Bi", companyNature: "Limited Cop."
	},{
		studentName: "Liu Re", className: "Xue Qian Ban(Chao Ren Ban)", phone: 12333333333, email: "liuzhe@tz.com", 
		nationality: "china", city: "beijing", companyName: "Tz", department: "IT", job: "Dou Bi", companyNature: "UnLimited", companyScope: "ITITs"
	},{
		studentName: "Liu Me", className: "Xue Qian Ban(Xiao Er Ban)", phone: 12333333333, email: "liuzhe@tz.com", 
		nationality: "china", city: "beijing", companyName: "Tz", department: "HR"
	}]
};
