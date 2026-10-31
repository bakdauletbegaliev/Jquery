$(document).ready(function () {
    $(".accordion-question").click(function () {
        $(this).next(".accordion-answer").slideToggle(300);
        $(this).toggleClass("active");
    });

    $("#closeAll").click(function () {
        $(".accordion-answer").slideUp(300);
        $(".accordion-question").removeClass("active");
    });
});
