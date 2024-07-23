function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  if (numeros.length === 0 || numeros.length < 2) {
    return null;
  }
  
  // Ordena el arreglo de menor a mayor
  numeros.sort(function(a, b) {
    return a - b;
  });
  
  // Recorre el arreglo buscando el número faltante
  for (var i = 0; i < numeros.length - 1; i++) {
    if (numeros[i + 1] - numeros[i] > 1) {
      return numeros[i] + 1; // Devuelve el número faltante
    }
  }
  
  // Si no se encontró ningún número faltante
  return null;
}
console.log(encontrarNumeroFaltante([2,3,4,6]));
console.log(encontrarNumeroFaltante([1,2,4,6]));

module.exports = encontrarNumeroFaltante;
//REPASAR Y COMPERENDER BIEN PORQUE ES DIFICIL DE ENTENDER 