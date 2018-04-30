//iife  inmidiatly invoke function expression
(function(){
    'use strict'; //Establece el uso estricto de jScript

    const API_URL='datos.json';
    const tabla = document.querySelector('.tabla');

    fetch(API_URL)
      .then(response => response.json())
      .then(response => printResponse(response.datos))
      .catch(err=>console.log('Fallaste en la pentición ' + err));


    function printResponse(datos){
      let encabezado ="";
      let contenido=""

      encabezado=`<div class="row encabezado">
      <div>Atributo</div>
      <div>Valor</div>
      </div>`


      datos.forEach((value,index)=>{
        contenido+='<div class="row">';
        let atributo;
        console.log(value);
        for (atributo in value){
            contenido+=`<div><b>${atributo}</b></div>`;
            contenido+=`<div>${value[atributo]}</div>`;
        }
        //contenido+=`<div>${index}</div`;
        contenido+='</div>';
      });
      tabla.innerHTML=encabezado+contenido;

    }
})();
