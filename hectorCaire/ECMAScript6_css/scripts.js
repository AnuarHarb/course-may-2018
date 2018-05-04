(function(){
  'use strict';

  const mainButton=document.querySelector('.main__button');
  const progress=document.querySelector('.main__progress-bar--progress')
  const modal=document.querySelector('.modal');
  const formButton=document.querySelector('.form__button');
  const speedRadios=document.querySelectorAll('.speed__form__radio');
  let speedRadio=document.querySelector('.speed__form__radio:checked');

  const showModal = () => {
    for (const radio of speedRadios){
        progress.classList.remove(radio.value);
    }
    progress.classList.remove('main__progress-bar--full');
    modal.classList.toggle('modal--hidden');
  }


  const fillProgress = () =>{
    speedRadio=document.querySelector('.speed__form__radio:checked');
    progress.classList.add(speedRadio.value);
    modal.classList.toggle('modal--hidden');
    progress.classList.add('main__progress-bar--full');
  }

  mainButton.addEventListener('click',showModal);

  formButton.addEventListener('click', fillProgress);

})();
