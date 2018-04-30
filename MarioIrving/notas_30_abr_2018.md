    box-sizing: border-box
    el contenido es el que se ajustaa y no la el elemento contenedor
    normalize tambi�n se puede usar  *{
    }al incio

atom pluggins
emet
pigment
file-icons
linter 2.2.0
atom_beautify

articles elementos espec�fifcos
headers definir el encabezado de la p�gina
footer pie de p�gina
nav barra de navegaci�n, lista de elementos que podamos seleccionar
aside elementos que esten por un lado

todos los contenedores va a incluir un display block se pueden definir tama�os, border padding. Solo uno por linea
element.style{
	margin-left: 20
}

margin: 0 auto (centrar algo)

display-line se ajustar� al contenido que tiene. tama�o del letra de lcontenido se usa para sapns, negritas, it�licas, cosas
alineadas al texto. Se puede agregar padding y margin

margin.inline-block ajusta vario selementos y los vamos a poder agregar por medio text-align pero hay que pon�rselo al padre
regularmente en el padre. Se toman como texto al momento de acomodarse.

se han usado (display, display-inline, display-inline-block)
display toma el espacio entre los elementos y los junta
<div></div>
<div></div>
debe de serar en el contenido
<div></div><div></div>

display flex
Pareciera que es un display-block pero va a camb

justify content
nos dice como se aocdatan los hijos(space-around, space between)

flex-wrap
+justify-content-center
 flex-wrap: wrap;

para poder centrar las cosas verticalmente se debe tener una altura

si queremmos centrar a los hijos align.self: center

se puede ordenar los elementos por clases .div3{
    order: 1;
}

    justify-content: center;
    height: 500px;

GRID
display-grid

explorer aceptaci�n parcial. todos los dem�s navegadores lo aceptan. con safari 10 no lo soportan y FF 55. Para revisar
si las funcionalidades lo soportan los navegadores. podemos consultar la p�gina Can I Use
a display grid se le pueden poner
otras caracter�sticas de flexbox
   grid-template-columns: auto auto auto;
esto es una ventaja sobre bootstrap para no tener las 12 columnas
se puede manejar con porcentaj y columna. nos da medidas nuevas
   grid-template-columns: 200px 100px  100px 100px ;
se pueden usar porcentajes tambi�n

max-content min-content
  grid-template-columns:100px 100px 100px max-content 100px ;

fragment
1fr dividde el tam�o extra en esa columna
    grid-template-columns:100px 100px 100px min-content 100px 1fr;
    grid-template-columns:1fr 1fr 1fr;
    grid-template-columns:2fr 1fr 1fr;
    grid-template-columns:2fr repeat(5,1fr); (repite cinco veces los fragments)
    grid-template-rows: 200px 300px 50px;

Con grid podemos ponerle en qu� columna deseas poner el contenido

features querys
para dar opciones a los navegadores

media query son breakpoints para est�los exspec�ficos
@media screen and (max-witdh:600px){
}
tableta 768px
celular 425px
laptop 1024px
laptop 1400

@media screen and (max-width:600px){
    :root{
        --normal-size: 20px;
    }

    .div3{
        grid-row: 3/4;
        width: 100%;
    }
}

support(display:grid)
