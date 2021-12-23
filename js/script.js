$(function(){ 
	
	$("nav li").on("click", function(){
		// nav-item active
		$("nav li").removeClass("active");
		$(this).addClass("active");

		// nav-toggle deactivate
		$("#nav-toggle").removeClass("nav-toggle--active");
	});

	// nav-toggle active
	$("#nav-toggle").on("click", function(e){
		e.stopPropagation();
		$(this).toggleClass("nav-toggle--active");
		$('#header-nav').toggleClass("header-nav--active");
		$('#sidebar').removeClass("sidebar--active");
	});

	// sidebar-toggle active
	$("#sidebar-toggle").on("click", function(e){
		e.stopPropagation();
		$('#nav-toggle').removeClass("nav-toggle--active");
		$('#header-nav').removeClass("header-nav--active");
		$('#sidebar').toggleClass("sidebar--active");
	});

	//hide active navs
	$("body").on("click", function(){
		$('#sidebar').removeClass("sidebar--active");
		$('#nav-toggle').removeClass("nav-toggle--active");
		$('#header-nav').removeClass("header-nav--active");
	});

	//check favorite
	$("[data-favorite]").on("click", function(){
		$(this).toggleClass("fav-btn--active");
	})

}); 