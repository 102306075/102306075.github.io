$(function()  {

function numberadd(){
		//alert("test2");
		var testif0 = $("#content").text();
		if (testif0 ==="0")
			$("#content").text(event.target.id.charAt(0));
		else
			$("#content").text(testif0+event.target.id.charAt(0));
	}
function getnowcontent(){
	return $("#content").text();
}

function clear(){
	
	$("#content").text("0");
}
function plus(){
	var number1 = $("#content").text();

	$("#content").text(0);

}
function equal(){
	var number2 =$("#content").text();
	var c=(number1+number2).toString();
	$("#content").text(c);
}

$('#1').on('click',function(){ numberadd(); });
$('#2').on('click',function(){ numberadd(); });
$('#3').on('click',function(){ numberadd(); });
$('#4').on('click',function(){ numberadd(); });
$('#5').on('click',function(){ numberadd(); });
$('#6').on('click',function(){ numberadd(); });
$('#7').on('click',function(){ numberadd(); });
$('#8').on('click',function(){ numberadd(); });
$('#9').on('click',function(){ numberadd(); });
$('#0').on('click',function(){ numberadd(); });
$('#plus').on('click',function(){ plus(); });
$('#clear').on('click',function(){ clear(); });

});
