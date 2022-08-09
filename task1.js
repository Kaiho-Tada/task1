$(function(){
    $('.header-icon span').click(function(){
        $(`#header-menu-id`).slideDown();
        $(this).hide();
        $(`#close-icon`).show();
        $(`header`).css(`position`, `fixed`);
        $(`header`).css(`width`, `100%`);
        $(`header`).css(`z-index`, `10`);
        $(`header`).css(`background-color`, `#FFF`);
    });
    
    $(`#close-icon`).click(function(){
        $(`#header-menu-id`).slideUp();
        $(this).hide();
        $(`.header-icon span`).show();
        $(`header`).css(`position`, `initial`);
    });
})