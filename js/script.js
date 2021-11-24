$(document).ready(function () {
    // 모달창 기능 
    // 1 : .modal       을 찾아서  웹브라우저에 보관
    let modal = $('.modal');
    // 2 : .modal-cont  를 찾아서  웹브라우저에 보관
    let modal_cont = $('.modal-cont');
    // 3   : .modal-close 를 찾아서  웹브라우저에 보관 
    let modal_close = $('.modal-close');
    // 3-1 : .modal-show 를 찾아서 웹브라우저에 보관한다.
    let modal_show = $('.modal-show');

    // 4 : .modal 을 display:none 안보여요.
    // modal.fadeIn();

    // 5 : .modal_close 를 마우스로 클릭하면 사라진다.
    modal_close.click(function () {
        modal.fadeOut();
    });

    // 6 :  .modal 을 마우스로 클릭하면 사라진다.
    modal.click(function () {
        modal.fadeOut();
    });

    // 7 : .modal-cont 를 마우스로 클릭하면 그냥 있어라.
    modal_cont.click(function (event) {
        event.stopPropagation();
    });

    // 8   :  .modal-show 를 마우스로 클릭하면 보여요.
    // 8-1 : 아주 중요합니다. 
    // 8-2 : a 태그라면 주의하세요. !!!!!!!!!!!!
    modal_show.click(function (e) {
        // href 를 막아야 합니다.
        e.preventDefault();
        modal.fadeIn();
    });
    // 1.gnb를 저장한다.
    var gnb = $('.gnb');
    // 2.주메뉴 depth1
    var depth1 = $('.depth1');
    var depth1_a = $('.depth>li>a');

    // 3.서브메뉴 div .depth2
    var depth2 = $('.depth2');
    // 4.submenu
    var submenu = $('.submenu');
    // 5. .submenu>li 
    var submenu_li = $('.submenu >li');

    gnb.mouseenter(function () {
        depth2.addClass('depth2-active');
    });
    gnb.mouseleave(function () {
        depth2.removeClass('depth2-active');
    });

    $.each(submenu_li, function (index, item) {
        submenu_li.eq(index).mouseenter(function () {
            depth1_a.removeClass('depth1-active');
            depth1_a.eq(index).addClass('depth1-active');
        });

        submenu_li.eq(index).mouseleave(function () {
            depth1_a.removeClass('depth1-active');
        });
    })
});