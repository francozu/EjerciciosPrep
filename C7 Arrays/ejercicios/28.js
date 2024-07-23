function esArrayNoVacio(arr) {
  // La función recibe un argumento "arr".
  // Comprueba si este argumento es un array y si tiene al menos un elemento.
  // Si es así, retorna true, de lo contrario, retorna false.
  // Tu código:
  // Verifica si el argumento es un array y si tiene al menos un elemento
  if (Array.isArray(arr) && arr.length > 0){
    return true;
  }
  return false;
}
console.log(esArrayNoVacio("hola"));
console.log(esArrayNoVacio(["hola","chau"]));

module.exports = esArrayNoVacio;
//Verificar y repasar todas estas funcion como array,isarray i is.interger etc