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

$('.modal-form').on('click', function(e){
    if($(e.target).closest('.modal-second').length ==0){
        $(this).fadeOut()
    }
})

$('.close').on('click', function(){
    $(this).parents('.modal-form').fadeOut();
})

$('#button').on('click', function(){
    $('.modal-form').fadeIn();
})



$('#button-second').on('click', function(e){
    e.preventDefault();
    let email = $('#email').val().trim();

    if(email == ""){
        $('#error-email').text('Enter your email');
        return false
    }

    $.ajax({
        url: 'ajax/telegram.php',
        type: 'POST',
        cache: false,
        data: {'email': email}, 
        dataType: 'html',
     
        beforeSend: function(){
            $('#button-second').prop('disabled', true)
        },

        success: function(){

            $('.modal-form').fadeIn();
            $('#email').val('');
            $('#error-email').text('');
            $('#button-second').prop('disabled', false)
        }
    })
})