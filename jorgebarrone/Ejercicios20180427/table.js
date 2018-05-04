(function myFunction(){
  'use strict';
  const flnm = 'datos.json';
  const Elem = document.getElementById("Div01");
  fetch(flnm)
    .then(response => response.json())
    .then(response => printResponse(response))
    .catch(err => console.log('Error al leer el archivo Json' + err))
  function printResponse(datos){
    let txtDiv = "<table border=1>"
    for (let prop in datos){
      txtDiv += `<tr>`
      for (let prop2 in datos[prop]){
        console.log(datos[prop][prop2]);
      // console.log(datos[prop]);
      txtDiv += `<td>${datos[prop][prop2]}</td>`
      }
      txtDiv += `</tr>`
    }
    txtDiv += `</table>`
    Elem.innerHTML = txtDiv;
    // console.log(txtDiv);
    // console.log(datos.length)
  }
}());
