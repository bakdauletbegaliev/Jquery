$(document).ready(function () {
    $("#basicAnimate").click(function () {
        $("#basicBox").stop(true, true).animate({ left: 140, width: 120, height: 120 }, 700);
    });
    $("#basicReset").click(function () {
        $("#basicBox").stop(true, true).animate({ left: 0, width: 80, height: 80 }, 400);
    });

    $("#sequenceAnimate").click(function () {
        $("#sequenceBox").stop(true, true).css({ left: 0, top: 0, width: 80, height: 80 })
            .animate({ left: 150 }, 400)
            .animate({ top: 70 }, 400)
            .animate({ width: 45, height: 45 }, 400)
            .animate({ left: 0, top: 0, width: 80, height: 80 }, 400);
    });
    $("#sequenceReset").click(function () {
        $("#sequenceBox").stop(true, true).css({ left: 0, top: 0, width: 80, height: 80 });
    });

    $("#combinedAnimate").click(function () {
        $("#combinedBox").stop(true, true).animate({ left: 150, top: 30, width: 120, height: 120, opacity: 0.35 }, 800);
    });
    $("#combinedReset").click(function () {
        $("#combinedBox").stop(true, true).animate({ left: 0, top: 0, width: 80, height: 80, opacity: 1 }, 400);
    });
});
