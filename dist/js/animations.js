// scroll magic animations
$(function (scrollMagic) {
    var w = window.innerWidth;
    var borderRadius = 112;
    var padding = 32;
    var translate;
    let duration = 400;
    let blockWidth = $('.work__block').width();
    let titleLeft = $('.features__heading-title').width() - $('.features__heading-title span:first-child').width();
    let titleRight = -($('.features__heading-title').width() - $('.features__heading-title span:last-child').width());
    let featuresCol = $('.features__content').height() - $('.features__wrapper').height();

    if (w > 2250) {
        duration = 600;
    }
    if (w <= 1440) {
        borderRadius = 64;
    }
    if (w <= 425) {
        padding = 20;
        borderRadius = 32;
    }
    let workContent = $('.work__block').innerWidth() * 3 + 64;
    translate = -(workContent - $('.work__container').innerWidth());
    if (w <= 1760) {
        translate = -(workContent - $('.work__slider').innerWidth() - 64);
    }

    window.addEventListener('resize', function () {
        if (w > 2250) {
            duration = 600;
        }
        if (w <= 1440) {
            borderRadius = 64;
        }
        if (w <= 425) {
            padding = 20;
            borderRadius = 32;
        }
        let workContent = $('.work__block').innerWidth() * 3 + 64;
        translate = -(workContent - $('.work__container').innerWidth());
        if (w <= 1760) {
            translate = -(workContent - $('.work__slider').innerWidth() - 64);
        }
    });   
    var controller = new ScrollMagic.Controller({
        // refreshInterval: 0,
    });
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
        .setTween(".about__block-right", { translateY: 0 })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: ".about", duration: '100%', triggerHook: 0.8 })
        .setTween(".about-img-coin", { right: '-95%' })
        .addTo(controller);
    // var scene = new ScrollMagic.Scene({ triggerElement: ".about", duration: 300, triggerHook: 0.5 })
    //     .setTween(".about__block-left", { translateX: 0 })
    //     .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: ".advantages__content", duration: 400, triggerHook: 0.5 })
        .setTween("._block-anim-1", { translateY: 0 })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: ".advantages__content", duration: 400, triggerHook: 0.5 })
        .setTween("._block-anim-2", { translateY: 0 })
        .addTo(controller);
    // var scene = new ScrollMagic.Scene({ triggerElement: "._block-trigger", duration: 300, triggerHook: 0.5 })
    //     .setTween("._block-anim-2", { translateY: -120 })
    //     .addTo(controller);
    // var scene = new ScrollMagic.Scene({ triggerElement: "._block-trigger", duration: 300, triggerHook: 0.5 })
    //     .setTween("._block-anim-3", { translateY: -120 })
    //     .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: "._block-trigger", duration: 300, triggerHook: 0.5 })
        .setTween("._block-anim-3", { borderRadius: 256 })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: ".features__heading", duration: '180%', triggerHook: 1 })
        .setTween(".features__heading-title span:first-child", { translateX: titleLeft })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: ".features__heading", duration: '180%', triggerHook: 1 })
        .setTween(".features__heading-title span:last-child", { translateX: titleRight })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: ".features__content", duration: '100%', triggerHook: 0 })
        .setTween(".features__col:first-child", { translateY: 0 })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: ".features__content", duration: '100%', triggerHook: 0 })
        .setTween(".features__col:last-child", { translateY: featuresCol })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: ".work", duration: duration })
        .setTween(".work__wrapper", { maxWidth: '100%', paddingLeft: 0, paddingRight: 0 })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: ".work", duration: 400 })
        .setTween(".work__bg", { borderRadius: 0 })
        .addTo(controller);
    if (w > 1440) {
        var scene = new ScrollMagic.Scene({ triggerElement: ".work", duration: 1200, triggerHook: 0, })
            .setPin('.work')
            .setTween(".work__content", { translateX: translate })
            .addTo(controller);
    }
    var scene = new ScrollMagic.Scene({ triggerElement: ".work", duration: 1200, triggerHook: 0, })
        .setTween(".work__title", { translateX: 300 })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: ".advantages", duration: duration, triggerHook: 0.9 })
        .setTween(".work__bg", { maxWidth: '1696px', paddingLeft: padding, paddingRight: padding })
        .addTo(controller);
    var scene = new ScrollMagic.Scene({ triggerElement: ".advantages", duration: 400, triggerHook: 0.9 })
        .setTween(".work__bg", { borderRadius: borderRadius })
        .addTo(controller);
})