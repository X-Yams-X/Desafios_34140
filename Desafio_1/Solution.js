//Variable Edad
let age = prompt ('¿Cuántos años tienes?',100);
//Validar que sea un Numero
//let ageFormat = parseInt(age, 10);
if(age <= 16){
  alert("No puede obtener la licencia de conducir");
}else{
  if(age == 17){
    alert("Puede obtener la licencia de conducir con autorización de los padres o tutores y realizando las pruebas teoricas y prácticas");
  }else{
    if (age >= 18 && age <= 65){//Edad máx para sacar licencia en Chile
       alert("Puede obtener la licencia realizando las pruebas teoricas y prácticas");
      }else{
        if(age>66){
          alert("Su edad es mayor a la edad limite");
        }else{
          alert("Debe Ingressar una edad válida");
        }
      }  
  }
}