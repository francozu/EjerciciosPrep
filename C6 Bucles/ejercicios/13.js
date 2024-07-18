function esEntero(num) {
  // Retorna true si "num" es un entero, ya sea positivo, negativo o cero.
  // Ejemplo: 0.8   ---> false
  // Ejemplo: 1     ---> true
  // Ejemplo: (-10) ---> true
  // De lo contrario, retorna false.
  // Tu código:
  return Number.isInteger(num);
  
}
console.log(esEntero(0.8));   // Output: false
console.log(esEntero(1));     // Output: true
console.log(esEntero(-10));   // Output: true
console.log(esEntero(3.14));  // Output: false
console.log(esEntero(0));     // Output: true

module.exports = esEntero;
