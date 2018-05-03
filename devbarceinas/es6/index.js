// iife - inmidiatly invoke function expresion
(function() {
    'use strict';

    const personList = document.querySelector('.person-list');
    const API_URL = 'datos.json';

    fetch(API_URL)
        .then(response => response.json())
        .then(response => printResponse(response.datos))
        .catch(err => console.log(`Fallaste en la petición ${err}`))

    function printResponse(datos) {
        for (let position in datos) {
            let value = datos[position].nombre
            /**
             * Object.keys devuelve un array cuyos elementos 
             * son strings correspondientes a las propiedades 
             * enumerables que seencuentran directamente en el object.
             */
            personList.innerHTML += `
                <tr>
                    <td>${Object.keys(datos[position])} : ${value}</td>
                </tr>
            `;
        }
    }

})();
