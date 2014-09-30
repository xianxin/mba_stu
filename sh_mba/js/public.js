// JavaScript Document
//$(document).ready(function(){$(".nav li:last").addClass("navlastLi");});
/* 菜单效果  */
$(".nav_list").hover(function(){
 if($(this).find("li").size()>1){
	 $(this).find(".nav_a").addClass("nav_sub");
	 $(this).find(".nav_ul2").show();
 }
	},function(){$(".nav_list").find("a").removeClass("nav_sub");$(".nav_ul2").hide();});
