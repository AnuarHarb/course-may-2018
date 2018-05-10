# Repaso

## Git
Los repositorios que están en el internet o simplemente fuera de la computadora
los llamamos remote.

Se trabaja en un esqueema de tres capas:
1. primera capa upstream
2. segunda capa fork
3. tercera capa local

El repositorio upstream es intocable, es decir nadie tiene derecho a cambiarlo pero solo a través de un pullrequest.
Upstream es el master

Para el caso de las clases AnuarHarb/course-may-2018 es el upstream y los accesos deben estar bloqueados.

En el desarrollo los ambientes productivos deben salir de aqui. Sólo el arquitecto debe manejar el repositirio quien debe tener amplios conicmientos técnicos sobre git y sobre programación, debe de saber de calidad.

Git es un sistema de versiones no centralizado. Los comandos de git se utilizan en el 80% de los repositorios del mercado.

Un ejemplo de sistema de versiones versionado es un Google docs

Una recomendación sería que no se hagan muchas branches. Algunas pueden ser:

| branches  | Usos                                                          |
| ----------|:-------------------------------------------------------------:|
| master    |                                                               |
| qa        | se ocupa para prubas funcionales, de usabilidad y diseño      |
| develop   | pruebas unitarias, linteos, protocolos de seguridad, etc.     |  


Podríamos decir que el fork es un repositorio copia. Es un clon y cada usuario es propietario de esa copia.
En el fork podemos tener las ramas que nostros queramos.

Ejemplo de fork:
mariomorales/course-may-2018

Puedes configurar restricciones a tu fork para que no le den commit. Se puede realizar en
repositio/settings/security/branches.

Se puede clonar a través de ssh o http
vía ssh genera un hash y clave (fast frase). Por ejemplo cuando veamos git@github es que es vía ssh.

En el repositorio local las ramas son más pequeñas.De local a fork se llaman igual las branches.

| comando                        | Usos                                       |
| -------------------------------|:------------------------------------------:|
| git branch [branch mame]       | Para generar una branches                  |
| git checkout [branch name]     | para cambiar el puntero a esa rama         |
| git checkout -b [branch name]  | comando para dos en funcionales            |  
| git merge                      | para unirlas las branches                  |
| git remote --verbose           | despliega todas las ramas                  |  
| git remote add [alias] [url]   | para agregar un remote                     |
| git branch -v                  | para agregar un remote                     |
| git branch -d [rama]           | para borrar ramas                          |
| git branch -D [rama]           | forzar el borrado de una rama              |
| git branch [rama]              | cambiarse a determinada rama               |
| git checkout -b [rama]         | hace que el apuntador se cambie a esa rama |
| git reset                      | para hacer unStage                         |
| git log -n 1                   | para ver el útlimo commit                  |

## Pasos para subir o hacer cambios al respositorio

### Paso 1
 * Realizar un pull al upstream
  * git pull upstream master (master es el branch)

Se descargan todos los cambios, si existen conflictos tienes que editar el archivo.


head
"= = = = = = ="
azul es nuestro código
"= = = = = ="
codigo de donde hiciste el pull
"= = = = = = = = = = ="
código hash


Tienes que borra el head los signos de igual y el hash y modificarlo de la mejor manera.

### Paso 2
* git add --all ó
* git add .

### Paso 2.5
* Realizar un pull del upstream
* git pull upstream master

### Paso 3
* git add
* git commit

### Paso 4
* git push origin develop

## Generales
* Nunca nombrar los remote con slash ni con nombre del remote ya que ocasionará confusión en el Git.
* Para separar nombres puedes ocupar Camel case o dash case.
 - git branch feature/login
* Las branches se deben crear y nombrar con base en la actividad o funcionalidad
* No hacer varias ramas y las que ya no se utilizen
* Un git pull es lo mismo que un git fetch y git merge
* Para borrar los cambios se puede ocupar git checkout y el nombre del archivo
* git buscar pro Git
* git login se genera a través del commit y manda a modo "vi" para editarlo
* (shift insert en bash para pegar en la terminal)
* Antes de darle verificar qué archivos se están subiendo verificar en la página el código nuevamente es el último filtro
* A manera de convención en la clase vamos a utilizar:
 - git commit -m "fix(*): merge conflict"*
* para hacer los cambios no es necesario abrir otro pull reguest solo hacer los cambios solo pull

 editar el archivo para no subir código innecesario
 .gitignore
 * *.txt*
 * .idea/ (para indicar que es un directorio)
 * **/node_modules/ (lo que sea)**
 * *.log*

Markdown es el lenguaje de maquetado

Si vemos algpun cambio lo modifiamos y hacemos otro commit

Para aceptar los cambios en ATOM puedes hacer tres cosas:
1. Pulsar en el botón "use me" del código que tengo
2. Pulsar en el botón "use me" del código que propuesto
3. Realizar una adaptación con los 2 códigos (no recomendable, lo mejor es comentarlo con el desarrollador)

Si alguien identó algo diferente a ti debes resolverlo con ese programador.

Podrías utilizar win merge resoluciones de conflictos

## Práctica

* git checkout master
* git branch -d pantallaAlta
* git branch -v
* touch index.js
* atom index.js
* git status
* git add index.js
* git commit -m "algo"
* git log -n 1 (quiero el útlimo commit)
* git checkout master
* git push origin validacion
* git merge validacion
* Te vas al repo destinatario y le das merge para aceptar los cambios
* git push origin master
* Ambos remotes están en el fork
* git pull upstream master
* git status
* atom index.js
* git status
* git add index.js
* git commit -m "fix(*): merge conflict"*
* git pull upstream
* git push origin validacion
* De mi repositorio va a salir mi pullrequest
* pestaña pullrequest-> new pull pullrequest
* cambiamos master a validacion
* git checkout master
* git push upstream master
* git chekout validacion (modifica el archivo)
* git remote remove origin
