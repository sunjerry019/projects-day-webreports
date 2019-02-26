/*$(window).load(function () {
    //$(".welcome").fadeOut('slow');
    $("#funfact").funfact('refresh');
	//$("#mainbody").focus();
	//checkLay();
});*/

// fixed vars
var rcpos;
var extrafooterheight;
var ismousedown;
var mouseclickposx,mouseclickposy;
var elapsedtime = 0;
var time;
var curimgurl;
var curcopytext;
var curimgw, curimgh, ismagnifyimgshown = false;
var kbsopen = false;
var closefunc, closefunca, escfunc, escfunca;

//global functions 
var top1 = $('#sidebar1').offset().top - parseFloat($('#sidebar1').css('margin-top').replace(/auto/, 0));
var bottom = top1 + parseFloat($('#sidebar1').css('margin-top').replace(/auto/, 0)) + 10 + $('#sidebar1').height();
var width = $('.header').width();
var contentbtm;
var sidebar1btm, sidebar2btm;
function copyToClipboard(s) {
        if (window.clipboardData && clipboardData.setData) {

            clipboardData.setData("Text", s);
        }
        else {
            try {
                if (netscape.security.PrivilegeManager.enablePrivilege) {
                    netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
                } else {
                    clipdata = s;
                    return;
                }
            } catch (ex) {
                clipdata = s;
                return;
            }
            var str = Components.classes["@mozilla.org/supports-string;1"].
                              createInstance(Components.interfaces.nsISupportsString);
            str.data = s;

            var trans = Components.classes["@mozilla.org/widget/transferable;1"].
                           createInstance(Components.interfaces.nsITransferable);
            if (!trans) return false;

            trans.addDataFlavor("text/unicode");
            trans.setTransferData("text/unicode", str, s.length * 2);

            var clipid = Components.interfaces.nsIClipboard;
            var clip = Components.classes["@mozilla.org/widget/clipboard;1"].getService(clipid);
            if (!clip) return false;

            clip.setData(trans, null, clipid.kGlobalClipboard);
        }
    }

// modifiable vars

$("#funfact").funfact();
//water funfacts
$("#funfact").funfact('register',"3.575 million people die annually from water releated diseases."); 
$("#funfact").funfact('register',"884 million people lack access to safe water supplies; approximately one in eight people.");
$("#funfact").funfact('register',"The water and sanitation crisis claims more lives through disease than any war claims through guns.");
$("#funfact").funfact('register',"People living in the slums often pay 5-10 times more per liter of water than wealthy people living in the same city.");
$("#funfact").funfact('register',"An American taking a five-minute shower uses more water than a typical person in a developing country slum uses in a whole day.");
$("#funfact").funfact('register', "Every 20 seconds, a child dies from a water-related illness.");
$("#funfact").funfact('register', "Women spend 200 million hours a day collecting water.");
$("#funfact").funfact('register', "The majority of illness is caused by fecal matter.");
$("#funfact").funfact('register', "More people have a mobile than a toilet.");;;;
$("#funfact").funfact('register', "Lack of community involvement causes 50% of other projects");;;;
$("#funfact").funfact('register', "Millions of women and children spend several hours a day collecting water from distant, often polluted sources.");
$("#funfact").funfact('register', "A study by the International Water and Sanitation Centre (IRC) of community water and sanitation projects in 88 communities found that projects designed and run with the full participation of women are more sustainable and effective than those that do not. This supports an earlier World Bank study that found that women's participation was strongly associated with water and sanitation project effectiveness.");
$("#funfact").funfact('register', "In the developing world, 24,000 children under the age of five die every day from preventable causes like diarrhea contracted from unclean water.");
$("#funfact").funfact('register', "Lack of access to clean water and sanitation kills children at a rate equivalent of a jumbo jet crashing every four hours.");
$("#funfact").funfact('register', "443 million school days are lost each year due to water-related illness.");
/*$("#funfact").funfact('eventbind', "onafterrefresh", function () {
    Cufon.set('fontFamily', 'Cabin').replace('#funfact');
    //checkLay();
});*/






$(document).ready(function() {

    $('body').keydown(function(e) {
        if(e.shiftKey == true) {
            if(e.keyCode == 48) //0
            {
                //reset zoom level
                $("#cui").attr("src", curimgurl);
                //background overlay
                $("#cui").width("");
                $("#cui").height("");
                //imgheight, imgwidth, 
                numtoloop = 0;
                //calculate number to loop;
                imgwidth = $("#cui").width();
                imgheight = $("#cui").height();
                if((imgwidth < 30) && (imgheight < 30)) {
                }
                isfound = false;
                for(queer = 1; queer <= numtoloop; queer++) {
                    imgheight2 = $("#cui").height() * queer;
                    imgwidth2 = $("#cui").width() * queer;
                    heightofcui = $("#cui").height();
                    widthofcui = $("#cui").width();
                    if(!((imgheight2 < $(window).height()) && (imgwidth2 < $(window).width()))) {
                        if(isfound == true) break;
                    }
                    else {
                        isfound = true;
                        $("#cui").height(imgheight2);
                        $("#cui").width(imgwidth2);
                    }
                }
                imgwidth = $("#cui").width();
                curimgw = imgwidth / 10;
                imgheight = $("#cui").height();
                curimgh = imgheight / 10;
                if(($("#cui").width() >= $(window).width()) || ($("#cui").height() >= $(window).height())) {
                    if($("#cui").width() > $("#cui").height()) {
                        $("#cui").height($(window).height() - 60);
                        $("#cui").width($("#cui").height() * imgwidth / imgheight);
                    } else {
                        $("#cui").width($(window).width() - 60);
                        $("#cui").height($("#cui").width() * imgheight / imgwidth);
                    }
                }
                imgwidth = $("#cui").width();
                curimgw = imgwidth / 10;
                imgheight = $("#cui").height();
                curimgh = imgheight / 10;
                $("#cui").css("left", ($(window).width() / 2) - (imgwidth / 2));
                $("#cui").css("top", ($(window).height() / 2) - (imgheight / 2));
            }

            else if(e.keyCode == 187)//+
            {
                $("#cui").width($("#cui").width() + curimgw);
                $("#cui").height($("#cui").height() + curimgh);
            }
            else if(e.keyCode == 189)//-
            {
                if(($("#cui").width() <= curimgw) || ($("#cui").height() <= curimgh)) return false;
                $("#cui").width($("#cui").width() - curimgw);
                $("#cui").height($("#cui").height() - curimgh);
            }
        }
        else if(e.ctrlKey == true) {
            if(e.keyCode == 38)//up arrow
            {
                $("html,body").animate({ scrollTop: 0 });
            }
            else if(e.keyCode == 191)//the key is '/'
            {
                Cufon.refresh();
            }
            else if(e.keyCode == 222)//single quote
            {
                $("#funfact").funfact("refresh");
                checkLay();
            }
            else if(e.keyCode == 188)//the key is ','
            {
                $("#keyboardshortcut").fadeIn("slow");
                kbsopen = true;
            }
        }
        else if(e.keyCode == 27) {
            if(kbsopen == true) {
                $("#keyboardshortcut").fadeOut("slow");
                kbsopen = false;
            }
        }

    });

    $("body").keyup(function(e) {
        if(e.keyCode == 16) {
            shifted = false;
        }
    });


    $("movea").click(function() { $(window).animate({ scrollTop: 0 }); });
    //Startup script

    $("#jq").append(" " + jQuery.fn.jquery);
    $("#jqu").append(" " + jQuery.ui.version);
    $("ul.subnav").parent().append("<span></span>"); //Only shows drop down trigger when js is enabled (Adds empty span tag after ul.subnav*)

    $("#funfact").funfact('refresh');
    //PIE.attach('#keyboardshortcut');

    //$('#footer2').css('width', width);
    //$("#ha").fadeOut(1);
    //$('#toolbar').animate({ opacity: 0.1 }, { duration: 'slow', queue: false });
    //$("#opttab").click();
    //$("#ht").click();
    //$("#CollapsiblePanel4 #CollapsiblePanel2 #CollapsiblePanel3) div").click();
    //modify height
    //var ht = $("#toolbar").height()
    //$("#footerwrapper").css("margin-bottom", ht);
    $("#imgtoolbar").css("left", $(window).width() / 2 - $("#imgtoolbar").width() / 2);
    //$("#imghelper").height($("#imghelper img").height() + 10);
    $("#cui").draggable();
    var searchtags = [

	];
    $("#searchbox").autocomplete({
        source: searchtags
    });

    //position keyboard shortcut

    /*var winht = $(window).height();
    var winw = $(window).width();
    $("#keyboardshortcut").height(winht / 2);
    $("#keyboardshortcut").width(winw / 2);
    var kbht = $("#keyboardshortcut").height();
    var kbw = $("#keyboardshortcut").width();
    $("#keyboardshortcut").css("top", (winht / 2 - kbht / 2) + "px");
    $("#keyboardshortcut").css("left", (winw / 2 - kbw / 2) + "px");*/

    //Webpage script



    //floating sidebar

    //var sidebar1btm1 = $("#sidebar1wrapper").offset().top + $('#sidebar1wrapper').height();
    /*var a, b, c;
    a = parseInt($("#sidebar1wrapper").offset().top);
    b = parseInt($("#sidebar1").height());
    c = $(window).scrollTop();
    var sidebar1btm1 = a + b + c;
    var topft = $('#footerwrapper').offset().top;
    var orgt = 0;
    $(window).scroll(function() {
    //find out the y position of the scroll
    var y = $(window).scrollTop();
    topft = $('#footer').offset().top;
    //whether it is below the sidebar
    a = parseInt($("#sidebar1wrapper").offset().top);
    b = parseInt($("#sidebar1").height());


    if(y >= top1) {
    //if so, add fixed class
    $("#sidebar1").removeClass("absolute");
    $('#sidebar1').addClass('fixed');
    if(orgt) {
    $('#sidebar1').css("top", orgt);
    }
    }
    else {
    if(orgt) {
    $('#sidebar1').css("top", orgt);
    }
    $("#sidebar1").removeClass("absolute");
    $('#sidebar1').removeClass('fixed');
    }
    if(a +b + $(window).scrollTop() > topft) {
    orgt = $('#sidebar1').css("top");
    $('#sidebar1').addClass('absolute');
    $('#sidebar1').removeClass('fixed');
    $('#sidebar1').css("top", (topft - $("#sidebar1").height() - 110) + "px");
    } else {
    orgt = 0;
    }
    if(ismagnifyimgshown) return false;
    });*/

    $("ul.topnav li").hover(function() { //When trigger is clicked...

        //Following events are applied to the subnav itself (moving subnav up and down)
        $(this).find("ul.subnav").stop(true, true).slideDown('fast').show(); //Drop down the subnav on click
        $(this).addClass("subhover"); //On hover over, add class "subhover"
    }, function() {	//On Hover Out
        $(this).removeClass("subhover"); //On hover out, remove class "subhover"
        $(this).find("ul.subnav").stop(true, true).slideUp('slow'); //When the mouse hovers out of the subnav, move it back up
    });

    $(window).unload(function() {
        //document.location.href = "https://docs.google.com/spreadsheet/viewform?formkey=dFJoczlrZWJ0U1JqTEhMaWl2UW5kRFE6MQ";
        //window.open("https://docs.google.com/spreadsheet/viewform?formkey=dFJoczlrZWJ0U1JqTEhMaWl2UW5kRFE6MQ");
    });


    $(document).click(function(e) {
        $("#popmenu").fadeOut(100);
        $(".rcmenu").fadeOut(100);
        drc = false;
    });



    /*$('.TabbedPanelsTab').click(function() { checkLay(); });
    $('#sidebar1').mouseover(function() { checkLay(); });
    $('.CollapsiblePanelTab').click(function() { checkLay(); });
    $('.sidebar2').click(function() { checkLay(); });*/

    /*$("#ec1").click(function() {
    if($("#ec1").text() == "p") {
    $("#footer2").fadeOut(400);
    $("#ec1").text("r");
    $("#ec2").text("q");
    
    }
    });
    $("#ec2").click(function() {
    if($("#ec2").text() == "q") {
    $("#footer2").fadeIn(400);
    $(document).scrollTop($('.container').height());
    $("#ec2").text("s");
    $("#ec1").text("p");
    
    }
    });
    /*var hasclicked = false, timeoutid = 0;
    function rcmenuresettimer() {
    clearTimeout(timeoutid);
    timeoutid = setTimeout(function() {
    $(".rcmenu").fadeOut(400);
    drc = false;
    }, 1000);
    }
    /*$("p").contextmenu(function(e) {
    rcpos = 1;
    $("#popmenu").fadeOut(100);
    $("#ref").text("");
    $("cti").text("");
    curcopytext = $(this).text();
    $(".rcmenu").fadeIn(100);
    $(".rcmenu").css("top", e.pageY);
    $(".rcmenu").css("left", e.pageX);
    rcmenuresettimer();
    });

    $(".rcmenu").hover(function() {
    clearTimeout(timeoutid);
    }, function() {
    timeoutid = setTimeout(function() {
    $(".rcmenu").fadeOut(400);
    }, 1000);
    });


    $("#ct").click(function() {
    $(".rcmenu").fadeOut(100);
    });


    $("#ref").click(function() {
    $("#funfact").click();

    });
    $("#copyt").zclip({
    path: "ZeroClipboard.swf",
    copy: function () {
    return curcopytext;
    }
    });

    $("#copyt").click(function() {
    copyToClipboard(curcopytext);
    });

    $("#defrc").click(function(e) {
    var drc = true;
    //alert("shyt");
    $("body").attr("oncontextmenu", "return true");
    setTimeout(function() {
    $("*").trigger({
    type: 'mousedown',
    which: 3
    });
    $("body").attr("oncontextmenu", "return false");
    }, 3000);
    });*/



    $("#movea,#move,.move2").click(function() {
        $('html,body').animate({ scrollTop: 0 }, 1000);
    });
    $("#refc").click(function() {
        Cufon.refresh();
        $("#popmenu").fadeOut(300);
    });
    $("#opt").click(function(e) {
        //$(".rcmenu").fadeOut(300);
        setTimeout(function() {
            $("#popmenu").fadeIn(300);
            $("#popmenu").css("top", e.pageY - $(window).scrollTop());
            $("#popmenu").css("left", e.pageX - $(window).scrollLeft() - $("#popmenu").width());
        }, 10);
    });
    /*$("#body2").click(function () {
    $("#popmenu").fadeOut(300);
    });*/
    $("#fdbk").click(function() {
        var w, h, ww, wh;
        $("html,body").animate({ scrollTop: 0 }, 500);
        w = parseFloat($("#feedback").css("width"));
        h = parseFloat($("#feedback").css("height"));
        ww = parseFloat($(window).width());
        wh = parseFloat($(window).height());
        var t, l;
        t = wh / 2 - h / 2;
        l = ww / 2 - w / 2;
        $("#feedback").css("top", t);
        $("#feedback").css("left", l);
        $("#feedback").attr("src", "https://docs.google.com/spreadsheet/viewform?formkey=dFJoczlrZWJ0U1JqTEhMaWl2UW5kRFE6MQ");
        $("#feedback").css("top", 0);
        $("#closepopup,#closepic").width(30);
        $("#closepopup,#closepic").height(30);
        $("#closepopup").css("left", ww - $("#closepopup").width());
        $("#popmenu").fadeOut(500);
        $("#feedback").fadeIn(500);
        $("#feedbackoverlay").fadeIn(500);
        $("#feedbackoverlay").animate({ opacity: 0.5 });
        $("#closepopup").fadeIn(500);
        $("#feedback").animate({ height: wh, width: (ww / 3 * 2), left: (ww / 6) }, 500);
        closefunc = function(e) {
            $("#feedbackoverlay").fadeOut(500);
            $("#feedback").fadeOut(500);
            $("#closepopup").fadeOut(500);
            $("#closeupimg").fadeOut(500);
            $(":not(#feedback)").unbind("click", closefunc);
            $(document).unbind("keyup", escfunc);
        };
        escfunc = function(e) {
            if(e.keyCode == 27) {
                $("#feedbackoverlay").fadeOut(500);
                $("#feedback").fadeOut(500);
                $("#closepopup").fadeOut(500);
                $("#closeupimg").fadeOut(500);
                $("#imgtoolbar").fadeOut(500);
                $(":not(#feedback)").unbind("click", closefunc);
                $(document).unbind("keyup", escfunc);
            }
        };
        setTimeout(function() {
            $(":not(#feedback)").bind("click", closefunc);
            $(document).bind("keyup", escfunc);
        }, 1000);
    });
    $("#closepopup").click(function() {
        $("#feedbackoverlay").fadeOut(500);
        $("#feedback").fadeOut(500);
        $("#closepopup").fadeOut(500);
        $("#closeupimg").fadeOut(500);
        $("#cui").fadeOut(500);
        $("#cuioverlay").fadeOut(500);
        $("#imgtoolbar").fadeOut(500);
    });
    $("a").click(function() {
        var t = $(this).attr("target");
        var h = $(this).attr("href");
        if((t != "_blank") && ((typeof h) != "undefined")) {
            $(window).unbind("unload");
        }
    });
    $("#movett").click(function() {
        $(document).scrollTop($('.container').height());
    });


    //right click menu function

    /*$("img:not(#cui,#closepopup,#magnifyimg,#ctih)").contextmenu(function (e) {
    $("#imghelper").height(20);
    $("#magnifyimg").height($("#imghelper").height());
    $("#ctih").height($("#imghelper").height());
    $("#magnifyimg").width($("#magnifyimg").height());
    $("#ctih").width($("#cith").height());
    $("#imghelper").height(20);
    $("#imghelper").css("top", e.pageY);
    $("#imghelper").css("left", e.pageX);
    //save img url to varible
    curimgurl = $(this).attr("src");
    $("#imghelper").fadeIn(500);
    });
    $("#ctih").click(function () {
    $("#imghelper").fadeOut(500);
    });*/
    //magnify code
    $("img:not(#cui,#closepopup,#closepic,#magnifyimg,#ctih,#zoomin,#zoomout,#opt,#thumbs img)").click(function(e) {
        e.stopPropagation();
        e.preventDefault();
        $("#cui").attr("src", $(this).attr("src"));
        var imgwidth = $(this).width();
        var imgheight = $(this).height();
        if((imgwidth >= $(window).width()) || (imgheight >= $(window).height())) {
            if(imgwidth > imgheight) {
                imgwidth = ($(window).height() - 60) * imgwidth / imgheight;
                imgheight = $(window).height() - 60;
            } else {
                imgheight = ($(window).width() - 60) * imgheight / imgwidth;
                imgwidth = $(window).width() - 60;
            }
        }
        $("#cui").fadeIn(1);
        $("#closepopup,#closepic").width(30);
        $("#closepopup,#closepic").height(30);
        $("#closepopup").css("left", $(window).width() - $("#closepopup").width());
        $("#closepopup").fadeIn(500);
        $('#imgtoolbar').fadeIn(500);
        $("#cui").width($(this).width());
        $("#cui").height($(this).height());
        $("#cui").css("top", ($(this).offset().top - $(window).scrollTop()) + "px");
        $("#cui").css("left", ($(this).offset().left - $(window).scrollLeft()) + "px");
        $("#cui").animate({
            top: (($(window).height() - imgheight) / 2),
            left: (($(window).width() - imgwidth) / 2),
            width: imgwidth,
            height: imgheight
        }, 1000);
        $("#cuioverlay").animate({ opacity: 0.5 });
        $("#cuioverlay").fadeIn(500);
        curimgw = imgwidth / 10;
        curimgh = imgheight / 10;
        closefunca = function() {
            $("#closepopup").fadeOut(500);
            $("#cui").fadeOut(500);
            $("#cuioverlay").fadeOut(500);
            $('#imgtoolbar').fadeOut(500);
            $(":not(#cui)").unbind("click", closefunca);
            $(document).unbind("keyup", escfunca);
            ismagnifyimgshown = false;
        };
        //noscroll function
        //on key escape function
        escfunca = function(e) {
            if(e.keyCode == 27) {
                $("#closepopup").fadeOut(500);
                $("#cui").fadeOut(500);
                $("#cuioverlay").fadeOut(500);
                $('#imgtoolbar').fadeOut(500);
                $(":not(#cui)").unbind("click", closefunca);
                $(document).unbind("keyup", escfunca);
                ismagnifyimgshown = false;
            }
        }
        //wait for a while then bind the function to the document
        setTimeout(function() {
            //$(":not(#cui,#cuioverlay)").bind("click", closefunca);
            $(document).bind("keyup", escfunca);
        }, 1000);
    });
    $("#cui").mousewheel(function(e, d) {
        var middlex, middley, mousex, mousey, proportx, proporty, imgheight, imgwidth, moveleft, movetop;
        middlex = parseFloat($("#cui").css("left")) + ($("#cui").width() / 2);
        middley = parseFloat($("#cui").css("top")) + ($("#cui").height() / 2);
        mousex = e.pageX;
        mousey = e.pageY;
        imgleft = parseFloat($("#cui").css("left"));
        imgtop = parseFloat($("#cui").css("top"));
        proportx = mousex - $(window).scrollLeft() - imgleft;
        proporty = mousey - $(window).scrollTop() - imgtop;
        imgwidth = $("#cui").width();
        imgheight = $("#cui").height();
        curimgh = $("#cui").height() / 10;
        curimgw = $("#cui").width() / 10;
        moveleft = (proportx * curimgw) / imgwidth;
        movetop = (proporty * curimgh) / imgheight;
        if(d > 0) {
            //$("#cui").width(imgwidth + curimgw);
            $("#cui").css("width", "auto");
            $("#cui").height(imgheight + curimgh);
            $("#cui").css("left", imgleft - moveleft + "px");
            $("#cui").css("top", imgtop - movetop + "px");
        } else if(d < 0) {
            if(($("#cui").width() <= curimgw) || ($("#cui").height() <= curimgh)) return false;
            //$("#cui").width(imgwidth - curimgw);
            $("#cui").css("width", "auto");
            $("#cui").height(imgheight - curimgh);
            $("#cui").css("left", imgleft + moveleft + "px");
            $("#cui").css("top", imgtop + movetop + "px");
            //if (middlex < 0) $("#cui").css("top", 0);
            //if (middley < 0) $("#cui").css("left", 0);
        }
        return false;
    });
    $('#zoomin').click(function() {
        $("#cui").width($("#cui").width() + curimgw);
        $("#cui").height($("#cui").height() + curimgh);
        return false;
    });
    $('#zoomout').click(function() {
        if(($("#cui").width() <= curimgw) || ($("#cui").height() <= curimgh)) return false;
        $("#cui").width($("#cui").width() - curimgw);
        $("#cui").height($("#cui").height() - curimgh);
    });
    $('#resetzoom').click(function() {
        //$("#cui").attr("src", curimgurl);
        //background overlay
        $("#cui").width("");
        $("#cui").height("");
        //imgheight, imgwidth, 
        numtoloop = 0;
        //calculate number to loop;
        imgwidth = $("#cui").width();
        imgheight = $("#cui").height();
        if((imgwidth < 30) && (imgheight < 30)) {
        }
        isfound = false;
        for(queer = 1; queer <= numtoloop; queer++) {
            imgheight2 = $("#cui").height() * queer;
            imgwidth2 = $("#cui").width() * queer;
            heightofcui = $("#cui").height();
            widthofcui = $("#cui").width();
            if(!((imgheight2 < $(window).height()) && (imgwidth2 < $(window).width()))) {
                if(isfound == true) break;
            }
            else {
                isfound = true;
                $("#cui").height(imgheight2);
                $("#cui").width(imgwidth2);
            }
        }
        imgwidth = $("#cui").width();
        curimgw = imgwidth / 10;
        imgheight = $("#cui").height();
        curimgh = imgheight / 10;
        if(($("#cui").width() >= $(window).width()) || ($("#cui").height() >= $(window).height())) {
            if($("#cui").width() > $("#cui").height()) {
                $("#cui").height($(window).height() - 60);
                $("#cui").width($("#cui").height() * imgwidth / imgheight);
            } else {
                $("#cui").width($(window).width() - 60);
                $("#cui").height($("#cui").width() * imgheight / imgwidth);
            }
        }
        imgwidth = $("#cui").width();
        curimgw = imgwidth / 10;
        imgheight = $("#cui").height();
        curimgh = imgheight / 10;
        $("#cui").css("left", ($(window).width() / 2) - (imgwidth / 2));
        $("#cui").css("top", ($(window).height() / 2) - (imgheight / 2));
        $("#cui").fadeIn(500);
        return false;
    });
    $("#kebs").click(function() {
        $("#popmenu").fadeOut(500);
        $("#keyboardshortcut").fadeIn("slow");
        kbsopen = true;
    });
    /*$("img").error(function () { 
    $(this).css("display","none"); 
    //$(this).hide();
    });*/
});

$(window).resize(function(e) {
    $("#imgtoolbar").css("left", $(window).width() / 2 - $("#imgtoolbar").width() / 2);
});

function parseLocation()
{
	str = window.location();
	str1= str.split("?");
	str2= str1[1].split("=");
	identity= str2[1];
}
function popitup(url, name, width, height) 
{
	newwindow = window.open(url, name, "status=1,scrollbars=1,resizable=1, width="+width+", "+"height="+height);//width=750,height=600
	return false;
}