window.addEventListener('DOMContentLoaded',function(){
//start

  // lodash 에서 제공하는 _.throttle메소드를 
  // 사용하여 이벤트가 우르르 실행되는 것을 방지
  const toTopEl = document.querySelector('#to-top');
  const badgeEl = document.querySelector('header .badges');
  window.addEventListener('scroll', _.throttle(function(){
    if( window.scrollY > 500 ){
      //배지 숨기기
      // gsap.to(요소, 지속시간, 옵션);
      gsap.to(badgeEl, .6, {
        opacity:0,
        display:'none'
      });
      // to top 버튼 보이기
      gsap.to(toTopEl, .2, {
        x:0
      });
    } else{
      //배지 보이기
      gsap.to(badgeEl, .6, {
        opacity:1,
        display:'block'
      });
      //to top 버튼 숨기기
      gsap.to(toTopEl, .2, {
        x: 100
      });
    }
  }, 300));

  // to-top 누르면 페이지 상단으로 애니메이션
  toTopEl.addEventListener('click',function(){
    gsap.to(window, .7, {
      scrollTo: 0
    })
  })

  // 비주얼 이미지 순차적으로 등장 이벤트
  const fadeEls = document.querySelectorAll('.visual .fade-in');
  fadeEls.forEach(function(fadeEl,index){
    // gsap.to(요소, 지속시간, 옵션(객체형식))
    gsap.to(fadeEl, 1, {
      // index=0은 *0.7해도 0 이다.
      delay:(index+1)*.7,
      opacity:1,
    });
  });  


  // swiper 슬라이드 이벤트 Swiper(선택자, 옵션)
  new Swiper('.notice-line .swiper-container',{
    direction: 'vertical', 
    autoplay: true,
    loop: true
  });

  // promotion swiper 이벤트
  new Swiper('.promotion .swiper-container',{
    //horizontal = 수평
    // direction: 'horizontal',
    slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드 가운데 보이기
    loop:true,
    autoplay:{
      delay: 5000
    },
    pagination:{
      el:'.promotion .swiper-pagination', // 페이지 번호 요소 선택자
      clickable: true // 페이지 번호 요소 제어 가능 여부
    },
    navigation:{
      prevEl:'.promotion .swiper-prev',
      nextEl:'.promotion .swiper-next'
    }
  });

  new Swiper('.awards .swiper-container',{
    slidesPerView : 5,
    spaceBetween: 30,
    autoplay: true,
    loop: true,
    navigation:{
      prevEl:'.awards .swiper-prev',
      nextEl:'.awards .swiper-next'
    }
  })


  const promotionEl = document.querySelector('.promotion');
  const promotionToggleBtn = document.querySelector('.toggle-promotion');
  let isHidePromotion = false;
  promotionToggleBtn.addEventListener('click',function(){
    isHidePromotion = !isHidePromotion
    if(isHidePromotion){
      // 숨김 처리!
      promotionEl.classList.add('hide');
    } else {
      // 보임 처리!
      promotionEl.classList.remove('hide');
    }
  });


  // 범위 랜덤 함수(소수점 2자리까지)
  function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }


  function floatingObject(selector, delay, size){
    // gsap.to(요소, 지속시간, 옵션)
    gsap.to(selector, random(1.5, 2.5), 
    {
      y: 20,
      repeat:-1,
      yoyo:true, // yoyo : 시행된 애니메이션을 반대로 시행되게끔 돕는다.
      ease: Power1.easeInOut,
      delay:random(0, delay)
    });
  };  
  floatingObject('.floating1', 1, 15);
  floatingObject('.floating2', .5, 15);
  floatingObject('.floating3', 1.5, 20);

  const spyEls = document.querySelectorAll('section.scroll-spy');
  spyEls.forEach(function(spyEl){
    new ScrollMagic
      .Scene({
        triggerElement: spyEl, //보여짐 여부를 감시할 요소들
        triggerHook : .8,
      })
      .setClassToggle(spyEl,'show')
      .addTo(new ScrollMagic.Controller());
  });

//end
})
