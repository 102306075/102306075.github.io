$(document).ready(begin);

function begin()
{

	$("#content").text("0");

	$("#button0").click(numberadd);
	$("#button1").click(numberadd);
	$("#button2").click(numberadd);
	$("#button3").click(numberadd);
	$("#button4").click(numberadd);
	$("#button5").click(numberadd);
	$("#button6").click(numberadd);
	$("#button7").click(numberadd);
	$("#button8").click(numberadd);
	$("#button9").click(numberadd);
	$("#clear").click(return0);
	$("#button9").click(numberadd);
	$("#button9").click(numberadd);
	$("#button9").click(numberadd);
}


var prev_num,prev_op;

function numberadd(){
		//alert("test2");
		var testif0 = $("#content").text();
		if (testif0 !="0")
			$("#content").text(testif0+$(this).text);
		else
			$("#content").text($(this).text));
	}
function getnowcontent(){
	return $("#content").text();
}

function return0(){
	alert("test3");
	prev_num=0.0;
	prev_op="";
	
	$("#content").text("0");
}