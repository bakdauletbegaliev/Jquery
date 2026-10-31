$(document).ready(function () {
    $("#hideText").click(function () {
        $("#visibilityText").hide();
    });
    $("#showText").click(function () {
        $("#visibilityText").show();
    });
    $("#toggleText").click(function () {
        $("#visibilityText").toggle();
    });

    $("#fadeOut").click(function () {
        $("#fadeImage").fadeOut(400);
    });
    $("#fadeIn").click(function () {
        $("#fadeImage").fadeIn(400);
    });
    $("#fadeToggle").click(function () {
        $("#fadeImage").fadeToggle(400);
    });

    $("#slideUp").click(function () {
        $("#slidePanel").slideUp(400);
    });
    $("#slideDown").click(function () {
        $("#slidePanel").slideDown(400);
    });
    $("#slideToggle").click(function () {
        $("#slidePanel").slideToggle(400);
    });
});
