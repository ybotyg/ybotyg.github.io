$(document).ready(function () {


        initMap();



    /*********************Popup overlay*********************/
    var handleMatchMedia = function (mediaQuery) {
            if (mediaQuery.matches) {
            }
            else {
                $(".image").click(function () {
                    // console.log('Ура')
                    var img = $(this);
                    var src = img.attr('src');
                    $("main").append("<div class='popup'>" +
                        "<div class='overlay-popup'></div>" + "<div title='Закрыть' class='close-popup'></div>" +
                        "<img src='" + src + "' class='image-popup' />" +
                        "</div>");
                    $(".popup").fadeIn(800);
                    // $('section').css('overflow' , 'hidden');
                    $(".image-popup").click(function () {
                        $(".popup").fadeOut(800);
                        setTimeout(function () {
                            $(".popup").remove();
                        }, 800);
                    });
                    $('.close-popup').click(function () {
                        $(".popup").fadeOut(800);
                        setTimeout(function () {
                            $(".popup").remove();
                        }, 800);
                    });
                });
            }
        },
        mql = window.matchMedia('all and (max-width: 480px)');
    handleMatchMedia(mql);
    mql.addListener(handleMatchMedia);
    /********************Анимация галлереи**************/
    var mas = ["bounceInDown", "fadeInRight", "bounceInLeft", "slideInDown", "bounceInRight", "bounceInUp", "slideInUp", "fadeInDown",
        "fadeInUp", "fadeInLeft", "slideInLeft",
        "slideInRight"];

    $('.animated').each(function () {
        var count = Math.round(Math.random() * 6);
        $(this).addClass(mas[count]);
        // console.log(count);
    });

    /************SIDE PANEL********/
    var bullets = $('.main-menu li');
    // console.log($bullets);
    $('.main-menu').on('click', 'li', function () {
        var indx = bullets.index(this);
        // console.log(indx);
        $(this).addClass('li-active');
        $('li').not(this).removeClass('li-active');
        $('li:last-child').removeClass('li-active');
        $('.side-panel:not(:eq(indx))').css('right', '-9999px');
        $('.side-panel').eq(indx).css('right', '0');
        $('.close-side-panel').fadeIn(2500);
        $('#arrow').fadeOut(500);
    });
    $('.close-side-panel').click(function () {
        console.log('icon');
        $('li').removeClass('li-active');
        $('.side-panel').css('right', '-9999px');
        $('.close-side-panel').fadeOut(1);
        $('#arrow').fadeIn(1500)
    });
    /*********************Social*******************/
    $('.soc').click(function () {
        $('.social').css('left', '10%');
        // $('.close-side-panel').hide();
    });
    $('section').click(function () {
        $('.social').css('left', '-9999px')
    });
    /************ARROW UP********/
    $('#arrow').click(function () {
        console.log('Click Arrow');
        $('.main-menu').css('left', '0');
        $('section').css('margin-left', '10%').css('width', '90%');
        $('.slider-pages').toggle(300);
        $('li').removeClass('li-active');
        $('main').toggleClass('overflow');
        $('body,html').animate({
            scrollTop: 0
        }, 1200);
        $('#arrow').toggleClass('rotate')
    });
    /************PROJECT'S BLOCKS********/

    $('.block').on("click", function () {
        $(this).css('overflow', 'auto').removeClass('hover').css('width', '100%').css("cursor", 'auto').children().css('display', 'block');
        $('.block').not(this).css('width', '0%').not(this).children().css('display', 'none');
        $('.close-side-panel').css('display', 'none');
        $('.block-project-header').addClass('big-block-project-header');
        $('.close-project').css('display', 'block');
    });
    $('.close-project').click(function () {
        $('.block').addClass('hover').css('width', '10%').css('cursor', 'pointer');
        $('.block-project').css('display', 'none');
        $('.block-project-header').css('display', 'block').removeClass('big-block-project-header');
        $('.block:nth-of-type(4)').css('width', '70%').removeClass('hover');
        $('.pn').css('display', 'block');
        $('.close-project').css('display', 'none');
        $('.close-side-panel').fadeIn(2500);

    });
    //*****Cookies******/
    $(function () {
        // Проверяем запись в куках о посещении
        // Если запись есть - ничего не делаем
        if (!$.cookie('hideModal')) {
            var delay_popup = 2000;
            setTimeout("document.getElementById('cookies').style.display='flex'", delay_popup);
        }
        $.cookie('hideModal', true, {
            expires: 7,
            path: '/'
        });
    });
    $('.closemodal').click(function () {
        $('.modal , #cookies').fadeOut(300)
    });


});