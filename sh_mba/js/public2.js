/*-jsfct- Format
 * function ��ʽ������
 * parameter ��ʽ(yyyy-MM-dd hh:mm:ss)
 * example [var today = new Date(); var format = today.Format("yyyy-MM-dd");]
 */
Date.prototype.Format = function (fmt) { //author: meizz
  var o = {
    "M+": this.getMonth() + 1, /*�·�*/
    "d+": this.getDate(), /*��*/
    "h+": this.getHours(), /*Сʱ*/
    "m+": this.getMinutes(), /*��*/
    "s+": this.getSeconds(), /*��*/
    "q+": Math.floor((this.getMonth() + 3) / 3), /*����*/
    "S": this.getMilliseconds() /*����*/
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
  var welcome = "δ��¼������ʾ����ı�";
  if (name) welcome = "��ӭ<span>" + getCookie("name") + "</span>, ������ : <span>" + new Date().Format('yyyy��MM��dd��') + "</span> | <a href='#'>��ȫ�˳�</a>"
  $("hder_r p").html(welcome);
}