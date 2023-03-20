$(function(){
    /**
     * 
     * 
     *  메인 슬라이드 소스
     * 
     */
    var swiper = new Swiper(".main-slide", {
        slidesPerView: 1.1,
        spaceBetween: 30,
        loop: true,
        centeredSlides:true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });



      
      /**
       * 
       * 
       * New
       * 
       * 
       */

       var swiper = new Swiper(".new-slide", {
        loop:true,
        slidesPerView: 4,
        spaceBetween: 30,
        speed:2000,
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
        navigation: {
          nextEl: ".sc-new .next",
          prevEl: ".sc-new .prev",
        },
      });


      /**
       * 
       * 
       * 
       * 
       * 
       */
      var swiper = new Swiper(".best-slide", {
        loop:true,
        slidesPerView: 3,
        spaceBetween: 30,
        speed:2000,
        scrollbar: {
          el: ".sc-best .swiper-scrollbar",
          hide: false,
        },
        navigation: {
          nextEl: ".sc-best .next",
          prevEl: ".sc-best .prev",
        },
        
        
      });


      $('.group-nav').hover(function(){
        $('.all-nav').stop().slideDown();
      },function(){
        $('.all-nav').stop().slideUp();
      })



})