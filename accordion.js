

$(function () {
	
	$('.accordion_ttl').on("click", function() {
		$(this).toggleClass("open");
		$(this).next().slideToggle();
	}).next().hide();
	
	
});
