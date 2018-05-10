function formatDate(userDate) {

  const d = new Date(userDate);
  const anio =  (d.getFullYear()).toString();
  const mes = (d.getMonth()+1).toString();
  const dia = (d.getDate()).toString();

  if (mes.length === 1 && dia.length === 1){
    return anio + '0' + mes + '0' + dia;
  } else if( mes.length === 1){
    return anio + '0' + mes + dia;
  } else if(dia.length===1){
    return anio + mes + '0' + dia;
  } else {
    return anio + mes + dia;
  }

  return true;
}
console.log(formatDate("1/1/2014"));
