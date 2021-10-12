// 1. Dropdown menu for mobile

$(document).ready(function () {
    $(".bars").click(function() {
        $("nav").toggle(250);
        $(".bars").css("display", "none");
        $(".close").css("display", "block");
    });
});





$(document).ready(function () {
    $(".close").click(function() {
        $("nav").toggle(100);
        $(".bars").css("display", "block");
        $(".close").css("display", "none");
    });
});















