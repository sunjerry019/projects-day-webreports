//ONLY LOAD THIS SCRIPT IF THERE ARE CHIM WORDS OR CITATIONS AND THEY ARE NEEDED

$(document).ready(function(e) {
    $(".tooltip").hover(function(e) {
        //e.stopPropagation();
        var title = $(this).attr("tooltip");
        $("#tooltip-display").html(title);

        //position
        var wordof = $(this).offset();
        var wordt = wordof.top;
        var wordl = wordof.left;
        var tooltiph = $("#tooltip-display").height();
        $("#tooltip-display").css("top", (wordt - tooltiph - 10));
        $("#tooltip-display").css("left", wordl);

        $("#tooltip-display").fadeIn(125);

        $(window).resize(function(e) {
            $("#tooltip-display").css("top", (wordt - tooltiph - 3));
            $("#tooltip-display").css("left", wordl);
        });
    }, function(e) {
        //e.stopPropagation();
        $("#tooltip-display").fadeOut(125);
    });
    $("#tooltip-display").hover(function(e) {
        $("#tooltip-display").stop(true, true).fadeIn(125);
    }, function(e) {
        $("#tooltip-display").fadeOut(125);
    })
});