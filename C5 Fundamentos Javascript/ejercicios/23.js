function obtenerResto(x, y) {
  // La función recibe dos argumentos llamados "x" e "y" que son números.
  // Retorna el resultado del resto de la division de estos argumentos.
  // Por ejemplo: 
  // 10, 5 ---> 0
  // 16, 5 ---> 1
  // Tu código:
  return x % y;
}
console.log(obtenerResto(72,13));
console.log(obtenerResto(72,26));
console.log(obtenerResto(72,3));
console.log(obtenerResto(72,5));

module.exports = obtenerResto;