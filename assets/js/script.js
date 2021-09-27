$(window).on("scroll", function (e) {
    if ($(window).scrollTop() > 70) {
        $(".navbar").addClass("show");
    } else {
        $(".navbar").removeClass("show");
    }
    e.preventDefault()
});
