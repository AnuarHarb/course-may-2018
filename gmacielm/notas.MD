# NOTAS GIT 
___

### Este archivo contendrá las notas correspondientes al curso de POLYMER en su parte de GIT

git commit -m "Mensaje correspondiente al commit que se está realizando"

git add nombre del o los archivos que se quieren marcar para un commit posterior 
git remote add nombre_repositorio_remoto
 Exam : git remote add upstream https://github.com/AnuarHarb/course-may-2018.git

git.ignore es para listar los archivos que no queremos que se suban al repositorio

git push para enviar/subir contenido (aquello afectado por el commit más reciente) al repositorio remoto : git push origin master 
git pull para obtener hacia el repositorio local los cambios del commit más reciente realizado en el repositorio remoto: git pull origin master

* Los dos anteriores pueden usar la opción -f para que se realicen independientemente de si hay conflictos o no

fork es para clonar/copiar un repositorio y queda como un repositorio independiente pero aún relacionado al repositorio original al cuál 
se le pueden proponer  cque acepte cambios trabajados en el repositorio creado mediante el fork

 git clone https://github.com/gmacielm/course-may-2018.git 

 Para ver a que repositorios remotos está ligado el repositorio local actual : git remote -v  Es

