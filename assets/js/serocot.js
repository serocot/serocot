function getNewCaptcha() {

    // the three samples is just temporary

    var cnum = Math.floor(Math.random() * 3) + 1;

    $(document).ready(function(){
        $('.captcha').attr('src', '../assets/img/sample_' + cnum + '.jpg');
    });

};

$(window).load(function() {

    $('.captcha').click(function(){
        getNewCaptcha();
    });

    $('#captcha-switch').click(function(){
        getNewCaptcha();
    });

    $('.captcha').hover(function() {
        $(this).css('cursor', 'pointer');
    });

    $('#captcha-form').submit(function() {
        // stuff here
        getNewCaptcha();
    });

});