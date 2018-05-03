# Actualizar el DOM con datos json mediante fetch

### Los pasos a seguir son los siguientes:
 * hacer un fetch a los datos que queremos insertar con **fetch(URL)**
 * dos obtener el resultado y pasarlo aun json con **.then(response => response.json)**
 * crear una funcion para insertar en el DOM los valores con la función **for(prop in obj){}**
 * concatenar los valores en una variable
 * por ultimo actualizar el DOM con **elemet.innerHTML = `${concat}`**
