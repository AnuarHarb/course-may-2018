(function() {
  'use strict';

const article = document.querySelector('.name-list');
const API_URL = 'datos.json';

fetch(API_URL)
.then(response => response.json())
.then(response => printResponse(response.datos))
.catch(err => console.log('error en el proceso' + err))


function printResponse(datos) {
  let tabla = '<table border="1">'+
  '<tr>'+
  '<td><strong>ID</strong></td>'+
  '<td><strong>Nombre</strong></td>'+
  '</tr>';

  for (let i = 0; i < datos.length; i++) {
    tabla+= '<tr>'+
    '<td>'+ datos[i].ID + '</td>'+
    '<td>'+ datos[i].nombre + '</td>'+
    '</tr>';
  }

  tabla+= '</table>';
  article.innerHTML = tabla
}

})();
