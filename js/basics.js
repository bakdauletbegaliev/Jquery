$(document).ready(function () {
    console.log("jQuery is ready!");
    $("#readyStatus").text("jQuery is ready!");

    $("#changeSelectors").click(function () {
        $("#idExample").text("Changed with .text()");
        $(".classExample").html("Changed with <strong>.html()</strong>");
        $("h3").css("color", "#3159db");
    });

    $("#resetSelectors").click(function () {
        $("#idExample").text("Original text");
        $(".classExample").text("Original HTML");
        $("h3").css("color", "#18243a");
    });
});
