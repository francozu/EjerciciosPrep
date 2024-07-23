function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  if (array.length === 0) {
    return true;
  }

  // Toma el primer elemento del arreglo para comparar
  const primerElemento = array[0];

  // Recorre el arreglo a partir del segundo elemento
  for (let i = 1; i < array.length; i++) {
    // Si encontramos un elemento que no es igual al primer elemento, retorna false
    if (array[i] !== primerElemento) {
      return false;
    }
  }
  return true;
}
console.log(todosIguales([1, 1, 1, 1])); // Salida: true
console.log(todosIguales([2, 2, 3, 2])); // Salida: false
console.log(todosIguales([]));            // Salida: true (considerado como todos iguales)
console.log(todosIguales([5]));           // Salida: true (un solo elemento)
module.exports = todosIguales;
