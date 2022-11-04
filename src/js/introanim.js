$(document).ready(function () {
    let translate = 0;
    let paymentHeight = $('.animation__payment').height();
    let paymentWrapperHeight = $('.animation__payment-wrapper').height();
    translate = paymentHeight - paymentWrapperHeight;
    function introAnim() {
        setTimeout(function () {
            $('._anim-block-left').removeClass('_show-block')
        }, 000)
        setTimeout(function () {
            $('._anim-block-main').removeClass('_show-block')
        }, 500)
        setTimeout(function () {
            $('._anim-block-right').removeClass('_show-block')
        }, 1000)
        setTimeout(function () {
            $('._anim-block-main').addClass('_anim-scale')
        }, 2000)
        setTimeout(function () {
            $('._anim-block-left').addClass('_hide')
        }, 3000)
        setTimeout(function () {
            $('._anim-block-right').addClass('_hide')
        }, 3000)
        setTimeout(function () {
            $('.animation__product').addClass('_anim-translate')
            $('._anim-block-main').addClass('_anim-translate')
            $('.animation__item-group').addClass('_hide')
            $('.animation__method').addClass('_show')
        }, 3000)
        setTimeout(function () {
            $('._method-card').addClass('_anim')
        }, 4000)
        setTimeout(function () {
            $('._method-card').removeClass('_anim')
            $('._method-crypto').addClass('_anim');
        }, 5000)
        setTimeout(function () {
            $('._method-crypto').addClass('_anim-scale')
        }, 5500)
        setTimeout(function () {
            $('._method-crypto').removeClass('_anim-scale')
        }, 6000)   
        setTimeout(function () {
            $('.animation__wrapper').addClass('_anim')
            $('.animation__method,.animation__product').addClass('_hide')
            $('._anim-block-main').addClass('_hide')
        }, 7000)

        setTimeout(function () {
            $('.animation__crypto').addClass('_show')
        }, 8000)
        setTimeout(function () {
            $('._crypto-block').addClass('_anim');
        }, 9000)
        setTimeout(function () {
            $('._crypto-block').addClass('_anim-scale');
        }, 10000)
        setTimeout(function () {
            $('._crypto-block').removeClass('_anim-scale')
        }, 10500)
        setTimeout(function () {
            $('.animation__crypto').addClass('_hide');
        }, 11000)

        setTimeout(function () {
            $('.animation__payment-wrapper').addClass('_show')
        }, 12000)
        setTimeout(function () {
            $('.animation__payment-wrapper').css({
                'top': translate
            })
        }, 13500)
        setTimeout(function () {
            $('.animation__payment-btn').addClass('_anim-scale')
        }, 15000)
        setTimeout(function () {
            $('.animation__payment-btn').removeClass('_anim-scale')
        }, 15500)
        setTimeout(function () {
            $('.animation__payment-wrapper').addClass('_hide')
        }, 16500)

        setTimeout(function () {
            $('.animation__confirming-wrapper').addClass('_show')
        }, 17500)
        setTimeout(function () {
            $('.animation__confirming-wrapper').addClass('_hide')
        }, 19500)

        setTimeout(function () {
            $('._animation-success-bg').css({
                'opacity': '1',
                'visibility': 'visible'
            })
            $('.animation__success-wrapper').addClass('_show')
        }, 21500)
        setTimeout(function () {
            $('._animation-success-bg').css({
                'opacity': '0',
                'visibility': 'hidden'
            })
            $('.animation__success-wrapper').addClass('_hide')
        }, 23500)
        setTimeout(function () {
            $('._anim-block-main').removeClass('_anim-scale')
            $('._anim-block-main').removeClass('_anim-translate')
            $('._anim-block-main').addClass('_show-block')
            $('._anim-block-left').removeClass('_hide')
            $('._anim-block-left').addClass('_show-block')
            $('._anim-block-right').removeClass('_hide')
            $('._anim-block-right').addClass('_show-block')
            $('.animation__product').removeClass('_anim-translate')
        }, 24500)
        setTimeout(function () {
            $('div').removeClass('_anim')
            $('div').removeClass('_anim-scale')
            $('div').removeClass('_hide')
            $('div').removeClass('_show')
            $('div').removeClass('_anim-translate')
            $('.animation__payment-wrapper').css({
                'top': '0'
            })
        }, 25500)
        setTimeout(function() {
            introAnim()
        }, 26000)
    }
    setTimeout(function() {
        introAnim()
    }, 1500)
})