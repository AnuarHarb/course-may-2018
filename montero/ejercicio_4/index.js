(function() {
  'use strict';

const navclickbutton = document.querySelectorAll('.navbar__button_fast');

for(const element of navclickbutton) {
   element.addEventListener('click', () => {
     let numbercicle = 1;
     let numdinamic = Math.floor(Math.random() * (41 - 80)) + 41;
     let myId = setInterval(movebar, numdinamic);

     function movebar () {
       if (numbercicle >= 100) {
          clearInterval(myId);
     } else {
          numbercicle++;
     }
      const avance = document.querySelector('.myBar');
      const number_avance = document.querySelector('.percent');
      number_avance.innerHTML = numbercicle;
      avance.style.width = numbercicle + '%';
      }
   })
 }

})();
