$(window).on("scroll", function (e) {
    if ($(window).scrollTop() > 70) {
        $(".navbar").addClass("show");
    } else {
        $(".navbar").removeClass("show");
    }
    e.preventDefault()
});



$(document).ready(function () {
    $('.box-wrapper').on('click', function () {
        $('.box-wrapper').removeClass('active')
        $(this).addClass('active')

    })
})









// swiper

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    spaceBetween: 30,
    centeredSlides: false,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        slideShadows: false,
    },
    navigation: {
        nextEl: ".btn-slider-profesi-right",
        prevEl: ".btn-slider-profesi-left",
    },
    pagination: {
        el: ".swiper-pagination-profesi",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

var swiper2 = new Swiper(".mySwiperStep", {
    direction: "vertical",
    pagination: {
        clickable: true,

    },
    navigation: {
        nextEl: ".bxs-down-arrow",
        prevEl: ".bxs-up-arrow"
    },
});

var swiper3 = new Swiper(".mySwiperBlog", {
    spaceBetween: 30,
    centeredSlides: false,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        slideShadows: false,
    },
    navigation: {
        nextEl: ".btn-slider-blog-right",
        prevEl: ".btn-slider-blog-left",
    },
    pagination: {
        el: ".swiper-pagination-blog",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

var swiper4 = new Swiper(".mySwiperTesti", {
    spaceBetween: 0,
    grabCursor: true,
    centeredSlides: false,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        slideShadows: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

});