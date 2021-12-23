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
		$('#header-nav').toggleClass("header-nav--active");
	});

	// sidebar-toggle active
	$("#sidebar-toggle").on("click", function(e){
		e.stopPropagation();
		$('#nav-toggle').removeClass("nav-toggle--active");
		$('#sidebar-wrap').toggleClass("sidebar-wrap--active");
	});
	$("body").on("click", function(){
		$('#sidebar-wrap').removeClass("sidebar-wrap--active");
	});

}); 