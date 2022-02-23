$('.modal-window').on('click', function(e){
    if($(e.target).closest('.modal').length ==0){
        $(this).fadeOut()
    }
})

$('.close').on('click', function(){
    $(this).parents('.modal-window').fadeOut();
})

$('#modal-button').on('click', function(){
    $('.modal-window').fadeIn();
})