
# Día 30 de abril

## CSS

```CSS
    *{
        box-sizing: border-box
    }  
```
El contenido es el que se ajusta y no el elemento contenedor normalize también se puede usar  al incio

##### Elementos html5
* articles elementos específifcos
* headers definir el encabezado de la página
* footer pie de página
* nav barra de navegación, lista de elementos que podamos seleccionar
* aside elementos que esten por un lado

Todos los contenedores van a incluir un display block se pueden definir tamaños, border padding. Solo uno por línea

```css
  element.style{
	margin-left: 20;
  margin: 0 auto; (centra elementos)
}
```
##### display-line
Se ajustará al contenido que tiene. Para el tamaño de letra y del contenido se usa para spans, negritas, itálicas, cosas
alineadas al texto. Se puede agregar padding y margin.

##### margin.inline-block
Ajusta varios elementos y los vamos a poder agregar por medio text-align pero hay que ponérselo regularmente en el padre.
Se toman como texto al momento de acomodarse.

Se han usado (display, display-inline, display-inline-block)

* Display toma el espacio entre los elementos y los junta
<div></div>
<div></div>

* debe de serar en el contenido
<div></div><div></div>

##### display flex
Pareciera que es un display-block pero tiene más propiedades

##### justify content
Nos dice como se acomodan los hijos y tiene los atributos: space-around y space between

##### flex-wrap
```css
 {
   justify-content-center
   flex-wrap: wrap;
}
```
Para poder centrar las cosas verticalmente se debe tener una altura

##### align.self: center;

Si queremmos centrar a los hijos

Se pueden ordenar los elementos por clases

 ```CSS
  .div3{
    order: 1;
  }
      {
    justify-content: center;
    height: 500px;
  }
```

#### GRID
##### display-grid

En el navegador explorer existe aceptación parcial. Todos los demás navegadores lo aceptan. Con safari versión 10 no lo soportan y firefox 55. Para revisar poder revisar si las funcionalidades las soportan los navegadores podemos consultar::after

[can i use](https://caniuse.com/)

Al display grid se le pueden poner otras características de flexbox como:
* grid-template-columns: auto auto auto;
* grid-template-columns: 200px 100px  100px 100px ;
Se pueden usar porcentajes también
Esto es una ventaja sobre bootstrap para no tener las 12 columnas.
Se pueden manejar con porcentajes y columnas. Nos da medidas nuevas

##### max-content min-content
* grid-template-columns:100px 100px 100px max-content 100px ;

###### fragment
1fr dividde el tam�o extra en esa columna
* grid-template-columns:100px 100px 100px min-content 100px 1fr;
* grid-template-columns:1fr 1fr 1fr;
* grid-template-columns:2fr 1fr 1fr;
* grid-template-columns:2fr repeat(5,1fr); (repite cinco veces los fragments)
* grid-template-rows: 200px 300px 50px;

Con grid podemos ponerle en qué columna deseas poner el contenido

espacio entre ellas:
* grid-column-gap:10px;
* grid_row-gap:10px;
* grid-gap:10px;  

Los media query son breakpoints para estílos específicos:

```css
@media screen and (max-width:600px){
    :root{
        --normal-size: 20px;
    }

    .div3{
        grid-row: 3/4;
        width: 100%;
    }
}
```

Medidas de dispositivos
* tableta 768px
* celular 425px
* laptop 1024px
* laptop 1400

support(display:grid)

### Juegos de aprendizaje
* [Flexbox Froggy](https://flexboxfroggy.com/#es)
* [Grid Garden](http://cssgridgarden.com/#es)
* [CSS Diner](https://flukeout.github.io/)

## Revisión ejercicios del viernes 27

## Javascript es un lenguaje prototipado

ECMA 6 utiliza ` ` para embeber las variables o las funciones, esto para evitar pegar cadenas.

```javascript
const myFunction = () => {

	@todo block section

}

```

### For-in y for-of
* for in se utiliza para reccorrer objetos
* for of se utiliza para array maps etc.

Cada vez que se repite el cicclo no se le asigna el nuevo valor de la iteración. Se crea una nueva instancia
y se destruye la anterior.

### .gitignore
Los archivos que se deben excluir:
* dependencias
* logs
* .idea
* archivos generados

### Convenciones para código

* Las variables en ingles
* Los valores pueden ir en el idioma local
* Se utiliza ';' en todas líneas y los if deben llevar complementadas las llaves {}
* Siempre se usará el 'use strict'
* No se permite el código muerto (comentado)
* Las librerías se importan con const
* Las funciones se pueden utilizar con un valor default
* Las variables tienen que ser autodescriptivas request response error event
* Hay que ocupar try-catch para programación síncrona. Try-catcch genera su propio scoope
* Utilizaremos const a menos que vaya a cambiar de valor utilizamos let

### Algunas librerías para resolver el ejercicio
* chalk mostrar información al usuario (colorcitos al usuario)
* yargs importar cosas en la linea de comandos del usuario comander también gestiona esto

```javascript
const object = {};
object.name='';*el objeto es constante pero la propuedad no lo es.
object.name='Hola';
```
