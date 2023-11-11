$(function(){
    $(window).on("scroll", function(){
        if($(window).scrollTop() > 50) {
            $(".nav").addClass("active");
        } else{
            $(".nav").removeClass("active");
        }
    });
});

function showSideNav(){
    document.getElementById("side_nav").style.width = "200px";
}
function hideSideNav(){
    document.getElementById("side_nav").style.width = "0";
}