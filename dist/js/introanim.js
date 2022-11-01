// $(document).ready(function () {
//     var w = window.innerWidth;
//     var bottom = '13%';
//     var bottomCrypto = '22%';
//     if (w < 650) {
//         bottom = 20;
//         bottomCrypto = 60;
//     }
//     function introAnim() {
//         setTimeout(function () {
//             $('._anim-block-main').css({
//                 'transform': 'translate(-50%,0) scale(0.9)'
//             })
//         }, 000)
//         setTimeout(function () {
//             $('._anim-block-left').css({
//                 'transform': 'translate(-60px, 30px)',
//                 'opacity': '0',
//                 'visibility': 'hidden',
//             })
//         }, 1000)
//         setTimeout(function () {
//             $('._anim-block-right').css({
//                 'transform': 'translate(60px, 30px)',
//                 'opacity': '0',
//                 'visibility': 'hidden',
//             })
//         }, 1000)
//         setTimeout(function () {
//             $('.animation__product').css({
//                 // 'left': '50%',
//                 // 'transform': 'translateX(50%)'
//                 // 'justify-content': 'center',
//                 // 'width': '100%',
//                 // 'left': '0%',
//             })
//             $('._anim-block-main').css({
//                 'transform': 'translate(-50%,-100px)',
//                 // 'width': '50%',
//                 'left': '50%',
//                 'background': 'none'
//             })
//             $('.animation__item-group').css({
//                 'opacity': '0',
//                 'visibility': 'hidden',
//             })
//             $('.animation__method').css({
//                 'opacity': '1',
//                 'visibility': 'visible',
//                 'bottom': bottom,
//             })
//             // $('._anim-block-right').css({
//             //     'display': 'none',
//             // })
//             // $('._anim-block-left').css({
//             //     'display': 'none',
//             // })
//         }, 1000)
//         setTimeout(function () {
//             $('._method-card').css({
//                 'background': '#111827',
//             })
//             $('._method-card .animation__method-title').css({
//                 'color': '#DADADA',
//             })
//             $('._method-card .animation__method-icon path').css({
//                 'fill': '#DADADA',
//             })
//         }, 2000)
//         setTimeout(function () {
//             $('._method-card').css({
//                 'background': '#D1D5DB',
//             })
//             $('._method-card .animation__method-title').css({
//                 'color': '#111827',
//             })
//             $('._method-card .animation__method-icon path').css({
//                 'fill': '#111827',
//             })
//             $('._method-crypto').css({
//                 'background': '#111827',
//             })
//             $('._method-crypto .animation__method-title').css({
//                 'color': '#DADADA',
//             })
//             $('._method-crypto .animation__method-icon path').css({
//                 'fill': '#DADADA',
//             })
//         }, 3000)
//         setTimeout(function () {
//             $('._method-crypto').css({
//                 'transform': 'scale(0.9)',
//             })
//         }, 3500)
//         setTimeout(function () {
//             $('._method-crypto').css({
//                 'transform': 'scale(1)',
//             })
//         }, 4000)
//         setTimeout(function () {
//             $('.animation__method,.animation__product').css({
//                 'transform': 'translateY(-50px)',
//                 'opacity': '0',
//                 'visibility': 'hidden'
//             })
//         }, 5000)
//         setTimeout(function () {
//             $('.animation__crypto').css({
//                 'bottom': bottomCrypto,
//                 'opacity': '1',
//                 'visibility': 'visible'
//             })
//         }, 5200)
//         setTimeout(function () {
//             $('._crypto-block').css({
//                 'background': '#111827',
//                 'transform': 'scale(0.9)',
//             })
//             $('._crypto-block .animation__crypto-name').css({
//                 'color': '#DADADA',
//             })
//         }, 6000)
//         setTimeout(function () {
//             $('._crypto-block').css({
//                 'transform': 'scale(1)',
//             })
//         }, 7000)
//         setTimeout(function () {
//             $('.animation__crypto').css({
//                 'transform': 'translateY(-50px)',
//                 'opacity': '0',
//                 'visibility': 'hidden'
//             })
//         }, 7500)
//         setTimeout(function () {
//             $('.intro__animation').css({
//                 'overflow': 'hidden',
//             })
//             $('.animation__payment').css({
//                 'transform': 'translateY(0px)',
//                 'opacity': '1',
//                 'visibility': 'visible'
//             })
//         }, 8000)
//         setTimeout(function () {
//             $('.animation__payment').css({
//                 // 'top': 'unset',
//                 // 'bottom': '0'
//                 'top': '-200px'
//             })
//         }, 8500)
//         setTimeout(function () {
//             $('.animation__payment-btn').css({
//                 'transform': 'scale(0.9)',
//             })
//         }, 10000)
//         setTimeout(function () {
//             $('.animation__payment-btn').css({
//                 'transform': 'scale(1)',
//             })
//         }, 10500)
//         setTimeout(function () {
//             $('.animation__payment').css({
//                 'transform': 'translateY(-50px)',
//                 'opacity': '0',
//                 'visibility': 'hidden'
//             })
//         }, 11000)
//         setTimeout(function () {
//             $('.animation__confirming-wrapper').css({
//                 'transform': 'translateY(0px)',
//                 'opacity': '1',
//                 'visibility': 'visible'
//             })
//         }, 11500)
//         setTimeout(function () {
//             $('.animation__confirming-wrapper').css({
//                 'transform': 'translateY(-120px)',
//                 'opacity': '0',
//                 'visibility': 'hidden'
//             })
//         }, 12500)
//         setTimeout(function () {
//             $('._animation-success-bg').css({
//                 'opacity': '1',
//                 'visibility': 'visible'
//             })
//             $('.animation__success-wrapper').css({
//                 'transform': 'translateY(0px)',
//                 'opacity': '1',
//                 'visibility': 'visible'
//             })
//         }, 13500)
//         setTimeout(function () {
//             $('._animation-success-bg').css({
//                 'opacity': '0',
//                 'visibility': 'hidden'
//             })
//             $('.animation__success-wrapper').css({
//                 'transform': 'translateY(-120px)',
//                 'opacity': '0',
//                 'visibility': 'hidden'
//             })
//         }, 14500)
//         setTimeout(function() {
//             introAnim()
//         }, 15000)
//     }
//     setTimeout(function() {
//         introAnim()
//     }, 2000)
// })

$(document).ready(function () {
    let translate = 0;
    let paymentHeight = $('.animation__payment').height();
    let paymentWrapperHeight = $('.animation__payment-wrapper').height();
    translate = paymentHeight - paymentWrapperHeight;
    function introAnim() {
        setTimeout(function () {
            $('._anim-block-main').addClass('_anim-scale')
        }, 000)
        setTimeout(function () {
            $('._anim-block-left').addClass('_hide')
        }, 1000)
        setTimeout(function () {
            $('._anim-block-right').addClass('_hide')
        }, 1000)
        setTimeout(function () {
            $('.animation__product').addClass('_anim-translate')
            $('._anim-block-main').addClass('_anim-translate')
            $('.animation__item-group').addClass('_hide')
            $('.animation__method').addClass('_show')
        }, 1000)
        setTimeout(function () {
            $('._method-card').addClass('_anim')
        }, 2000)
        setTimeout(function () {
            $('._method-card').removeClass('_anim')
            $('._method-crypto').addClass('_anim');
        }, 3000)
        setTimeout(function () {
            $('._method-crypto').addClass('_anim-scale')
        }, 3500)
        setTimeout(function () {
            $('._method-crypto').removeClass('_anim-scale')
        }, 4000)   
        setTimeout(function () {
            $('.animation__wrapper').addClass('_anim')
            $('.animation__method,.animation__product').addClass('_hide')
        }, 5000)

        setTimeout(function () {
            $('.animation__crypto').addClass('_show')
        }, 6000)
        setTimeout(function () {
            $('._crypto-block').addClass('_anim');
        }, 7000)
        setTimeout(function () {
            $('._crypto-block').addClass('_anim-scale');
        }, 8000)
        setTimeout(function () {
            $('._crypto-block').removeClass('_anim-scale')
        }, 8500)
        setTimeout(function () {
            $('.animation__crypto').addClass('_hide');
        }, 9000)

        setTimeout(function () {
            $('.animation__payment-wrapper').addClass('_show')
        }, 10000)
        setTimeout(function () {
            $('.animation__payment-wrapper').css({
                'top': translate
            })
        }, 11500)
        setTimeout(function () {
            $('.animation__payment-btn').addClass('_anim-scale')
        }, 13000)
        setTimeout(function () {
            $('.animation__payment-btn').removeClass('_anim-scale')
        }, 13500)
        setTimeout(function () {
            $('.animation__payment-wrapper').addClass('_hide')
        }, 14500)

        setTimeout(function () {
            $('.animation__confirming-wrapper').addClass('_show')
        }, 15500)
        setTimeout(function () {
            $('.animation__confirming-wrapper').addClass('_hide')
        }, 17500)

        setTimeout(function () {
            $('._animation-success-bg').css({
                'opacity': '1',
                'visibility': 'visible'
            })
            $('.animation__success-wrapper').addClass('_show')
        }, 18500)
        setTimeout(function () {
            $('._animation-success-bg').css({
                'opacity': '0',
                'visibility': 'hidden'
            })
            $('.animation__success-wrapper').addClass('_hide')
        }, 20500)

        setTimeout(function () {
            $('div').removeClass('_anim')
            $('div').removeClass('_anim-scale')
            $('div').removeClass('_hide')
            $('div').removeClass('_show')
            $('div').removeClass('_anim-translate')
            $('.animation__payment-wrapper').css({
                'top': '0'
            })
        }, 22000)
        setTimeout(function() {
            introAnim()
        }, 24000)
    }
    setTimeout(function() {
        introAnim()
    }, 2000)
})