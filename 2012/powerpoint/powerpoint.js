var slidenumber,slidemax;
var slideprefix,slidesuffix;
var slidemaxs = {
	1:26,
	2:31,
	3:39,
}
var slideprefixs = {
	1:"prelim/Slide",
	2:"semi/Slide",
	3:"final/Slide"
};
var slidesuffixs = {
	1:".JPG",
	2:".JPG",
	3:".JPG"
}
$(window).load(function(e) {
	$("#slide").height($(window).height()-10);
	$("#slide").css("left",($(window).width() - $("#slide").width())/2 + "px");
});
$(document).ready(function(e) {
	var identity = 1;
	var params = Spry.Utils.getURLParamsAsObject(window.location.toString());
	if(params.i)identity = params.i;
	
	slidenumber=1;
	slidemax=slidemaxs[identity];
	slideprefix=slideprefixs[identity];
	slidesuffix=slidesuffixs[identity];
    $("#slide").attr("src",slideprefix+slidenumber+slidesuffix);
	$(window).resize(function(e) {
		$("#slide").height($(window).height()-10);
		$("#slide").css("left",($(window).width() - $("#slide").width())/2 + "px");  
    });
	$(document).click(function(e) {
        if(slidenumber<slidemax)slidenumber++;
    	$("#slide").attr("src",slideprefix+slidenumber+slidesuffix);
    });
	$(document).mousewheel(function(e,d) {
		if((d<0)&&(slidenumber<slidemax))slidenumber++;
		if((d>0)&&(slidenumber>1))slidenumber--;
		$("#slide").attr("src",slideprefix+slidenumber+slidesuffix);
	});
	$(document).keydown(function(e) {
        if(((e.keyCode==40)||(e.keyCode==39)||(e.keyCode==13))&&(slidenumber<slidemax))slidenumber++;
        if(((e.keyCode==38)||(e.keyCode==37)||(e.keyCode==8))&&(slidenumber>1))slidenumber--;
		$("#slide").attr("src",slideprefix+slidenumber+slidesuffix);
    });
});