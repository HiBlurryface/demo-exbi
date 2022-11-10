$(document).ready(function () {
    // header
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
        $('.header__row').toggleClass('active');
        $('.header__burger').toggleClass('active');
        $('body').toggleClass('lock');
        $('.header__logo-pic').toggleClass('_anim-burger');
        setTimeout( function() {
            $('.header__btn').toggleClass('_anim-burger');
            $('.header__nav').toggleClass('_anim-burger');
        }, 500)
    })
    // $('.header__burger').click(function () {
    //     $('.header__burger').removeClass('active');
    //     $('.header__row').removeClass('active');
    //     $('.header__btn').removeClass('_anim-burger');
    //     $('.header__nav').removeClass('_anim-burger');
    //     $('.header__logo-pic').removeClass('_anim-burger');
    //     $('body').removeClass('lock');
    // })
    $('.header__nav-link').click(function() {
        let blockAnchor = $(this).attr('href').replace('#','.')
        let yOffset = 0;
        var w = window.innerWidth;
        yOffset = -150;
        if ( w <= 1220) {
            yOffset = -110;
        }
        let block = document.querySelector(blockAnchor);
        if ( blockAnchor === '.work' ) {
            block.scrollIntoView({ behavior: "smooth" });
        } else {
            let y = block.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
        $('.header__row').removeClass('active');
        $('body').removeClass('lock');
    })
    // footer
    $(document).mouseup(function (e) {
        var popup = $(".popup");
        if (popup.has(e.target).length === 0){
            popup.fadeOut(300);
            $('body').css({
                'overflow':'unset'
            })
        }
    });
    $('.footer__lang-btn').click(function () {
        $(this).toggleClass('active')
        $(this).parent().toggleClass('active')
        $('.footer__lang-dropdown').toggleClass('active');
    })
    $('.footer__form-btn').click(function () {
        if ($('.footer__form-input').val().length < 1 || $('.footer__form-input').val().indexOf('@') < 0) {
            $('.footer__form-input').addClass('error')
        } else {
            $('.footer__form-input').removeClass('error')
            $('.footer__block-subscribe').addClass('hide')
            setTimeout(function() {
                $('.footer__block-complete').addClass('active')
            }, 400)
        }
    })
    $('.footer__form-input').blur(function () {
        if ($('.footer__form-input').val().length > 1) {
            $('.footer__form-input').removeClass('error')
        }
    })
    $('.popup__open').click(function() {
        let popup = $(this).data('popup');
        $('#'+popup).fadeIn(300);
        $('body').css({
            'overflow':'hidden'
        })
        $('.popup__block').scrollTop(0)
    })
    $('.popup__close').click(function() {
        $('.popup').fadeOut(300);
        $('body').css({
            'overflow':'unset'
        })
    })
    $('.cookies__btn').click(function() {
        $('.cookies').addClass('hide');
    })
})