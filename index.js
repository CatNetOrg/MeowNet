
$(document).ready(function() {
    $("button").css("display", "none");

    $("button").fadeIn(2000);

    $("a.fade").click(function(event){
    event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(2000, redirectPage);
    });

    function redirectPage() {
        window.location = linkLocation;
    }
});