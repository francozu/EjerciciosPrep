function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
   // Usa map para aplicar toUpperCase a cada string del arreglo
   return array.map(function(elemento) {
    // Verifica si el elemento es una cadena antes de convertirlo
    if (typeof elemento === 'string') {
      return elemento.toUpperCase();
    }
    // Retorna el elemento sin cambios si no es una cadena
    return elemento;
  });
}
const array = ['hola', 'mundo', 123, 'javascript'];
console.log(convertirStringAMayusculas(array)); 

module.exports = convertirStringAMayusculas;
//repasar*