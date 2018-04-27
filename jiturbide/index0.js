(function() {

    "use strict";
	console.log("Inicio del script");

    const API_URL = 'datos.json';

    const control = document.querySelector("#article0");

     fetch('datos.json')
       .then(response => response.json())
       .then(response => printResponse(response))
       .catch(err => console.log('Fallo la peticion ' + err));

	function printResponse(response) {
		 	// console.log(response);
		 	let theHtml = "";
		 	let theRow = "";
		 	
            theHtml = "<table style='width:100%'><tr> <th>Concepto</th> <th>Valor</th> </tr>";

            for(let key in response.datos) {
                console.log(response.datos[key]['nombre']);

                theRow = "<tr><td>Nombre</td><td>" + response.datos[key]['nombre'] + "</td></tr>";
                theHtml = theHtml + theRow;
            }
            
            theHtml = theHtml + "</table>";

		 	control.innerHTML = theHtml;
	}


})();


// const article1 = document.querySelector('.name-list');
// const article1 = document.querySelector('#myId');
// const article2 = document.queryElementsByClassName('className');
// const article3 = document.querySelector();
// const article2 = document.queryElementById('className');
// const article2 = document.queryElementsByTagName('className');

// article1.style.color = "red";


//iife Immediately invoke function expression
// //(function() {
//   'use strict';}
//
// }());


//Comillas francesas //``

// article.innetHTML = `<h4>Mi nombre es ${datos[0].nombre}</h4>`
