$(document).ready(function () {
    let itemNumber = 3;

    $("#appendItem").click(function () {
        $("#itemList").append("<li>Item " + itemNumber + "</li>");
        itemNumber++;
    });
    $("#prependItem").click(function () {
        $("#itemList").prepend("<li>Item " + itemNumber + "</li>");
        itemNumber++;
    });
    $("#removeItem").click(function () {
        $("#itemList li").last().remove();
    });

    $("#changeImage").click(function () {
        if ($("#changePicture").attr("src") === "assets/sunrise.svg") {
            $("#changePicture").attr("src", "assets/ocean.svg");
            $("#pictureCaption").text("Current image: Ocean");
        } else {
            $("#changePicture").attr("src", "assets/sunrise.svg");
            $("#pictureCaption").text("Current image: Sunrise");
        }
    });

    $("#changeLink").click(function () {
        $("#changingLink").attr("href", "https://api.jquery.com/");
        $("#changingLink").text("Visit jQuery API documentation");
    });

    $("#nameInput, #emailInput").on("input", function () {
        $("#nameOutput").text($("#nameInput").val() || "—");
        $("#emailOutput").text($("#emailInput").val() || "—");
    });
    $("#liveForm").submit(function (event) {
        event.preventDefault();
    });
});
