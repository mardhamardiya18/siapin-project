$(window).on("scroll", function (e) {
    if ($(window).scrollTop() > 70) {
        $(".navbar").addClass("show");
    } else {
        $(".navbar").removeClass("show");
    }
    e.preventDefault()
});

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
        nextEl: ".btn-slider-profesi",
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
        nextEl: ".btn-slider-blog",
        prevEl: ".swiper-button-prev",
    },
});