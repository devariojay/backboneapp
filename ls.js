<script type="text/javascript">
	$(document).ready(function(){
		var bg = localStorage.bgcolor;
		var defaultColor = "white";
		if(localStorage.getItem("bgcolor") === null){
			$("#list").val("white");
		}else{
			$("#list").val(bg); 
			$("body").css("background-color", bg);
		}
		$("#submitbtn").click(function(){
			localStorage.bgcolor = $("#list").val();
			$("body").css("background-color", localStorage.bgcolor);
		});
		$("#reset").click(function(){
			localStorage.removeItem("bgcolor");
			$("body").css("background-color", defaultColor);
			$("#list").val(defaultColor);
		});	
	});
</script>