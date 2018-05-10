
26/04/2018

#Git Hub

#### Que es Git?
Es un sistema de control de versiones no centralizado para trabajar con metodologias agile.

#### Que paltaformas existes para Git?

  - Git Hub
  - Git Lab
  - Bit Bucket

####  Git Hub
Es la plataforma que se utilizara en el curso y es gratuita.

####  Git Lab
Es una paltaforma con costo.

####  Bit Bucket
Es una plataforma con costo y es la que se ocupa en BBVA.

####  FUNCIONAMIENTO DE LA PALATAFORMA GIT
  - Dos capas
  - Tres capas


>  Dos capas:
Existe un repositorio web o local que se le conoce como `remote`, y un equipo local o varios que envia informacion al repositorio por la instrucción `commit` e importa la información del servidor con la instrucción `push`.

> Tres capas:
Existe un repositorio web o local que se le conoce como `remote`, y un equipo local o varios que solo pueden solicitar el almacenado o actualizacion de información por medio de un pullrequest, la cual el administrador del servidor dara el VoBo en base a sus politicas de desarrollo.

####  Trabajo con Ramas
Las ramas o branch son las carpetas madre que van a contener los nuevos datos a resguardar o contiene los datos almacenados con los que se va a trabajar.
Ejemplo de ramas:
- <Produccion>
- <QA>
- <Desarrollo>

####  Que es un Fork?
El Fork se le conoce como un repositorio donde copias una rama o ramas del servidor web y en este que se encuentra en tu equipo local tue eres el owner y tienes todos los permisos para manipular la información, y no afectas los datos productivos.
Para actualizar los datos del servidor productivo con los cambios de nuestro Fork es necesario generar un pull request.

####  Pull Request.
Se genera un requerimiento al administrador o encargado del server productivo para que autorize los cambios o nos de comentarios sobre el codigo a subir.
Las politicas y estadares del codigo o desarrollo son propias de cada administrador de la configuración.

#### Comandos git para usar en la consola.
Cuando nos referimos a la consola es por medio de instrucciones similares a unix y todo es en texto aunque tambien se puede ocupar en lugar de la consola en el caso de gitHub la interface grafica que esta en la web.
| Comando en consola | Descripción de lo que realiza|
| ------ | ------ |
| pwd | me indica la ruta donde me encuentro. |
| cd |  me lleva a mi ruta raiz. |
| cd carpeta | abre una carpeta |
| cd .. | me saca del directorio de donde me encuetro me pasa al antencesor. |
| clear | borra la pantalla |
| touch | crea archivos touch archivo.txt |
| rm | borra archivo rm archivo.txt |
| mkdir | crea un drirectorio o carpeta mkdir carpeta_new |
| open | abre archivo solo sirve en sistema operativo linux  |
| atom | abre un archivo en atom atom name_archivo.txt |
| notepad | abre el archivo en notepad de windows notepad archivo.txt |
| rm -rf | borra carpeta con todo y archivos. |
| git status | Muestra el estatus del repositorio que nos encontremos respecto a mos movimientos realizados en nuestros archivos. |
| git remote -v | Muestra los repositorios remotos |
| git remote add | agrega un reposito remoto ejemplo: git remote add http://www.. |
| git clone | clona repositorio web en git local. se puede clonar una rama completa o solo una carpeta ejemplo: git clone http://www...  |

#### Paso a paso como subir al servidor web, actualizar datos del servidor web y generar el pull request.

una vez que tienes una carpeta con archivos en tu git local :

1.- veo el estatus de mis archivos lo que me falta subir:

`git status` 

2.- Agrego la carpeta a subir o archivo segun sea el caso en este ejemplo la carpeta se llama --> ejercicio_2 
-- si quiero subir todo es con un . en lugar del nombre de la carpeta o el archivo

`git add ejercicio_2`

3.- Verifico estatus paso opcional 

`git status` 

4.- genero el commit con un comentario entre comillas ""

`git commit -m "subo ejercicio 2"`

5.- Lo subo a la web, donde origin es la web y master es mi local

`git push origin master`

6.- Ingreso a git web con usuario y password

`https://github.com/AnuarHarb/course-may-2018`

7.- Genero la solicitud para que el profesor verifique mis archivos

>Selecciono la opcion `"Pull requests"` --> se encuentra en la parte superior de la pagina la opcion 3 del menu.
Presiono el boton con la leyenda `"New pull request"` --> se encuentra en la esquina superior derecha.
dejo la opcion del lado izquierdo al profesor que es el que verifica y en el combo del lado derecho elijo mi repositorio.
anexo un comentario al request y presiono el boton de envio.

8.- Traerme todos los repositorios del git web actualizacion masiva:
`git pull upstream master`


