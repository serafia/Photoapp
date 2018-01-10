$(function(){
	$('body').scrollspy({ target: '#navbar' });
	changeNavbar();
	$(window).scroll(function() {
		changeNavbar();
	});

	function changeNavbar() {
		var scrollPosition = $(document).scrollTop();
		console.log(scrollPosition);
		if(scrollPosition > 0) {
			$('#navbar').addClass('dark');
		} else {
			$('#navbar').removeClass('dark');
		}
	}

	$('#myCarousel1').on('slid.bs.carousel', function () {
	  var slideNumber = $('#slideNumber');
	  var slideActiveNumber = $('div.active').data('number');
	  slideNumber.text(slideActiveNumber);
	});
});


