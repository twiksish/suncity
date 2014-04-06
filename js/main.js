/*
 * Placeholder fix init
 */

$(document).on('ready', function(){
    $('.no-placeholder input[placeholder], .no-placeholder textarea[placeholder]').placeholder();
});


/*
 * Sign in form opening
 */

$(document).on('ready', function(){
    $('.header__top__sign-up__handler .button').on('click',function(){
       $('.header__top__sign-up__form').fadeToggle();
    });
});
