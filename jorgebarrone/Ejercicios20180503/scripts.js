(function() {
  'use strict';

  const normalButton = document.querySelectorAll('.normal__button');
  const slowButton   = document.querySelectorAll('.slow__button');
  const fastButton   = document.querySelectorAll('.fast__button');

  for(const element of normalButton) {
    element.addEventListener('click', () => {
      let myProgress = 1;
      let myRandom = Math.floor(Math.random() * (20 - 40)) + 20;
      let myId = setInterval(frame, myRandom);
      element.classList.add('normal__button--disabled');
      function frame() {
        if (myProgress >= 100) {
          clearInterval(myId);
          element.classList.remove('normal__button--disabled');
        } else {
          myProgress++;
        }
        const myProgressBar = document.getElementById('myBar');
        myProgressBar.style.width = myProgress + '%';
        myProgressBar.innerHTML = myProgress * 1  + '%';
      }
    })
  }

  for(const element of slowButton) {
    element.addEventListener('click', () => {
      let myProgress = 1;
      let myRandom = Math.floor(Math.random() * (41 - 80)) + 41;
      let myId = setInterval(frame, myRandom);
      element.classList.add('normal__button--disabled');
      function frame() {
        if (myProgress >= 100) {
          clearInterval(myId);
          element.classList.remove('normal__button--disabled');
        } else {
          myProgress++;
        }
        const myProgressBar = document.getElementById('myBar');
        myProgressBar.style.width = myProgress + '%';
        myProgressBar.innerHTML = myProgress * 1  + '%';
      }
    })
  }

  for(const element of fastButton) {
    element.addEventListener('click', () => {
      let myProgress = 1;
      let myRandom = Math.floor(Math.random() * (0 - 20)) + 0;
      let myId = setInterval(frame, myRandom);
      element.classList.add('normal__button--disabled');
      function frame() {
        if (myProgress >= 100) {
          clearInterval(myId);
          element.classList.remove('normal__button--disabled');
        } else {
          myProgress++;
        }
        const myProgressBar = document.getElementById('myBar');
        myProgressBar.style.width = myProgress + '%';
        myProgressBar.innerHTML = myProgress * 1  + '%';
      }
    })
  }


})();
