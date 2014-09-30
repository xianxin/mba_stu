// JavaScript Document
//$(document).ready(function(){$(".nav li:last").addClass("navlastLi");});
/* 菜单效果  */
$(".nav_list").hover(function(){
 if($(this).find("li").size()>1){
	 $(this).find(".nav_a").addClass("nav_sub");
	 $(this).find(".nav_ul2").show();
 }
	},function(){$(".nav_list").find("a").removeClass("nav_sub");$(".nav_ul2").hide();});

/*-jsfct- Format
 * function 格式化日期
 * parameter 格式(yyyy-MM-dd hh:mm:ss)
 * example [var today = new Date(); var format = today.Format("yyyy-MM-dd");]
 */
Date.prototype.Format = function (fmt) { //author: meizz
  var o = {
    "M+": this.getMonth() + 1, /*月份*/
    "d+": this.getDate(), /*日*/
    "h+": this.getHours(), /*小时*/
    "m+": this.getMinutes(), /*分*/
    "s+": this.getSeconds(), /*秒*/
    "q+": Math.floor((this.getMonth() + 3) / 3), /*季度*/
    "S": this.getMilliseconds() /*毫秒*/
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}