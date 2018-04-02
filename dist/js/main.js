$(document).on('click', '.thumbnail', function(){
    var ti = $(this).find('.thumbnail_inner').parent();
    if (ti.hasClass('ti_active')){
        $(this).find('.str_block').removeClass( "str_up_block" ).addClass( "str_block" );
        ti.removeClass( "ti_active" );
    } else {
        $(this).find('.str_block').removeClass( "str_block" ).addClass( "str_up_block" );
        $('.ti_active').removeClass( "ti_active" );
        ti.addClass( "ti_active" );
    }

});
