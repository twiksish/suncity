/*
 * Sign in form opening
 */

$(document).on('ready', function(){
    $('.header__top__sign-up__handler .button').on('click',function(){
       $('.header__top__sign-up__form').fadeToggle();
    });
});


$(document).on('ready', function() {
    $('.slider').bjqs({
        'height' : 298,
        'width' : 950,
        'responsive' : false,
        'animtype' : 'slide',
        'nexttext' : '',
        'prevtext' : '',
        'centermarkers' : false,
        'usecaptions' : false
    });
});

$(document).on('ready', function(){
    $('#temp-order').on('click', function(event){
        event.preventDefault();
        $('.item__data__popup').fadeIn();
    });
});