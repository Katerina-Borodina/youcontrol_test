$( document ).ready(function() {
    $(".icon-notifications").on("click", function () {
        $(".icon-notifications").addClass("active");
        $(".notifications").addClass("active-from");
        $(".notifications").removeClass("active-out");
    });

    $(".notifications_close").on("click", function () {
        $(".icon-notifications").removeClass("active");
        $(".notifications").removeClass("active-from");
        $(".notifications").addClass("active-out");
    });

    $(".notifications_item").on("click", function () {
        $(".popup").addClass("active");
        $("#bg_layer").addClass("active");
        $("html").addClass("hide-scroll")

    });

    $(".popup_close").on("click", function () {
        $(".popup").removeClass("active");
        $("#bg_layer").removeClass("active");
        $("html").removeClass("hide-scroll");
    });

    $("#bg_layer").on("click", function () {
        $(".popup").removeClass("active");
        $("#bg_layer").removeClass("active");
        $("html").removeClass("hide-scroll");
    });
});