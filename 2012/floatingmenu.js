$(document).ready(function(e) {
    $(window).scroll(function(e) {
        var scroll = $(window).scrollTop();
        var menutop;
        var menumargintop;
        if($("#menu").hasClass("fixed")) {
            menutop = $("#sidebar1").offset().top;
            menumargintop = parseInt($("#sidebar1").css("margin-top"));
        }
        else {
            menutop = $("#menu").offset().top;
            menumargintop = parseInt($("#menu").css("margin-top"));
        }

        if(scroll > menutop) {
            $("#menu").addClass("fixed");
        }
        else {
            $("#menu").removeClass("fixed");
        }
    });
});
/*var top1 = $(".topnav").offset().top - parseFloat($(".topnav").css('margin-top').replace(/auto/, 0));
var bottom = top1 + parseFloat($(".topnav").css('margin-top').replace(/auto/, 0)) + 10 + $(".topnav").height();

//floating sidebar
$(document).ready(function(e)
{
    //var sidebar1btm1 = $("#sidebar1wrapper").offset().top + $('#sidebar1wrapper').height();
    var a, b, c;
    a = parseInt($("#sidebar1wrapper").offset().top);
    b = parseInt($(".topnav").height());
    c = $(window).scrollTop();
    var sidebar1btm1 = a + b + c;
    var topft = $('#footerwrapper').offset().top;
    var orgt = 0;

    $(window).scroll(function()
    {
        //find out the y position of the scroll
        var y = $(window).scrollTop();
        topft = $('#footer').offset().top;
        //whether it is below the sidebar
        a = parseInt($("#sidebar1wrapper").offset().top);
        b = parseInt($(".topnav").height());


        if(y >= top1)
        {
            //if so, add fixed class
            $("#ht2").css("height", b);
            if(orgt)
            {
                $(".topnav").css("top", orgt);
            }
            $(".topnav").removeClass("absolute");
            $(".topnav").addClass('fixed');
        }
        else
        {
            if(orgt)
            {
                $(".topnav").css("top", orgt);
            }
            $("#ht2").css("height", "0");
            $(".topnav").removeClass("absolute");
            $(".topnav").removeClass('fixed');
        }
        if(a + b + $(window).scrollTop() > topft)
        {
            orgt = $(".topnav").css("top");
            $("#ht2").css("height", "0");
            $(".topnav").addClass('absolute');
            $(".topnav").removeClass('fixed');
            $(".topnav").css("top", (topft - $(".topnav").height() - 110) + "px");
        } 
        else
        {
            orgt = 0;
        }
    });
});*/