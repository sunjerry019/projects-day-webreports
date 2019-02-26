var isopen=false;
$(document).bind('pageinit', function() {
    $(".content").width($(window).width() - 30);
    $(window).resize(function() {
        $(".content").width($(window).width() - 30);
    });
    $("#openmenu").click(function() {
        if(isopen) {
            //$(".nav").hide("slide", { direction: "left", distance: 100 }, 1000);
            $("ul.topnav").hide();
        }
        else {
            /*$(".nav").show("slide", { direction: "right", distance: 100 }, 1000);*/
            $("ul.topnav").show();
        }
        isopen = !isopen;
    });
    $(".content").click(function() {
        $(".nav").hide("slide", { direction: "left", distance: 100 }, 1000);
        $("ul.topnav").fadeOut(100);
    });
});