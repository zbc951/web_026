$(function () {
    var swiper = new Swiper('.swiper-banner', {
        loop: true, //循環
        autoHeight: true, //自動高
        autoplay: {  //自動播放
            delay: 7500, //延遲
            disableOnInteraction: false, //互動後停止
            pauseOnMouseEnter: true, //滑鼠滑入時停止
        },
        slidesPerView: 1, //顯示個數
        spaceBetween: 0, //間距
        // breakpoints: { //RWD
        //     1600: {
        //         slidesPerView: 5,
        //         spaceBetween: 30,
        //     },
        //     1260: {
        //         slidesPerView: 4,
        //         spaceBetween: 30,
        //     },
        //     1000: {
        //         slidesPerView: 3,
        //         spaceBetween: 30,
        //     }
        // },
        pagination: { //dot
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: { //arrow
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

$(function () {
    $("header .midArea .center .menu li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });

    $("footer .up .center .menu li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    })
});