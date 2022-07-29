// Animations
$(document).ready(function () {
    // zoom in/out animations
    $(".zoombtn").click(function () {
        $(".container").removeClass("fadeIn").addClass("fadeOut");
        $(".wrapper").removeClass("fadeIn").addClass("fadeOut");
    });
    // Main page easter egg animation
    $("#mainbox-btn").click(function () {
        $("#bottom").fadeOut(450);
        $("#main").fadeIn(450);
    });
    $("#bottombox-btn").click(function () {
        $("#main").fadeOut(450);
        $("#bottom").fadeIn(450);
    });
    // Donation page cards animation
    $("#btc-btn").click(function () {
        $(".spoiler-dnt").not("#btc-box").slideUp(450);
        $("#btc-box").slideToggle(450);
    });
    $("#eth-btn").click(function () {
        $(".spoiler-dnt").not("#eth-box").slideUp(450);
        $("#eth-box").slideToggle(450);
    });
    $("#ref-btn").click(function () {
        $(".spoiler-dnt").not("#ref-box").slideUp(450);
        $("#ref-box").slideToggle(450);
    });
});
