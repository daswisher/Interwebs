$(document).ready(function () {
    $(".header").click(function () {
        $(this).next(".content").animate({ height: "toggle" }, 250);
    });
});