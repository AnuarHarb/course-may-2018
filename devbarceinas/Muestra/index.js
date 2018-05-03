(function() {

    'use strict';

    // Menu aside
    const navbarButton = document.querySelectorAll('.navbar__button-mobile');
    const sideMenu = document.querySelector('.sidemenu');
    // Modal
    const modal = document.querySelector('.modal');
    const modalButton = document.querySelectorAll('.modal__button');
    const hideModal = document.getElementsByClassName('hide-modal');
    // Accediendo a inputs
    const nameInput = document.getElementById('name');
    const lastInput = document.getElementById('last');

    for (let element of navbarButton) {
        element.addEventListener('click', () => {
            sideMenu.classList.toggle('sidemenu--hidden');
        });
    } 

    for (const element of modalButton) {
        element.addEventListener('click', () => {
            modal.classList.remove('modal--hidden');
        });
    }

    for (const element of hideModal) {
        element.addEventListener('click', () => {
            modal.classList.add('modal--hidden');
            nameInput.value = '';
            lastInput.value = '';
        });
    }

})();