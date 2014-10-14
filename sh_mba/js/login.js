$(document).ready(function(){
	getVerify();
	$("#_verify").click(function(){
		getVerify();
	})
	$("#_username").placeholder();
	$("#_password").placeholder();
	$("#_verifyid").placeholder();
	
});
            
function SKclass (obj,Rate,speed) {
var oL=obj.offsetLeft;
//var oT=obj.offsetTop;
this.stop=null;
this.oTime=null;
this.state=0;
var om=this;
this.start=function(){
if(this.state==0){
ostart();
this.state=1;
}
}
var ostart=function(){
if(parseInt(obj.style.left)==oL-5){
//obj.style.top=oT+2+"px";
setTimeout(function(){obj.style.left=oL+5+"px"},Rate)
}
else{
//obj.style.top=oT-2+"px";
setTimeout(function(){obj.style.left=oL-5+"px"},Rate)
}
om.oTime=setTimeout(function(){ostart()},speed);
}
this.stop=function(){
clearTimeout(om.oTime);
this.state=0;

}
}
function _login(){
	var formData = $("#login_form").serialize();	
	$.ajax({
		type: "post",
		async :true,
		data:formData,
		url: "/psc/ACEMTST/EMPLOYEE/CRM/s/WEBLIB_MBA_STU.TZ_MBA_STU_LOGIN.FieldFormula.Iscript_login",
		dataType: "json",
		success: function(result){
			var loginFlg=result.resultFlg;
			if(loginFlg=="success"){
				location.href="/mbastu/home.html";
			}else{
				$(".cont_tab_ts").html(result.errorDescr);
				$(".error_td").css("display","block");
				var m=document.getElementById("cont_dlk");
				var nn=new SKclass(m,80,20);
				nn.start();
				setTimeout(nn.stop,200);
			}
		}
	});
}
function getVerify(){
	$.ajax({
		url: "/psc/ACEMTST/EMPLOYEE/CRM/s/WEBLIB_MBA_STU.TZ_MBA_STU_LOGIN.FieldFormula.Iscript_getVerify",
		dataType: "json",
		type: "get",
		data:{t:Math.random()},
		async :true,
		success: function(result){
			$("#_verify").attr("src",result.verifyImg); 	
		}
	});
}



