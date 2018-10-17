$(document).ready(function () {
    initMap();
    <!-- Arrow Up  -->
    $('#arrowUp').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1200);
    });
});