function esPar(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es par.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 14 ---> true
  // 15 ---> false
  // Tu código:
  return num%2 === 0;
}
// Ejemplos de uso:
console.log(esPar(14));   // true
console.log(esPar(15));   // false
console.log(esPar(0));    // true (el cero es par)
console.log(esPar(-2));   // true (los negativos pares también son pares)
console.log(esPar(1));    // false (los impares no son pares)
module.exports = esPar;
