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

        // get new captcha
        getNewCaptcha();

        // don't bother if there is no response
        if( !$('input[name=captcha_response]').val() ) {
            return false;
        }

        // do the rest
        var num = parseInt($.trim($('#c-sub').html()));
        $('#c-sub').html(++num)
        $('input[name=captcha_response]').val('');
        return false;

    });

});