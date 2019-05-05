$(".topnav .about").click(function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 700);
});

$(".topnav .project").click(function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $("#project").offset().top
    }, 700);
});

$(".topnav .contact").click(function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 700);
});