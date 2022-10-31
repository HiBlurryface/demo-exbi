// show & hide header & cookies
var header = $('.header');
var cookies = $('.cookies');
scrollPrev = 0;
$(window).scroll(function () {
    var scrolled = $(window).scrollTop();

    if (scrolled > 100 && scrolled > scrollPrev) {
        header.addClass('header-out');
    } else {
        header.removeClass('header-out');
    }
    if (scrolled > 100 && scrolled > scrollPrev) {
        cookies.addClass('cookies-out');
    } else {
        cookies.removeClass('cookies-out');
    }
    scrollPrev = scrolled;
});

// scroll magic animations
$(function (scrollMagic) {
    var w = window.innerWidth;
    var borderRadius = 0;
    var padding = 0;
    var translate = -300;
    padding = 32;
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
        translate = -1760 + w - 514 + 320 + 320 + 320 + 56;
    }
    var controller = new ScrollMagic.Controller();
    var scene = new ScrollMagic.Scene({ triggerElement: "body", triggerHook: 0 })
        .setTween(".header", 0.5, { top: 0, opacity: 1 })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: "body", triggerHook: 0 })
        .setTween(".intro", 0.5, { opacity: 1 })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: "body", triggerHook: 0 })
        .setTween(".intro__animation", 0.5, { opacity: 1 })
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
    var scene = new ScrollMagic.Scene({ triggerElement: ".about", duration: 600, triggerHook: 0.9 })
        .setTween(".about__block-right", { translateY: 0, translateX: 0 })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: ".about", duration: 600, triggerHook: 0.9 })
        .setTween(".about__block-left", { translateX: 0 })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: ".about", duration: 400, triggerHook: 1 })
        .setTween(".about__block", { opacity: 1 })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: ".work", duration: 400, triggerHook: 1 })
        .setTween(".work", { opacity: 1 })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: ".advantages", duration: 400, triggerHook: 1 })
        .setTween(".advantages", { opacity: 1 })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: ".advantages__content", duration: 800, triggerHook: 0.9 })
        .setTween("._block-anim-1", { translateY: 0 })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: ".advantages__content", duration: 800, triggerHook: 0.9 })
        .setTween("._block-anim-2", { translateY: 0 })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: "._block-trigger", duration: 300, triggerHook: 0.5 })
        .setTween("._block-anim-2", { translateY: 120 })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: "._block-trigger", duration: 300, triggerHook: 0.5 })
        .setTween("._block-anim-3", { translateY: 120 })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: "._block-trigger", duration: 300, triggerHook: 0.5 })
        .setTween("._block-anim-3", { borderRadius: 256 })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: ".features", duration: 400, triggerHook: 1 })
        .setTween(".features", { opacity: 1 })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: ".features__heading", duration: 500, triggerHook: 0.6 })
        .setTween(".features__heading-title span:first-child", { translateX: 0 })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: ".features__heading", duration: 500, triggerHook: 0.6 })
        .setTween(".features__heading-title span:last-child", { translateX: 0 })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: ".features__block:last-child", duration: 300, triggerHook: 0.6 })
        .setTween(".features__col:last-child", { translateY: 0 })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: ".join", duration: 400, triggerHook: 1 })
        .setTween(".join", { opacity: 1 })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: ".join", duration: 350, triggerHook: 0.8 })
        .setTween(".join__wrapper", { maxWidth: '100%', paddingLeft: 0, paddingRight: 0 })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: ".join", duration: 350, triggerHook: 0.8 })
        .setTween(".join__container", { borderRadius: 0 })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: ".footer", duration: 400, triggerHook: 1 })
        .setTween(".footer", { opacity: 1 })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: ".footer", duration: 600, triggerHook: 0.9 })
        .setTween(".join__wrapper", { maxWidth: '1760px', paddingLeft: padding, paddingRight: padding })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: ".footer", duration: 600, triggerHook: 0.9 })
        .setTween(".join__container", { borderRadius: borderRadius })
        .addTo(controller);
    // controller = new ScrollMagic.Controller({
    //     globalSceneOptions: {
    //         triggerHook: 0.9,
    //     }
    // });
    var scene = new ScrollMagic.Scene({ triggerElement: ".work", duration: 400 })
        .setTween(".work__wrapper", { maxWidth: '100%', paddingLeft: 0, paddingRight: 0 })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: ".work", duration: 400 })
        .setTween(".work__container", { borderRadius: 0 })
        .addTo(controller);
    // offset: 40
    var scene = new ScrollMagic.Scene({ triggerElement: ".work", duration: 2200, triggerHook: 0, })
        .setPin('.work')
        .setTween(".work__content", { translateX: translate })
        .addTo(controller);
    // var scene = new ScrollMagic.Scene({ triggerElement: ".advantages", duration: 400, triggerHook: 0.9 })
    //     .setTween(".work__wrapper", { maxWidth: '1760px', paddingLeft: padding, paddingRight: padding })
    //     .addIndicators({ name: "3 (duration: 300)" })
    //     .addTo(controller);
    // var scene = new ScrollMagic.Scene({ triggerElement: ".advantages", duration: 400, triggerHook: 0.9 })
    //     .setTween(".work__container", { borderRadius: borderRadius })
    //     .addIndicators({ name: "3 (duration: 300)" })
    //     .addTo(controller);
})