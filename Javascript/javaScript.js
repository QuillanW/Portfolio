(function(){
    var scroll = document.scrollingElement.scrollTop
    console.log(scroll)
    if (scroll == 0) {
        $("#contentcollapsible").fadeIn(150);
    } else {
        $("#contentcollapsible").fadeOut(150);
    }
    setTimeout(arguments.callee, 50);
})();