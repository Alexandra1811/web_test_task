$(document).on('click', '.str_block', function(){
    $(this).removeClass( "str_block" ).addClass( "str_up_block" );
    $('.ti_active').removeClass( "ti_active" );
    $(this).parent().addClass( "ti_active" );
});
$(document).on('click', '.str_up_block', function(){
    $(this).removeClass( "str_up_block" ).addClass( "str_block" );
    $(this).parent().removeClass( "ti_active" );
});



