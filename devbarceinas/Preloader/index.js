(function() {

    'use strict';

    const move = document.getElementById('move');
    const fat = document.getElementById('fat');
    const slow = document.getElementById('slow');
    const element = document.getElementById('myBar');

    move.addEventListener('click', () => {
        let randomVelocy = Math.round((Math.random() * 50) + 1);
        let width = 1;
        let id = setInterval(() => {
            if (width >= 100) {
                clearInterval(id);
                move.disabled = false;
                move.innerHTML = "Cargar";
            } else {
                move.disabled = true;
                move.innerHTML = "Cargando...";
                width++; 
                element.style.width = `${width}%`; 
            }
        }, randomVelocy);
    }); 

    fat.addEventListener('click', () => {
        let width = 1;
        let id = setInterval(() => {
            if (width >= 100) {
                clearInterval(id);
            } else {
                width++;
                element.style.width = `${width}%`;
            }
        }, 3);
    });

    slow.addEventListener('click', () => {
        let width = 1;
        let id = setInterval(() => {
            if (width >= 100) {
                clearInterval(id);
            } else {
                width++;
                element.style.width = `${width}%`;
            }
        }, 40);
    });

})();


