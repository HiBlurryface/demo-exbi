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

    let scrollPrev = 0; 
    $(window).scroll(function () {
        var scrolled = $(window).scrollTop();

        if (scrolled > 1 && scrolled > scrollPrev) {
            $('.header').addClass('header-out');
        } else {
            $('.header').removeClass('header-out');
        }
        if (scrolled > 1 && scrolled > scrollPrev) {
            $('.cookies').addClass('cookies-out');
        } else {
            $('.cookies').removeClass('cookies-out');
        }
        scrollPrev = scrolled;
    });

    $('.header__burger').click(function () {
        $('.header__row').addClass('active');
        $('body').addClass('lock');
    })
    $('.header__row-close').click(function () {
        $('.header__row').removeClass('active');
        $('body').removeClass('lock');
    })
    $('.header__nav-link').click(function() {
        let blockAnchor = $(this).attr('href').replace('#','.')
        console.log(blockAnchor)
        let yOffset = -75;
        let block = document.querySelector(blockAnchor);
        if ( blockAnchor === '.work' ) {
            block.scrollIntoView({ behavior: "smooth" });
        } else {
            let y = block.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    })
    // footer
    $('.footer__lang-btn').click(function () {
        $(this).toggleClass('active')
        $(this).parent().toggleClass('active')
        $('.footer__lang-dropdown').toggleClass('active');
    })
    $('.footer__lang-menu').click(function () {
        console.log('da')
    })
    $('.footer__form-btn').click(function () {
        if ($('.footer__form-input').val().length < 1 || $('.footer__form-input').val().indexOf('@') < 0) {
            $('.footer__form-input').addClass('error')
        } else {
            $('.footer__form-input').removeClass('error')
            $('.footer__block-complete').addClass('active')
        }
    })
    $('.footer__form-input').blur(function () {
        if ($('.footer__form-input').val().length > 1) {
            $('.footer__form-input').removeClass('error')
        }
    })
    // $('#terms-btn').click(function() {
    //     $('#terms-popup').fadeIn(300);
    //     $('body').css({
    //         'overflow':'hidden'
    //     })
    //     // $('#terms-popup').addClass('active');
    // })
    // $('.popup__close').click(function() {
    //     $('#terms-popup').fadeOut(300);
    //     $('body').css({
    //         'overflow':'unset'
    //     })
    // })
    $('.popup__open').click(function() {
        let popup = $(this).data('popup');
        $('#'+popup).fadeIn(300);
        $('body').css({
            'overflow':'hidden'
        })
    })
    $('.popup__close').click(function() {
        $('.popup').fadeOut(300);
        $('body').css({
            'overflow':'unset'
        })
    })
})