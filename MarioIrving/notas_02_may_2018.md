# CSS cont

Para  poder realizar la práctica se va a utilizar BEM y BOX_ELEMENT_MODIFIER

Se siguen algunas convenciones como:
* contenedor
* elemento
* modificador

por ejemplo: stats_item-title--green

## Tips
* Una buena practica para las navbar es darle una altura definida
* Dejar un espacio entre los selectores
* No poner totalmente blancos y negros
* A los botones les sirve mucho tener un padding
* Ordenar las propiedades ya se por:
  - orden alfabético
  - por orden de ejecución
* Las imagenes siempre deben ponerse dentro de un contenedor:

```html
  <picture class"programs__card programs__card-background--front">
    <img class="programs__image" src="img/Academy.png" alt="academy">
  </picture>
```
* Usar la etiqueta alt facilita a los programas con limitaciones visuales y también nos indica
el nombre de la imagen cuando no se carga adecuadamente
* Para las imagenes de background, también es conveniente ponerle una altura definida
* Como usamos la metodología BEM, no se usan tags

```css
 .cover{
   background-size: contain;
   background-size: cover;
   background-repeat: no-repeat;
   background-image: radial-gradient(red, yellow);
 }
```
