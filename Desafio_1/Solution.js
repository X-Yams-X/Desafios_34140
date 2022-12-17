//Variable Edad
let age = prompt ('¿Cuántos años tienes?');
//
if(age <= 16){
  alert("No puede obtener la licencia de conducir")
}else{
  if(age == 17){
    alert("Puede obtener la licencia de conducir con autorización de los padres o tutores y realizando las pruebas teoricas y prácticas")
  }else{
    alert("Puede obtener la licencia realizando las pruebas teoricas y prácticas")
  }
}