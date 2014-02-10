$(document).ready(function(){
	var bg = localStorage.bgimage;
	var defaultImage = "bg1.jpg";
	if(localStorage.getItem("bgimage") === null){
		$("#list").val("bg1.jpg");
	}else{
		$("#list").val(bg); 
		$("body").css("background-image", "url(/"+bg+")");
	}
	$("#list").change(function(){
		localStorage.bgimage = $("#list").val();
		$("body").css("background-image", "url(/"+localStorage.bgimage+")");
	});
	$("#reset").click(function(){
		localStorage.removeItem("bgimage");
		$("body").css("background-image", "url(/"+defaultImage+")");
		$("#list").val(defaultImage);
	});	
});