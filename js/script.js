$(function(){ 
	
	$("nav li").on("click", function(){
		// nav-item active
		$("nav li").removeClass("active");
		$(this).addClass("active");

		// nav-toggle deactivate
		$("#nav-toggle").removeClass("nav-toggle--active");
	});

	// nav-toggle active
	$("#nav-toggle").on("click", function(){
		$(this).toggleClass("nav-toggle--active");
	});

}); 