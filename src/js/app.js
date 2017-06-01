import $ from "jquery";
import slick from "slick-carousel";

console.log('ok')
$(function(){
  function init(){
    function OnClick(){
      var $load = $('.loading')
      var $input = $('input')
      var $login = $('.login')
      var $btnLogin = $('.btn-login')
      var $home = $('.home')
      var $headerList = $('.header-list')
      var $singleLesson = $('.single-lesson')
      var $burger = $('.burger')
      var $header = $('header')
      var $nav = $('.container-nav')
      var $overlay = $('.overlay')
      var $mail = $('.mail')
      var $logout = $('.logout')
      var $back = $('.back')
      $back.addClass('hidden');
      $load.on('click', function(){
        $(this).addClass('animate-fade-out')
        $header.removeClass('hidden')
      });
      $input.on('click', function(){
        $(this).parent().find('label').addClass('visible');
        $(this).attr('placeholder', '');

      })

      $btnLogin.on('click', function(e){
        e.preventDefault;
        $(this).parents('.small-full-screen').addClass('animate-top-change-hide')
        $home.removeClass('animate-bottom-change-hide').addClass('animate-bottom-change')
        $mail.addClass('hidden')
        if ($(window).width() < 1200) {

          $burger.removeClass('hidden')
        }

      })

      $headerList.find('li').on('click', function(){
        $home.removeClass('animate-bottom-change').addClass('animate-left-hide')
        $singleLesson.removeClass('animate-right-change-hide').addClass('animate-left-change')
        $burger.addClass('hidden')
        $back.removeClass('hidden')
      })

      $back.on('click', function(){
        $home.addClass('animate-bottom-change').removeClass('animate-left-hide')
        $singleLesson.addClass('animate-right-change-hide').removeClass('animate-left-change')

        $back.addClass('hidden')
        if ($(window).width() < 1200) {
          $burger.removeClass('hidden')
        }
      })
      $('.search').on('click', function(){
        $('.search-page').removeClass('animate-bottom-change-hide').addClass('animate-bottom-change')
      })
      $('.cancel').on('click', function(){
        $('.search-page').removeClass('animate-bottom-change').addClass('animate-bottom-change-hide')
      })
      $('#ondemand').on('click', function(){
        $('.search').removeClass('hidden');
      })

      $burger.on('click', function(){
        $header.addClass('visible');
        $nav.addClass('visible')
      })

      $overlay.on('click', function(){
        $header.removeClass('visible');
        $nav.removeClass('visible')
      })

      $nav.find('a').each(function(){

        $(this).on('click', function(){
          $id = $(this).attr('id');
          console.log($id);
          $header.removeClass('visible');
          $nav.removeClass('visible')
          $nav.find('li a').removeClass('bg-mediumblue');
          $('#' + $id).addClass('bg-mediumblue');
          $('.animate-right-change').removeClass('animate-right-change').addClass('animate-left-change-hide');
          $('.animate-left-change').removeClass('animate-left-change').addClass('animate-left-change-hide');
          $('.animate-top-change').removeClass('animate-top-change').addClass('animate-left-change-hide');
          $('.animate-bottom-change').removeClass('animate-bottom-change').addClass('animate-left-change-hide');
          if($id != 'ondemand'){
              $('.search').addClass('hidden');
          }

          if ($('.' + $id).hasClass('animate-top-change-hide') || $('.' + $id).hasClass('animate-bottom-change-hide') || $('.' + $id).hasClass('animate-left-change-hide') || $('.' + $id).hasClass('animate-right-change-hide')) {
            $('.' + $id).removeClass('animate-top-change-hide animate-bottom-change-hide animate-left-change-hide animate-right-change-hide').addClass('animate-right-change')
          }

          if ($('.' + $id).hasClass('animate-top-hide') || $('.' + $id).hasClass('animate-bottom-hide') || $('.' + $id).hasClass('animate-left-hide') || $('.' + $id).hasClass('animate-right-hide')) {
            $('.' + $id).removeClass('animate-top-hide animate-bottom-hide animate-left-hide animate-right-hide').addClass('animate-right-change')
          }


        })
      })
      $logout.on('click', function(){
        $('.animate-right-change').removeClass('animate-right-change').addClass('animate-left-change-hide');
        $('.animate-left-change').removeClass('animate-left-change').addClass('animate-left-change-hide');
        $('.animate-top-change').removeClass('animate-top-change').addClass('animate-left-change-hide');
        $('.animate-bottom-change').removeClass('animate-bottom-change').addClass('animate-left-change-hide');
        $login.addClass('animate-top-change')
        $header.removeClass('visible');
        $nav.removeClass('visible')
        $burger.addClass('hidden')
        $mail.removeClass('hidden')
        $('.search').addClass('hidden');
        $nav.find('li a').removeClass('bg-mediumblue');
      })
    }OnClick();


    function Slider(){
      $('.slider').slick({
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3,
        arrows :false,
        responsive: [
         {
           breakpoint: 769,
           settings: {
             arrows: false,
             centerMode: true,
             centerPadding: '40px',
             slidesToShow: 1
           }
         }
       ]
      });
    }Slider();


  }init();
});
