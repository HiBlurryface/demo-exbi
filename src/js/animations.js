// scroll magic animations
$(function (scrollMagic) {
    var w = window.innerWidth;
    var borderRadius = 0;
    var padding = 0;
    var translate = -300;
    let duration = 400;
    let blockWidth = $('.work__block').width();
    console.log(blockWidth)
    padding = 32;
    if (w > 2250) {
        duration = 600;
    }
    if (w > 1440) {
        borderRadius = 112;
    }
    if (w <= 1440) {
        borderRadius = 64;
    }
    if (w <= 425) {
        padding = 20;
        borderRadius = 32;
    }
    if (w <= 1888) {
        translate = -1888 + w - 300;
    }
    if (w <= 1440) {
        translate = -1824 + w - 300;
    }
    if (w <= 768) {
        translate = -1760 + w - 514 + 320 + 320 + 320 + 32;
    }
    if (w <= 425) {
        translate = -1760 + w - 100 + 256 + 256 + 256 + 52;
    }
    var controller = new ScrollMagic.Controller({
        // refreshInterval: 0,
    });
    // const options = {
    //     'damping': 0.05
    // }
    // var scrollbar = Scrollbar.init(document.querySelector('body'), options);
    var scene = new ScrollMagic.Scene({ triggerElement: "body", triggerHook: 0 })
        .setTween(".header", 0.5, { top: 0, opacity: 1 })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: "body", triggerHook: 0 })
        .setTween(".intro", 0.5, { opacity: 1 })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: "body", triggerHook: 0 })
        .setTween(".intro__animation", 0.5, { translateY: 0, opacity: 1 })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: "body", triggerHook: 0 })
        .setTween(".intro__heading-group", 0.5, { translateY: 0, opacity: 1 })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: "body", triggerHook: 0 })
        .setTween(".intro__heading-group", 0.5, { translateY: 0, opacity: 1 })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: "body", triggerHook: 0 })
        .setTween(".title-to-left", 0.5, { translateX: 0, opacity: 1 })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: "body", triggerHook: 0 })
        .setTween(".title-to-right", 0.5, { translateX: 0, opacity: 1 })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: ".about", duration: 1100, offset: '-100', triggerHook: 0.8 })
        .setTween(".about__block-right", { translateY: 0, translateX: 0 })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: ".about", duration: 300, triggerHook: 0.5 })
        .setTween(".about__block-left", { translateX: 0 })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: ".advantages__content", duration: 400, triggerHook: 0.5 })
        .setTween("._block-anim-1", { translateY: 0 })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: ".advantages__content", duration: 400, triggerHook: 0.5 })
        .setTween("._block-anim-2", { translateY: 0 })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: "._block-trigger", duration: 300, triggerHook: 0.5 })
        .setTween("._block-anim-2", { translateY: -120 })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: "._block-trigger", duration: 300, triggerHook: 0.5 })
        .setTween("._block-anim-3", { translateY: -120 })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: "._block-trigger", duration: 300, triggerHook: 0.5 })
        .setTween("._block-anim-3", { borderRadius: 256 })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: ".features__heading", duration: '180%', triggerHook: 1 })
        .setTween(".features__heading-title span:first-child", { translateX: 0 })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: ".features__heading", duration: '180%', triggerHook: 1 })
        .setTween(".features__heading-title span:last-child", { translateX: 0 })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: ".features__block:last-child", duration: 300, offset: '320', triggerHook: 1 })
        .setTween(".features__col:last-child", { translateY: 0 })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: ".join", duration: 350, triggerHook: 0.8 })
        .setTween(".join__wrapper", { maxWidth: '100%', paddingLeft: 0, paddingRight: 0 })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: ".join", duration: 350, triggerHook: 0.8 })
        .setTween(".join__container", { borderRadius: 0 })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: ".join", duration: 250, offset: 500, triggerHook: 0.8 })
        .setTween(".join__container", { height: '100vh' })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: ".join", duration: duration, offset: 900, triggerHook: 0.8 })
        .setTween(".join__wrapper", { maxWidth: '1760px', paddingLeft: padding, paddingRight: padding })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: ".join", duration: duration, offset: 900, triggerHook: 0.8 })
        .setTween(".join__container", { borderRadius: borderRadius })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: ".work", duration: duration })
        .setTween(".work__wrapper", { maxWidth: '100%', paddingLeft: 0, paddingRight: 0 })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: ".work", duration: 400 })
        .setTween(".work__container", { borderRadius: 0 })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: ".work", duration: 600, triggerHook: 0, })
        .setPin('.work')
        .setTween(".work__content", { translateX: translate })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: ".work", duration: 600, triggerHook: 0, })
        .setTween(".work__title", { translateX: 300 })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: ".advantages", duration: duration, triggerHook: 0.9 })
        .setTween(".work__wrapper", { maxWidth: '1760px', paddingLeft: padding, paddingRight: padding })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: ".advantages", duration: 400, triggerHook: 0.9 })
        .setTween(".work__container", { borderRadius: borderRadius })
        .addTo(controller);
})