function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
   // Usa map para crear un nuevo arreglo con cada elemento multiplicado por su índice
   return array.map(function(elemento, indice) {
    return elemento * indice;
  });
}
const numeros = [10, 20, 30, 40];
console.log(multiplicarElementosPorIndice(numeros));

module.exports = multiplicarElementosPorIndice;
