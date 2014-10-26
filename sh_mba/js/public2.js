
/* options for search page enable empty input */
var natureTypeOptions_Search = [
	'','国有或国有控股','外商合资','外商独资','港澳台合资',
	'港澳台独资','民营或私有控股','政府部门','事业单位','非营利机构','其他'
];

/* options for personal page : must select one */
var addressTypeOptions = ['工作','家庭地址','现居地址','户籍','其他'];
var phoneTypeOptions = ['手机','工作','公司电话','住宅','传真','其他'];
var emailTypeOptions = ['工作','次要','个人','其他'];
var snsTypeOptions = ['QQ','个人微博','微信','个人主页','个人博客','Facebook','MSN','其他'];
var diplomaTypeOptions = ['博士研究生','硕士研究生','本科','大专','高中','中专/技校','其他'];
var degreeTypeOptions = ['博士','硕士','学士','其他'];
var industryTypeOptions = [
	'快速消费品（食品/饮料/化妆品）','耐用消费品（服装/纺织/家具/家电）','专业服务（咨询/法律）',
	'金融服务（银行/证劵/保险/投资/基金等）','零售/贸易','交通物流','IT/网络',
	'房地产/建筑/装潢设计','通信','电子/半导体','保健/医药/生化/医疗设备/医院',
	'能源/精细化工','媒体/广告/公关','政府/非盈利机构','教育/培训','其他','工业品/设备','汽车/摩托车'
];
var natureTypeOptions = [
	'国有或国有控股','外商合资','外商独资','港澳台合资',
	'港澳台独资','民营或私有控股','政府部门','事业单位','非营利机构','其他'
];

var btnFn = function( e ){
	alert( e.target );
	return false;
};

function delayOpenDialogBy100(name){
	setTimeout(function(){
		openDialog(name);
	}, 100);
}

function openDialog(name){
	easyDialog.open({
		container : name,
		yesFn : btnFn,
		noFn : true,
		fixed : false
	});
}

function fastbind(selector, except){
  	$(selector).not(except || "theNotExistElement").each(function(){
		var s=$(this);
		var z=parseInt(s.css("z-index"));
		var dt=$(this).children("dt");
		var dd=$(this).children("dd");
		var _show=function(){dd.slideDown(200);dt.addClass("cur");s.css("z-index",z+1);};
		var _hide=function(){dd.slideUp(200);dt.removeClass("cur");s.css("z-index",z);};
		dt.click(function(){dd.is(":hidden")?_show():_hide();});
		dd.find("a").click(function(){dt.html($(this).html());_hide();});
		$("body").click(function(i){ !$(i.target).parents(selector).first().is(s) ? _hide():"";});
	});
};

function showTab(id_controller, id_content, id_title, num){
	var lis = document.getElementById(id_controller).getElementsByTagName('li');
	for(i=0;i<lis.length;i++){
		lis[i].className = '';
		document.getElementById(id_content+(i+1)).style.display = 'none';
	}
	document.getElementById(id_title+num).className = 'current';
	document.getElementById(id_content+num).style.display = 'block';
}

var searchInterval = 0.5 * 1000;

function okWithSearchInterval(_expire){
	if (_expire && new Date().getTime() < _expire) return false;
	return true;
}

function getExpireBySearchInterval(){
	return new Date().getTime() + searchInterval;
}
  		
function moduleDirective_checkTdEmpty(module){
	module.filter('checkTdEmpty', function(){
		return function(input){
			if (angular.isString(input) && !(angular.equals(input, null) || angular.equals(input,''))){
				return input;
			} else {
				return '&nbsp;';
			}
		};
	});
}

function moduleDirective_trustHtml(module){
	module.filter('to_trusted',['$sce',function($sce){
		return function(text){return $sce.trustAsHtml(text);};
	}]);
}

function moduleDirective_afterRenderFinish(module){
	module.directive('onFinishRenderFilters', function($timeout){
		return {
			restrict: 'A',
			link: function(scope, element, attr){
				if (scope.$last === true){
					$timeout(function(){
						scope.$emit('ngRepeatFinished');
					});
				}
			}
		};
	});
}

function moduleDirective_datePicker(module){
	module.directive('datepicker', function() {
		return {
			restrict: 'A',
			replace: true,
			require: '?ngModel',
			scope: {
				select: '&'
			},
			link: function(scope, element, attrs, ngModel) {
				if (!ngModel) return;
				var optionsObj = {};
				optionsObj.dateFormat = 'yy-mm-dd';
				var updateModel = function(dateTxt) {
					scope.$apply(function() {
						ngModel.$setViewValue(dateTxt);
					});
				};
				optionsObj.onSelect = function(dateTxt,
					picker) {
					updateModel(dateTxt);
					if (scope.select) {
						scope.$apply(function() {
							scope.select({
								date: dateTxt
							});
						});
					}
				};
				ngModel.$render = function() {
					element.datepicker('setDate', ngModel.$viewValue || '');
				};
				element.datepicker(optionsObj);
			}
		};
	});
}

function moduleDirective_fastBind(module){
	module.directive('fastBindSelect', ['$timeout', function (timer) {
	    return {
	    	restrict: 'A',
			require: '?ngModel',
			scope: {
				select: '&'
			},
	        link: function (scope, elem, attrs, ctrl) {
	        	if (attrs &&
	        		attrs.fastBindSelect &&
	        		attrs.olength &&
	        		attrs.fastBindSelect == attrs.olength){
	        		timer(function(){fastbind(elem.parent().parent().parent());}, 0);
	        	}
	        }
	    }
	}]);
}
