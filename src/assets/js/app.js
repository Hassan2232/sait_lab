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

$('.modal__btn-active').on('click', function() {
    $('.modal').addClass('active');
});

$('.close__btn').on('click', function() {
    $('.modal').removeClass('active');
});

$('.btn__nav').on('click', function() {
    $('.nav').toggleClass('active');
    $('.btn__nav').toggleClass('active');
    $('.head__btn').toggleClass('active');
    $('.header__logo').toggleClass('active');
    $('.header').toggleClass('active');
});




