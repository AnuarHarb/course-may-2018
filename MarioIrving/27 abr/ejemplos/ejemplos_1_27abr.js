'use strict';

/*iife
inmediatly onvoe
(function() {
  'use strict';

}());
*/

//ejemplo1
// (function($) {
//   'use strict';
//
// }(jquery));
//
// //ejemplo2
// (function(window) {
//   'use strict';
//   window
// }(window));


(function() {
  'use strict';
//llamar al elemnteo mediante el tag y primer elemento que se encuentra

  const article = document.querySelector('.name-list');
  const API_URL = 'datos.json'

  fetch(API_URL)
  .then((response)=> response.json())
  .then (response => printResponse(response.datos))
  .catch((err)=>console.log('Fallaste en la peticion' + err)

  function printResponse(response){
    article.innerHTML = datos[0].nombre

  /*
  TEMPLATES
      article.innerHTML = '
        <h1>Mi nombre es ${ datos[0].nombre}</h1>
      '

  */
  }
  // article.sytle.color="red";

  // document.querySelector('.name-list')

  // const articles = document.querySelectorAll('.name-list');
  /*La recomendación es que estos elementos se guarden en una const y tambien
  guardarlas en al inicio porque al parsear hace una pausa y se va al DOM
  */

  //comandos para acceder a elementos del DOM
  // document.getElementsByClassName('');
  // document.getElementsById('');
  // document.getElementsByTagName('');





}());
