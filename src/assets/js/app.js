$('.scrollto').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 600,   // по умолчанию «400»
        easing: "linear" // по умолчанию «swing»
    });

    return false;
});

$('.navBtn__close').on('click', function() {
    $('.nav__item-left').toggleClass('active');
});

