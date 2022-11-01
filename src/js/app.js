$(document).ready(function () {
    // header
    // if ( $(window).scrollTop() > 1 ) {
    //     $('.header').addClass('active')
    // }
    // $(window).scroll(function () {
    //     if ( $(window).scrollTop() > 1 ) {
    //         $('.header').addClass('active')
    //     } else {
    //         $('.header').removeClass('active')
    //     }
    // })

    $('.header__burger').click(function () {
        $('.header__row').addClass('active');
        $('body').addClass('lock');
    })
    $('.header__row-close').click(function () {
        $('.header__row').removeClass('active');
        $('body').removeClass('lock');
    })

    // footer
    $('.footer__lang-btn').click(function () {
        $(this).toggleClass('active')
        $(this).parent().toggleClass('active')
        $('.footer__lang-dropdown').toggleClass('active');
    })
    $('.footer__lang-menu').click(function() {
        console.log('da')
    })
    $('.footer__form-btn').click(function () {
        if ($('.footer__form-input').val().length < 1 || $('.footer__form-input').val().indexOf('@') < 0) {
            $('.footer__form-input').addClass('error')
        } else {
            $('.footer__form-input').removeClass('error')
        }
    })
    $('.footer__form-input').blur(function () {
        if ($('.footer__form-input').val().length > 1) {
            $('.footer__form-input').removeClass('error')
        }
    })
})