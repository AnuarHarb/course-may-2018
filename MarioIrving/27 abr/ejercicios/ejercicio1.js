
(function() {
  'use strict';
  const td = document.querySelector('.datos-list');
  const API_URL = 'datos.json';

  fetch(API_URL)
  .then(response => response.json())
  .then (response => printResponse(response.datos))
  .catch(err => console.log('Fallaste en la peticion' + err))

  function printResponse(response){
    // let myArray=[]
    for ( let i=0; i<response.length; i++) {
        // myArray.push(`<td>${response[i].name}</td>`)
        td.innerHTML = `<td>${response[i].name}</td>`
    }

  }
})();
