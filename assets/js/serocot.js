function getNewCaptcha() {

	// yes
	alert('beep');

}

$(window).load(function() {

	$('.captcha').click(function(){
		getNewCaptcha();
	})

	$('.captcha').hover(function() {
    	$(this).css('cursor','pointer');
	})

})
