$(window).on("scroll", function (e) {
    if ($(window).scrollTop() > 70) {
        $(".navbar").addClass("show");
    } else {
        $(".navbar").removeClass("show");
    }
    e.preventDefault()
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
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