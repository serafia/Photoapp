
$('body').scrollspy({ target: '#navbar' });


changeNavbar();
$(window).scroll(function() {
	changeNavbar();
});

function changeNavbar() {
	var scrollPosition = $(document).scrollTop();
	//console.log(scrollPosition);
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

/* smooth scroll */

$('a[href*="#"]').not('[href="#"]').not('[href*="#myCarousel"]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate ({
                 scrollTop: target.offset().top
             }, 1000);
            return false;
        }
    }
});


$('.collapse .nav-links .nav-link').click(function() {
	$('#navContent').animate({height: '0'} ,400, removeClassShow);
});
function removeClassShow() {
	$(this).removeClass('show');
}