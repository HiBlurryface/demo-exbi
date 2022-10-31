$(document).ready(function () {
    var w = window.innerWidth;
    var bottom = '13%';
    var bottomCrypto = '22%';
    if (w < 650) {
        bottom = 20;
        bottomCrypto = 60;
    }
    setTimeout(function (introAnim) {
        setTimeout(function () {
            $('._anim-block-main').css({
                'transform': 'translate(-50%,0) scale(0.9)'
            })
        }, 000)
        setTimeout(function () {
            $('._anim-block-left').css({
                'transform': 'translate(-60px, 30px)',
                'opacity': '0',
                'visibility': 'hidden',
            })
        }, 1000)
        setTimeout(function () {
            $('._anim-block-right').css({
                'transform': 'translate(60px, 30px)',
                'opacity': '0',
                'visibility': 'hidden',
            })
        }, 1000)
        setTimeout(function () {
            $('.animation__product').css({
                // 'left': '50%',
                // 'transform': 'translateX(50%)'
                // 'justify-content': 'center',
                // 'width': '100%',
                // 'left': '0%',
            })
            $('._anim-block-main').css({
                'transform': 'translate(-50%,-100px)',
                // 'width': '50%',
                'left': '50%',
                'background': 'none'
            })
            $('.animation__item-group').css({
                'opacity': '0',
                'visibility': 'hidden',
            })
            $('.animation__method').css({
                'opacity': '1',
                'visibility': 'visible',
                'bottom': bottom,
            })
            // $('._anim-block-right').css({
            //     'display': 'none',
            // })
            // $('._anim-block-left').css({
            //     'display': 'none',
            // })
        }, 1000)
        setTimeout(function () {
            $('._method-card').css({
                'background': '#111827',
            })
            $('._method-card .animation__method-title').css({
                'color': '#DADADA',
            })
            $('._method-card .animation__method-icon path').css({
                'fill': '#DADADA',
            })
        }, 2000)
        setTimeout(function () {
            $('._method-card').css({
                'background': '#D1D5DB',
            })
            $('._method-card .animation__method-title').css({
                'color': '#111827',
            })
            $('._method-card .animation__method-icon path').css({
                'fill': '#111827',
            })
            $('._method-crypto').css({
                'background': '#111827',
            })
            $('._method-crypto .animation__method-title').css({
                'color': '#DADADA',
            })
            $('._method-crypto .animation__method-icon path').css({
                'fill': '#DADADA',
            })
        }, 3000)
        setTimeout(function () {
            $('._method-crypto').css({
                'transform': 'scale(0.9)',
            })
        }, 3500)
        setTimeout(function () {
            $('._method-crypto').css({
                'transform': 'scale(1)',
            })
        }, 4000)
        setTimeout(function () {
            $('.animation__items').css({
                'transform': 'translateY(-50px)',
                'opacity': '0',
                'visibility': 'hidden'
            })
        }, 5000)
        setTimeout(function () {
            $('.animation__crypto').css({
                'bottom': bottomCrypto,
                'opacity': '1',
                'visibility': 'visible'
            })
        }, 5200)
        setTimeout(function () {
            $('._crypto-block').css({
                'background': '#111827',
                'transform': 'scale(0.9)',
            })
            $('._crypto-block .animation__crypto-name').css({
                'color': '#DADADA',
            })
        }, 6000)
        setTimeout(function () {
            $('._crypto-block').css({
                'transform': 'scale(1)',
            })
        }, 7000)
        setTimeout(function () {
            $('.animation__crypto').css({
                'transform': 'translateY(-50px)',
                'opacity': '0',
                'visibility': 'hidden'
            })
        }, 7500)
        setTimeout(function () {
            $('.intro__animation').css({
                'overflow': 'hidden',
            })
            $('.animation__payment').css({
                'transform': 'translateY(0px)',
                'opacity': '1',
                'visibility': 'visible'
            })
        }, 8000)
        setTimeout(function () {
            $('.animation__payment').css({
                'top': 'unset',
                'bottom': '0'
            })
        }, 8500)
        setTimeout(function () {
            $('.animation__payment-btn').css({
                'transform': 'scale(0.9)',
            })
        }, 9000)
        setTimeout(function () {
            $('.animation__payment-btn').css({
                'transform': 'scale(1)',
            })
        }, 9500)
        setTimeout(function () {
            $('.animation__payment').css({
                'transform': 'translateY(-50px)',
                'opacity': '0',
                'visibility': 'hidden'
            })
        }, 9000)
        setTimeout(function () {
            $('.animation__confirming-wrapper').css({
                'transform': 'translateY(0px)',
                'opacity': '1',
                'visibility': 'visible'
            })
        }, 9500)
        setTimeout(function () {
            $('.animation__confirming-wrapper').css({
                'transform': 'translateY(-120px)',
                'opacity': '0',
                'visibility': 'hidden'
            })
        }, 10500)
        setTimeout(function () {
            $('._animation-success-bg').css({
                'opacity': '1',
                'visibility': 'visible'
            })
            $('.animation__success-wrapper').css({
                'transform': 'translateY(0px)',
                'opacity': '1',
                'visibility': 'visible'
            })
        }, 11500)
        setTimeout(function () {
            $('._animation-success-bg').css({
                'opacity': '0',
                'visibility': 'hidden'
            })
            $('.animation__success-wrapper').css({
                'transform': 'translateY(-120px)',
                'opacity': '0',
                'visibility': 'hidden'
            })
        }, 12500)
        introAnim()
    }, 2000)
})