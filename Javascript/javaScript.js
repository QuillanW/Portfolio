(function(){
    var scroll = document.scrollingElement.scrollTop
    if (scroll == 0) {
        document.getElementById("contentcollapsible").style.position = "";
        document.getElementById("contentcollapsible").style.marginTop = "";
        $("#contentcollapsible").fadeIn(300);
    } else {
        document.getElementById("contentcollapsible").style.position = "fixed";
        document.getElementById("contentcollapsible").style.marginTop = "-10%";
        $("#contentcollapsible").fadeOut(300);
    }
    setTimeout(arguments.callee, 50);
})();