import jquery from 'jquery';
import Flickity from 'flickity';

window.jQuery = window.$ = jquery;

import 'flickity/dist/flickity.css';

(function () {

    /**
     * Height header-banner 
     */
     var hb = $('#header-banner');
     var wh = $(window).height();

     $(hb).css('height', `${wh}px`)

    /**
     * Burger-menu
     */
    $('.burger-menu').click(function () {
        var menu = $('.menu');
        $(this).toggleClass('active');
        if (menu.is(':visible')) {
            menu.slideUp();
        } else {
            menu.slideDown();
        }
    });


    /**
     * Form-label
     */

    $('.form-control').on('focus', function () {
        $(this).parent().addClass('in-focus');
    });

    $('.form-control').on('blur', function () {
        if ($(this).val() !== "") {
            $(this).parent().addClass('in-focus');
        } else {
            $(this).parent().removeClass('in-focus');
        }
    });

    /**
     * Menu fixed
     */
    var windowHeight = $(window).height();

    $(window).on('scroll', function () {
        if ($(this).scrollTop() >= $('#problem').offset().top) {
            $('#app-header').addClass('is-fixed');
        } else {
            $('#app-header').removeClass('is-fixed');
        }
    })

    /**
     * Scroll Link
     */

    $(".scroll-link").on("click", function (event) {
        event.preventDefault();
        $('.menu').slideUp();

        var id = $(this).attr('href');

        if (id.length > 1) {

           var top = $(id).offset().top;

            $('body,html').animate({ scrollTop: top }, 1500);
        } 
    });

    /**
     * Price modal
     */
    $('.product-card-footer-text').on('click', function (e) {
        e.preventDefault();
        $('.price-modal').addClass('modal-active animated bounceInUp').removeClass('bounceOutDown');
    });

    $('#close-price-modal').on('click', function (e) {
        setTimeout(function () {
            $('.price-modal').removeClass('modal-active bounceInUp');
        }, 300)

    });

    /**
     * Block animate
     */
    $('#app-header').addClass('animated bounceInDown');
    $('#header-banner').addClass('animated zoomIn');

    var windowHeight = $(window).height();

    $(window).on('scroll', function () {
        if($(window).scrollTop() === 0) {
            $('.nav-header-list-item__link').removeClass('is-active');
            $('.nav-header-list-item__link').eq(0).addClass('is-active');
        }
        if ($(this).scrollTop() + windowHeight >= $('#problem').offset().top) {
            $('.problem-item').addClass('animated slideInLeft');
            $('.nav-header-list-item__link').removeClass('is-active');
            $('.nav-header-list-item__link').eq(1).addClass('is-active');
        }
        if ($(this).scrollTop() + windowHeight >= $('#about').offset().top) {
            $('.about-img').addClass('animated slideInRight');
            $('.about-item').addClass('animated slideInLeft');
            $('.nav-header-list-item__link').removeClass('is-active');
            $('.nav-header-list-item__link').eq(2).addClass('is-active');
        }
        if ($(this).scrollTop() + windowHeight >= $('#result').offset().top) {
            $('.result-item').addClass('animated slideInLeft');
            $('.nav-header-list-item__link').removeClass('is-active');
            $('.nav-header-list-item__link').eq(3).addClass('is-active');
        }
        if ($(this).scrollTop() + windowHeight >= $('#frame').offset().top) {
            $('.nav-header-list-item__link').removeClass('is-active');
            $('.nav-header-list-item__link').eq(4).addClass('is-active');
        }
        if ($(this).scrollTop() + windowHeight >= $('#reviews').offset().top) {
            $('.nav-header-list-item__link').removeClass('is-active');
            $('.nav-header-list-item__link').eq(5).addClass('is-active');
        }
        if ($(this).scrollTop() + windowHeight >= $('#product').offset().top) {
            $('.product-card').eq(0).addClass('animated slideInLeft');
            $('.product-card').eq(1).addClass('animated zoomIn');
            $('.product-card').eq(2).addClass('animated slideInRight');
            $('.nav-header-list-item__link').removeClass('is-active');
            $('.nav-header-list-item__link').eq(6).addClass('is-active');
        }
    });

    if($(window).scrollTop() === 0) {
        $('.nav-header-list-item__link').removeClass('is-active');
        $('.nav-header-list-item__link').eq(0).addClass('is-active');
    }


})(jQuery)


/**
 * Sliders reviews
 */


if ($('.reviews-slider')) {

    var elem1 = document.querySelector('.reviews-slider');
    if (elem1) {

        if ($(window).width() < 768) {

            var flkty1 = new Flickity(elem1, {
                prevNextButtons: false,
                cellAlign: 'center',
                cellSelector: '.reviews-slider-item',
                contain: false,
                draggable: true,
                freeScroll: false,
                wrapAround: true,
                initialIndex: 1
            });
        }

        if ($(window).width() > 768) {

            var flkty1 = new Flickity(elem1, {
                prevNextButtons: false,
                cellAlign: 'center',
                cellSelector: '.reviews-slider-item',
                contain: false,
                draggable: false,
                freeScroll: true,
                wrapAround: true,
                initialIndex: 1
            });
        }


        var prevArrowReviews = document.querySelector('.reviews-slider-nav-arrow-prev');

        prevArrowReviews.addEventListener('click', function () {
            flkty1.previous(true, false);
        });

        var nextArrowReviews = document.querySelector('.reviews-slider-nav-arrow-next');

        nextArrowReviews.addEventListener('click', function () {
            flkty1.next(true, false);
        });

    }
}