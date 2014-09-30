$.mobile.ajaxEnabled = false;
var findTpl = [
'<li>', 
'<div class="ui-li ui-li-static ui-btn-up-c ui-first-child name clearfix" id="studentinfo">', 
'<div class="classN"><%= name %></div>',
 '<span class="classN">班级 : <%= classN %></span>', 
 '<div class="comp">公司 : <%= comp %></div>', 
 '<div class="indust">行业 : <%= indust %></div>', 
 '<div class="prov">省份 : <%= prov %></div>', 
 '</div>', 
 '<div class="time"></div>',
 '<div class="clearfix"></div>', '</li>', ]
 .join(''), start = 1, max = 10;


function loadData(start, max) {
	if (start > 0) {
//	var searchName = $("#search").val();
		
	 //	alert("刚开始hash是"+hash);
		var hash = window.location.hash == '' ? 'all' : window.location.hash;
		var studentType = '';
	//	alert("此时的hash是"+hash);
		if (hash == 'all') {
		var searchName = $("#search").val();
		var filterType = $("#searchId").val();
		if (filterType == '1') {
			filterType = 'name';
		} else if (filterType == '2') {
			filterType = 'company';
		} else if (filterType == '3') {
			filterType = 'mail';
		}		
		studentType = 'graduate';
		var $list = $('#' + hash + ' .list');
		$list.empty();
		for(var i = 1; i < 10; i++){
					$list.append(_.template(findTpl, {
							name : '张三'+i,
							classN : '201班',
							comp : 'test',
							indust : 'test',
							prov : 'test',
						}));
				};
				$list.listview('refresh');
				

			
		} else if (hash == '#alumnus') {
		
		var searchName = $("#search1").val();
		var filterType = $("#searchId1").val();
		if (filterType == '1') {
			filterType = 'name';
		} else if (filterType == '2') {
			filterType = 'company';
		} else if (filterType == '3') {
			filterType = 'mail';
		}		
		// alert(searchName+"--"+filterType)
			studentType = 'student';
			var $list = $(hash + ' .list');
		$list.empty();
		for(var i = 1; i < 10; i++){
					$list.append(_.template(findTpl, {
							name : '李四'+i,
							classN :'10班',
							comp : 'testsfs',
							indust : 'rewrw',
							prov : 'sfsfsf',
						}));
				};
				$list.listview('refresh');
				
	
		} else if (hash == '#student') {
			studentType = 'recommand';
		}
		
/*
		var filterType = $("#searchId").val();
		if (filterType == '1') {
			filterType = 'name';
		} else if (filterType == '2') {
			filterType = 'company';
		} else if (filterType == '3') {
			filterType = 'mail';
		}
*/
		
	}

	setTimeout(function () {
		$.mobile.loading("hide");
	}, 500);


	}


$(document).on(
         'pagechange', function(obj){
           $.mobile.loading( "show", {
             text: '加载中',
             textVisible: true,
             textonly: false
           });
           start = 1;         
		  loadData(start, max);
		   //alert("1");
         }
		
       ).on("click", ".btn-prev", function () {
	var $this = $(this),
	theme = $this.jqmData("theme") || $.mobile.loader.prototype.options.theme,
	msgText = $this.jqmData("msgtext") || $.mobile.loader.prototype.options.text,
	textVisible = $this.jqmData("textvisible") || $.mobile.loader.prototype.options.textVisible,
	textonly = !!$this.jqmData("textonly");
	html = $this.jqmData("html") || "";
	$.mobile.loading("show", {
		text : msgText,
		textVisible : textVisible,
		theme : theme,
		textonly : textonly,
		html : html
	});
	start -= max;
	if (start < 1) {
		start = 1;
	}

	loadData(start, max);
}).on("click", ".btn-next", function () {

	var $this = $(this),
	theme = $this.jqmData("theme") || $.mobile.loader.prototype.options.theme,
	msgText = $this.jqmData("msgtext") || $.mobile.loader.prototype.options.text,
	textVisible = $this.jqmData("textvisible") || $.mobile.loader.prototype.options.textVisible,
	textonly = !!$this.jqmData("textonly");
	html = $this.jqmData("html") || "";
	$.mobile.loading("show", {
		text : msgText,
		textVisible : textVisible,
		theme : theme,
		textonly : textonly,
		html : html
	});
	start += max;
	//alert(start+";"+max);
	loadData(start, max);
}).on("submit", "#searchForm", function (e) {
e.preventDefault();
//alert("你点了毕业校友的搜索"+"start="+start+"<-->"+"max"+max);
		loadData(start, max);

	
	/*
	var searchName = $("#search").val();
	var filterType=$("#searchId").val();
	var start=1;
	// alert(searchName+"--"+filterType)
		if (filterType == '1') {
			filterType = 'name';
			
		} else if (filterType == '2') {
			filterType = 'company';
			
		} else if (filterType == '3') {
			filterType = 'mail';
			
		}
	
	var hash = window.location.hash == '' ? 'all' : window.location.hash;
	var $list = $('#' + hash + ' .list');
	
	$list.empty();
	$.getJSON("/psc/ACEMTST/EMPLOYEE/CRM/s/WEBLIB_TZ_BYXY.TZ_EMBA_BYXY.FieldFormula.IScript_BYXY",  {
			type : searchName,filter : filterType,start:start,max:max},function (result) {
			$.each(result.data, function (i, item) {
					$list.append(_.template(findTpl, {
							name : item.name,
							classN : item.classN,
							comp : item.comp,
							indust : item.indust,
							prov : item.prov,
						}));
				});
				$list.listview();

		}
		);
*/
	}
	).on("submit", "#searchForm2", function (e) {
	e.preventDefault();
//alert("你点了在校学生的搜索"+"start="+start+"<-->"+"max"+max );
loadData(start, max);
	/*
	
	var searchName = $("#search1").val();
	var filterType=$("#searchId1").val();
	 //alert("value==="+searchName+"--"+filterType)
		if (filterType == '1') {
			filterType = 'name';
			
		} else if (filterType == '2') {
			filterType = 'company';
			
		} else if (filterType == '3') {
			filterType = 'mail';
			
		}
	
	var hash = window.location.hash == '' ? 'all' : window.location.hash;
	//var $list = $('#' + hash + ' .list');
	var $list = $(hash + ' .list');
	$list.empty();
	$.getJSON("/psc/ACEMTST/EMPLOYEE/CRM/s/WEBLIB_TZ_BYXY.TZ_EMBA_BYXY.FieldFormula.IScript_ZXXS_SEA",  {
			type : searchName,filter : filterType},function (result) {
			$.each(result.data, function (i, item) {
					$list.append(_.template(findTpl, {
							name : item.name,
							classN : item.classN,
							comp : item.comp,
							indust : item.indust,
							prov : item.prov,
						}));
				});
				$list.listview();
		}
		);
*/
	}
	)


/**刘莹莹添加-begin*/
$(document).on(
    'pageinit', function(obj){
					var imgurl="";  
					var divname="";  
					imgurl=getCookieValue("imgurl");  
					divname=getCookieValue("divname"); 
					$("#all #imgurl").attr("src",imgurl);	
					$("#all #divname").html(divname);
					
					$("#alumnus #imgurl").attr("src",imgurl);	
					$("#alumnus #divname").html(divname);
					
					$("#student #imgurl").attr("src",imgurl);	
					$("#student #divname").html(divname);
    }
);
function getCookieValue(name){  
    var name = escape(name);  
    //读cookie属性，这将返回文档的所有cookie  
    var allcookies = document.cookie;  
    //查找名为name的cookie的开始位置  
    name += "=";  
    var pos = allcookies.indexOf(name);  
    //如果找到了具有该名字的cookie，那么提取并使用它的值  
    if (pos != -1){                                             //如果pos值为-1则说明搜索"version="失败  
        var start = pos + name.length;                  //cookie值开始的位置  
        var end = allcookies.indexOf(";",start);        //从cookie值开始的位置起搜索第一个";"的位置,即cookie值结尾的位置  
        if (end == -1) end = allcookies.length;        //如果end值为-1说明cookie列表里只有一个cookie  
        var value = allcookies.substring(start,end);  //提取cookie的值  
        return unescape(value);                           //对它解码  
        }  
    else return "";                                             //搜索失败，返回空字符串  
};
/**刘莹莹添加-end*/


function xytjInfo() {
	var $name = $("#tz_tjr_name").val();
	var $tz_tjr_mobile = $("#tz_tjr_mobile").val();
	var $tz_tjxy_name = $("#tz_tjxy_name").val();
	var $sex = $("#sex").val();
	var $tz_gzdw = $("#tz_gzdw").val();
	var $tz_zw = $("#tz_zw").val();
	var $tz_xl = $("#tz_xl").val();
	var $tz_nl = $("#tz_nl").val();
	var $tz_phone = $("#tz_phone").val();
	var $tz_yjdz = $("#tz_yjdz").val();
	var $tz_email = $("#tz_email").val();
	var $tz_fy = $("#tz_fy").val();
	var pattern = /^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))?$/;
	var reg = /^(\d{11})|(((\+86)|(86)|(\+86\s)|(86\s)|(\+86\-)|(86\-))?(\d{11}))$/;
	var emailreg = /^([\w-.]+)@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.)|(([\w-]+.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(]?)$/;
	if (($name.length < 1) || ($name.length > 50) || ($tz_tjr_mobile.length < 1) || ($name.length > 50) || ($tz_tjr_mobile.length < 1) || (!reg.exec($tz_tjr_mobile)) || ($tz_tjxy_name.length < 1) || ($tz_tjxy_name.length > 50) || ($tz_gzdw.length < 1) || ($tz_phone.length < 1) || (!reg.exec($tz_phone)) || ($tz_email.length < 1) || (!emailreg.exec($tz_email))) {
		$("#StuTip").html("").removeClass("wrongTip");
		if ($name.length < 1) {
			$("#StuTip").html("推荐人姓名不能为空").addClass("wrongTip");
			alert("推荐人姓名不能为空");
		} else if ($name.length > 50) {
			$("#StuTip").html("推荐人姓名填写错误").addClass("wrongTip");
			alert("推荐人姓名格式有误");
		}
		if ($tz_tjr_mobile.length < 1) {
			$("#StuTip").html("推荐人手机不能为空").addClass("wrongTip");
			alert("推荐人手机不能为空");
		} else {
			if (!reg.exec($tz_tjr_mobile)) {
				$("#StuTip").html("推荐人手机填写错误").addClass("wrongTip");
				alert("推荐人手机格式有误");
			}
		}
		if ($tz_tjxy_name.length < 1) {
			$("#StuTip").html("推荐学员姓名不能为空").addClass("wrongTip");
			alert("推荐学员姓名不能为空");
		} else if ($tz_tjxy_name.length > 50) {
			$("#StuTip").html("推荐学员姓名填写错误").addClass("wrongTip");
			alert("推荐学员姓名格式错误");
		}
		if ($tz_phone.length < 1) {
			$("#StuTip").html("手机不能为空").addClass("wrongTip");
			alert("手机不能为空");
		} else {
			if (!reg.exec($tz_phone)) {
				$("#StuTip").html("手机填写错误").addClass("wrongTip");
				alert("手机填写格式错误");
			}
		}
		if ($tz_email.length < 1) {
			$("#StuTip").html("电子邮箱不能为空").addClass("wrongTip");
			alert("电子邮箱不能为空");
		} else {
			if (!emailreg.exec($tz_email)) {
				$("#StuTip").html("电子邮箱填写错误").addClass("wrongTip");
				alert("电子邮箱格式有误");
			}
		}
	} else {
		var content = $("#form1").serialize();
		$.ajax({
			type : "POST",
			url : "/psc/ACEMTST/EMPLOYEE/CRM/s/WEBLIB_TZ_XYTJ.TZ_EMBA_XSTJ.FieldFormula.IScript_Save12",
			data : content,
			dataType : "json",
			success : function (jsondata) {
				if (jsondata.result && jsondata.result == 0) {
					alert("请检查输入信息格式是否正确");
				} else {
					alert("推荐成功!");
				}
			}
		});
	}
};




