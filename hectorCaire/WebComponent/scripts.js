(function(){
  'use strict';

  const mainButton=document.querySelector('.main__button');
  const mainButtonFast=document.querySelector('.main__button--fast');
  const mainButtonSlow=document.querySelector('.main__button--slow');
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


  const fillProgress = (speed) =>{
    let progressBar=document.querySelector('progressbar-component');
    progressBar.speed=speed;
    //progressBar.filled=true;
  }

  mainButton.addEventListener('click',()=>{
    fillProgress('regular');
  });
  mainButtonFast.addEventListener('click',()=>{
    fillProgress('fast');
  });
  mainButtonSlow.addEventListener('click',()=>{
    fillProgress('slow');
  });

})();
