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