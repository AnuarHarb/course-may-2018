(function() {
  'use strict';

  const navbarButton = document.querySelectorAll('.navbar__button-mobile');
  const sidemenu = document.querySelector('.sidemenu');
  const modal = document.querySelector('.modal');
  const modalButton = document.querySelectorAll('.modal__botton');
  const hideModal = document.getElementsByClassName('hide-modal');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');


  for(const element of navbarButton) {
    element.addEventListener('click', () => {
      sidemenu.classList.toggle('sidemenu--hidden');
    })
  }

  for(const element of modalButton) {
    element.addEventListener('click', () => {
      modal.classList.remove('modal--hidden');
    })
  }

  for(const element of hideModal) {
    element.addEventListener('click', () => {
      modal.classList.add('modal--hidden');
      nameInput.value = '';
      emailInput.value = '';
    })
  }

})();
