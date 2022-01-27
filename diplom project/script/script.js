$('.hiring-items > div').on('click', function(){
    $(this).children('.hiring-icon').toggleClass('active');
    $(this).children('.hiring-town').toggleClass('toggleColor');
    $(this).children('.hiring-position').toggleClass('toggleColor');
    $(this).parent('.hiring-items').toggleClass('toggleBg');
    $(this).toggleClass('toggleColor');
    $(this).next('p').slideToggle(300).toggleClass('toggleColor');
})

$('.feature-sc > div').on('click', function(){
    $(this).next('p').slideToggle(300);
    $(this).children('.feature-customers').toggleClass('toggleBlue');
    $(this).parent('.feature-sc').toggleClass('toggleBack');
})

$('#menuToggle #toggleCheckbox').change(function() {
    if(this.checked) {
        $('body').css({'overflow': "hidden" })
    }
    else {
        $('body').css({'overflow': "visible" })
    }
});

$('.carousel').slick({
    dots: true,
});

$(window).scroll(function(){
    if($(this).scrollTop()>500){
        $('#up').fadeIn();
    }else{
        $('#up').fadeOut();
    }
})

$('#up').on('click', function(){
    $('html, body').animate({scrolTop: 0}, 400)
})

$('#home').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#about').offset().top}, 500);
})