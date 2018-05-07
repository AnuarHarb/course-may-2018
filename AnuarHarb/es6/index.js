(function() {
  'use strict';

  const article = document.querySelector('.name-list');
  const API_URL = 'datos.json';

  fetch(API_URL)
    .then(response => response.json())
    .then(response => printResponse(response.datos))
    .catch(err => console.log('Fallaste en la petición ' + err))


  function printResponse(datos) {
    article.innerHTML = `
      <h1>Mi nombre es ${datos[0].nombre}</h1>
    `
  }

})();
