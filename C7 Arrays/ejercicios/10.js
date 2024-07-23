function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  // Itera a través del arreglo
  for (let i = 0; i < array.length; i++) {
    // Verifica si el elemento es una cadena y tiene más de 5 caracteres
    if (typeof array[i] === 'string' && array[i].length > 5) {
      // Retorna el primer string con más de 5 caracteres
      return array[i];
    }
  }

}
const array = ['apple', 'banana', 'cherry', 'watermelon'];
console.log(obtenerPrimerStringLargo(array)); 

module.exports = obtenerPrimerStringLargo;
