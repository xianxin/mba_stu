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

/* get cookie */
function GetCookie(name) {
  var arg = name + "=";
  var alen = arg.length;
  var clen = document.cookie.length;
  var i = 0;
  while (i < clen) {
    var j = i + alen;
    //alert(j);
    if (document.cookie.substring(i, j) == arg) return getCookieVal(j);
    i = document.cookie.indexOf(" ", i) + 1;
    if (i == 0) break;
  }
  return null;
}

function getCookieVal(offset) {
  var endstr = document.cookie.indexOf(";", offset);
  if (endstr == -1) endstr = document.cookie.length;
  return unescape(document.cookie.substring(offset, endstr));
}

/* welcome text in header.html (hder_r) */
function showWelcomeText () {
  var name = GetCookie("name");
  var welcome = "未登录考生显示这段文本";
  if (name) welcome = "欢迎<span>" + getCookie("name") + "</span>, 今天是 : <span>" + new Date().Format('yyyy年MM月dd日') + "</span> | <a href='#'>安全退出</a>"
  $("hder_r p").html(welcome);
}