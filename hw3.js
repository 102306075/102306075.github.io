$(document).ready(begin);

function begin()
{

	$("#content").text("0");

	$("#0").click(numberadd);
	$("#1").click(numberadd);
	$("#2").click(numberadd);
	$("#3").click(numberadd);
	$("#4").click(numberadd);
	$("#5").click(numberadd);
	$("#6").click(numberadd);
	$("#7").click(numberadd);
	$("#8").click(numberadd);
	$("#9").click(numberadd);
	$("#clear").click(return0);

}


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

function return0(){
	
	$("#content").text("0");
}