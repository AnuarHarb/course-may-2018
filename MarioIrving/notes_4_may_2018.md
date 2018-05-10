# Web components

El enfoque es crear estructuras para poder atender a problemas en específico que sean reutilizables y desacoplables.

La etiqueta de un componente es su interfaz.

```html
<app-header reveals>
```
(Web components)[https://www.webcomponents.org/]

Ejemplo de componente de la página: paper-header-panel

EL header es como un contenedor. Pueden ser independientes o se pueden acoplar.

### Caraterísticas:
* encapsulado,
* reutilizable,
* extensible/personalizable (se tiene que poder abrir para que pueda ser personalizable),
* independiente

### Tipos de componentes:
* Visuales,
* no visuales (peticiones, guardar el estado)

iron-pages maneja las vistas.
app element--> data components (user data, product data)
iron-pages --> browse view, detail-view, cart-view

Importancia del standard
* que cumpla con las nomraitvas del navegador
* Aprovechar el poder del navegador sin cargar librerias

Un componente necesita:
* customs elements
* shadow DOM
* html imports (en el 3 no se usará)
* html templates

polyfill (pedazo de código para poder cubrir una necesidad del API)

## Custom elements

```html
<basic-element></basic-element>
```
Crea un objeto extendido del HTML element

## Shadow DOM

Un árbol nuevo que se crea y escondido del DOM. Es como si agregaras un scoope al DOM
las clases de afuera no afecatarían ese Shadow DOM.

Youtube está hecho con Polymer.
Para poder visualizarlo es necesario en el navagador en settings activar agente shadow DOM.

En cada elemento tendrá ya elnombre de la clase definida

Los componentes deben estar en diferentes archivos.

## Html templates

Se define una vez y se utiliza en varios lugares

```html
<template></template>
```
Es un código de html que no se va a renderear y sólo va aparecer cuando lo mandamos a llamar.

Se usa para separar también del código javascript

### Ventajas
* Desarrollos pueden tener tiempos más cortos.
* Testing y mantenimiento más fácil
* Tienden a aumentar la calidad del producto

### Framewoks que implementan web components
* Angular
* React
* Vue
* Meteor
* Polymer(librería)

mejor IDE para hacer frontend

* WebStorm
* Visual Studio code
* Atom
* Sublime

## Design System

Es una coleccióon de componetes y estándares para construir aplicaciones.

Son reglas que tendrán los componentes y hagan cohernecia entres ellos. Está enfocado a la
lógica del negocio.

### Partes de un desgin System
* Herramientas
* estándares de código
* componentes
* guías de estilos
* documentación
