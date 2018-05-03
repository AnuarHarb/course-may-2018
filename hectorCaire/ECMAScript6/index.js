//iife  inmidiatly invoke function expression
(function(){
    'use strict';

    const API_URL='data.json';
    const table = document.querySelector('.table');

    fetch(API_URL)
      .then(response => response.json())
      .then(response => printResponse(response.data))
      .catch(err=>console.log('Petition failed ' + err));


    const printResponse=(data) => {
      const header =`<div class="row header">
      <div>Atributo</div>
      <div>Valor</div>
      </div>`;
      let content="";


      for (value of data){
        content+='<div class="row">';
        for (const attribute in value){
            content+=`<div><b>${attribute}</b></div>`;
            content+=`<div>${value[attribute]}</div>`;
          }
        content+='</div>';
      }

      table.innerHTML=header+content;

    }
})();
