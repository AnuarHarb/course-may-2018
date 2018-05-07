
(function() {
  // vars
  const INCREMENT = 1;
  const $bar = document.getElementById('myBar');
  const $buttonSpeedSlow = document.querySelector('.button__speed--slow');
  const $buttonSpeedNormal = document.querySelector('.button__speed--normal');
  const $buttonSpeedFast = document.querySelector('.button__speed--fast');

  let scrolled = 0;
  let speed = 0;
  let loader = 0;

// array funtions
  const loadding = () => {
    loader =  setInterval(() => {  // interval with speed value of button
      scrolled += INCREMENT;
      $bar.style.width = scrolled + '%';
      if (scrolled >= 100) { // when the scroll load bar is full clear this set interval
        clearTimeout(loader);
      }
    }, speed);
  }

  // main
  $buttonSpeedSlow.addEventListener('click', () => {  // slow speed
    clearTimeout(loader); // stop current loadding and init this
    scrolled = 0;
    speed = $buttonSpeedSlow.value;
    loadding();
  });

  $buttonSpeedNormal.addEventListener('click', () => { // normal speed
    clearTimeout(loader);
    scrolled = 0;
    speed = $buttonSpeedNormal.value;
    loadding();
  });

  $buttonSpeedFast.addEventListener('click', () => { // fast speed
    clearTimeout(loader);
    scrolled = 0;
    speed = $buttonSpeedFast.value;
    loadding();
  });
})();
