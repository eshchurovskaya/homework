$('.hiring-items > div').on('click', function(){
    $(this).children('.hiring-icon').toggleClass('active');
    $(this).parent('.hiring-items').toggleClass('toggleBg');
    $(this).toggleClass('toggleColor');
    $(this).next('p').slideToggle(300).toggleClass('toggleColor');
})

$('')
