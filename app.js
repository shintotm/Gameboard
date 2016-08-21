var main = function() {
	$('a.more-btn').click(function() {
		$(this).next('ul.more-menu').toggle();
	});
	
	$('li.share').click(function() {
		$('li.share-menu').toggle();
	});
	
	$('.notification').click(function() {
		$(this).toggleClass('active');
		
	});
};
$(document).ready(main);