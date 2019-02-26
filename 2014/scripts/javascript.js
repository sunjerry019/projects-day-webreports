//check #
(function ()
{
    if (location.hash)
    {               // do the test straight away
        window.scrollTo(0, 0);         // execute it straight away
        setTimeout(function ()
        {
            window.scrollTo(0, 0);     // run it a bit later also for browser compatibility
            fscroll(location.hash);
        }, 1);

    }
    /*hashid = window.location.hash;
    setTimeout(function ()
    {
    if (hashid)
    {
    window.scrollTo(0, 0);
    fscroll(hashid);
    }
    }, 1);*/
})();

// Check if a new cache is available on page load.
try
{
    window.addEventListener('load', function (e)
    {
        window.applicationCache.addEventListener('updateready', function (e)
        {
            if (window.applicationCache.status == window.applicationCache.UPDATEREADY)
            {
                // Browser downloaded a new app cache.
                if (confirm('A new version of this site is available. Load it?'))
                {
                    window.location.reload();
                }
            }
            else
            {
                // Manifest didn't change. Nothing new to server.
            }
        }, false);
    }, false);
}
catch (e) { }


//init
var sfocus = false;
var searchmo = false;
var overlayOpen = false;
var helpOpen = false;
var ecount = 0;
var creditsOpen = false;

$(document).ready(function ()
{
    //scrolling links
    $("#sublist" + $(".current")[0].dataset.link + " a").each(function ()
    {
        var hash = $(this).attr("href").split("#")[1];
        if (hash.length > 0)
        {
            $(this).removeAttr("href");
            $(this).click(function ()
            {
                fscroll("#" + hash);
            });
        }
    });

    $("#creditbtn").click(function (e) { credits(); });

    $("#screenErrorClose").click(function (e) { $("#screenSizeError").fadeOut(150); });

    $("#gototop").click(function (e) { fscroll(); });

    //keyboard shortcuts
    $(window).keyup(function (e)
    {
        if (e.shiftKey == true)
        {
            if (e.keyCode == 70) //f
            {
                if ($("input").is(":focus") == false)
                {
                    console.log("Shift + F activated")
                    $(".corner").css("background-color", "#aaa");
                    $("#search-input").css("border-bottom", "1px solid #aaa");
                    var act2 = $("#search-area")[0].dataset.active;
                    if (act2 == "false")
                    {
                        $("#search-area")[0].dataset.active = "true";
                        $(".corner").stop(true, false).animate({
                            width: "1px"
                        }, 10);
                        $("#search-input").stop(true, false).animate({
                            width: "178px"
                        }, 200, function ()
                        {
                            $("#search-area").stop(true, false).animate(
                            {
                                margin: "0px"
                            }, 20);
                        });
                        $("#search-input").focus();
                    }
                    else
                    {
                        $("#search-input").focus();
                    }
                }
            }
        }
        else if (e.ctrlKey == true)
        {
            if (e.keyCode == 188)//,
            {
                showHelp(1);
            }
        }
        else if (e.keyCode == 27)//esc
        {
            if (overlayOpen)
            {
                if (helpOpen)
                {
                    showHelp(2);
                }
            }
        }
    });

    //menu
    $("#quicknav-btn").click(function ()
    {
        var act1 = $("#navarrow-active")[0].dataset.active;
        if (act1 == "true")
        {
            navbar.h();
            $("#navarrow-active")[0].dataset.active = "false";
        }
        else
        {
            navbar.s();
            $("#navarrow-active")[0].dataset.active = "true";
        }
    });

    $(".navbarmenu").mouseenter(function ()
    {
        var link = $(this)[0].dataset.link;
        $("#sublist" + link).stop(true, false).slideDown(150);
    });

    $(".navbarmenu").mouseleave(function ()
    {
        var link = $(this)[0].dataset.link;
        $("#sublist" + link).stop(true, false).slideUp(150);
    });

    //search
    $("#search-area").mouseenter(function ()
    {
        searchmo = true;
        console.log("#search-area mouseenter");
        $("#search-iconi").hide();
        $("#search-icona").show();
        $(".corner").css("background-color", "#09c");
        $("#search-input").css("border-bottom", "1px solid #09c");
        var act2 = $("#search-area")[0].dataset.active;
        if (act2 == "false")
        {
            $("#search-area")[0].dataset.active = "true";
            $(".corner").stop(true, false).animate({
                width: "1px"
            }, 10);
            $("#search-input").stop(true, false).animate({
                width: "178px"
            }, 200, function ()
            {
                $("#search-area").stop(true, false).animate(
                {
                    margin: "0px"
                }, 20);
            });
            $("#search-input").focus();
        }
    });

    $("#search-area").mouseleave(function ()
    {
        searchmo = false;
        console.log("#search-area mouseleave");
        $("#search-icona").hide();
        $("#search-iconi").show();
        $(".corner").css("background-color", "#aaa");
        $("#search-input").css("border-bottom", "1px solid #aaa");
        var act2 = $("#search-area")[0].dataset.active;
        if ((act2 == "true") && (!sfocus))
        {
            $("#search-area")[0].dataset.active = "false";
            $(".corner").stop(true, false).animate({
                width: "0px"
            }, 10);
            $("#search-area").stop(true, false).animate({
                margin: "0px -10px 0px 0px"
            }, 20, function ()
            {
                $("#search-input").stop(true, false).animate({
                    width: "0px"
                }, 200, function ()
                {
                    $("#search-input").css("border", "none");
                });
            });
        }
    });

    $("#search-area").keyup(function (e)
    {
        if (e.keyCode == 13)
        {
            console.log("search");
            q = $("#search-input").val();
            ksearch(q);
        }
    });

    //help
    $("#helpbtn").click(function ()
    {
        showHelp(1);
    });

    $("#close").click(function ()
    {
        showHelp(2);
    });

    //scrolling
    $("a[href^='#']").click(function (e)
    {
        DieseID = $(this).attr("href");
        if (DieseID != '#')
        {
            fscroll(DieseID);
        }
        //e.preventDefault();
    });
});

//navigation show/hide
var navbar =
{
    h: function () //hide
    {
        $("#navarrow-active").hide();
        $("#navarrow-inactive").show();
        $(".nbar").each(function ()
        {
            $(this).stop(true, false).slideUp(200);
            /*$(this).stop(true, false).animate({ "height": 0 }, 200, function ()
            {
            $(this).css("display", "none");
            });*/
        });
    },
    s: function () //show
    {
        $("#navarrow-inactive").hide();
        $("#navarrow-active").show();
        $(".nbar").each(function ()
        {
            $(this).stop(true, false).slideDown(200);
            //$(this).stop(true, false).css("display", "").animate({ "height": 40 }, 200);
        });
    }
}

//searchbar focus
function searchf(focus)
{
    if (focus) sfocus = true;
    else
    {
        sfocus = false;
        var act2 = $("#search-area")[0].dataset.active;
        if ((act2 == "true") && (!sfocus) && (!searchmo))
        {
            $("#search-area")[0].dataset.active = "false";
            $(".corner").stop(true, false).animate({
                width: "0px"
            }, 10);
            $("#search-area").stop(true, false).animate({
                margin: "0px -10px 0px 0px"
            }, 20, function ()
            {
                $("#search-input").stop(true, false).animate({
                    width: "0px"
                }, 200, function ()
                {
                    $("#search-input").css("border", "none");
                });
            });
        }
    }
}

//search
function ksearch(query)
{
    q = $.trim(query);
    if (!q.length)
    {
        console.log("Empty query");
        $("#search-input").stop(true, false).animate({
            backgroundColor: "#ff8484"
        }, 250, function ()
        {
            $("#search-input").stop(true, false).animate({
                backgroundColor: "#F9F9F9"
            }, 250);
            ferror("Please enter a valid query.", 5000);
        });
    }
    else
    {
        var w = fescape(q);
        ferror("Sorry...but our search function is not yet functional. Please try again later.<br>Thank you for your understanding.", 5000)
        //search here
    }
}

//display overlay
function overlay(w, h, action)
{
    if (action == 1)
    {
        $("#overlay").stop(true, false).animate({
            height: h,
            width: w
        }, 100);
        $("#overlay").fadeIn(200);
        overlayOpen = true;
    }
    else if (action == 2)
    {
        $("#overlay").fadeOut(200);
        overlayOpen = false;
    }
}

//show help
function showHelp(action)
{
    if (action == 1)
    {
        overlay(500, 185, 1); //helpbox height
        $("#helpbox").fadeIn(300);
        helpOpen = true;
    }
    else
    {
        $("#helpbox").fadeOut(300);
        overlay(0, 0, 2);
        helpOpen = false;
    }
}

//fsescape
function fescape(text)
{
    var a = escape(text).replace(/%(..)/g, "&#x$1;");
    return a;
}

//scrollTop "#" offset + navbar height + 10px(?)
function fscroll(id)
{
    if (!id)
    {
        $("html, body").stop(true, false).animate({ scrollTop: 0 });
    }
    else
    {
        var off = $(id).offset().top;
        off -= $("#menu").height();
        off -= 10;
        $("html, body").stop(true, false).animate({ scrollTop: off });
    }
}

//error
function ferror(msg, t)
{
    logconsole("ferror: " + msg);
    ecount++;
    original = $("#error").html();
    $("#error").html(original + "<div class='error' id='e" + ecount + "'>" + msg + "</div>");
    var das = "#e" + ecount;
    $(das).fadeIn(300, function ()
    {
        setTimeout(function ()
        {
            $(das).fadeOut(300);
        }, t);
    });

}

//credits
function credits()
{
    if (!creditsOpen)
    {
        creditsOpen = true;
        $("#credits").fadeIn(200);
        fscroll("#bottom");
    }
    else if (creditsOpen)
    {
        creditsOpen = false;
        $("#credits").fadeOut(200);
    }
}

//logoconsole
function logconsole(msg)
{
    try
    {
        console.log(msg);
    }
    catch (e) { }
}