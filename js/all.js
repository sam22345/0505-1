$(document).ready(function () {
  ////LINK ToggleListSTR////
    $('.serchBtn,.menuBtn').click(function (e) { 
        e.preventDefault();
        $(this).parent().siblings().find('ul').slideUp();//把this以外的都隱藏起來
        $(this).parent().find('ul').slideToggle();
        });
        ////LINK ToggleList結束////
        ////banner輪播STR///////
        const swiper = new Swiper('.swiper-container', {
          autoplay: {
            delay: 3000,///輪播間隔秒數
          },
          // Optional parameters
          direction: 'horizontal',//播放模式 vertical:垂直 horizontal:水平
          speed:3000,//播放速度
          loop: true,//循環播放       
        
          // If we need pagination//頁碼
          // pagination: {
          //   el: '.swiper-pagination',
          // },
        
          // Navigation arrows
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        
          // And if we need scrollbar
          // scrollbar: {
          //   el: '.swiper-scrollbar',
          // },
        });
        ////banner輪播END///////
        ////TOP STR///////
        $('.top a').click(function (e) { 
          e.preventDefault();
          $('html,body').animate({
            scrollTop:0
          },2000);
          });
        //呼叫AOS Scroll特效
        AOS.init();
})
