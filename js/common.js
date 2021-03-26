  // HEADER 부분
  const searchEl = document.querySelector('.search');
  const searchInputEl = searchEl.querySelector('input');
  searchEl.addEventListener('click',function(){
    //logic
    searchInputEl.focus();
  })

  searchInputEl.addEventListener('focus',function(){
    //logic
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder','통합검색');
  })

  searchInputEl.addEventListener('blur',function(){
    //logic -- blur 는 focus의 반대개념
    searchEl.classList.remove('focused');
    searchInputEl.removeAttribute('placeholder','');
  });

  // FOOTER
  // this-year Copy right
  const thisYear = document.querySelector('.this-year');
  thisYear.textContent = new Date().getFullYear(); //2021