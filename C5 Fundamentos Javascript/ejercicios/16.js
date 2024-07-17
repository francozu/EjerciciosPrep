function esImpar(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es impar.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 15 ---> true
  // 14 ---> false
  // Tu código:
  return num%2!==0;
}
// Ejemplos de uso:
console.log(esImpar(15));   // true
console.log(esImpar(14));   // false
console.log(esImpar(0));    // false (el cero no es impar)
console.log(esImpar(-1));   // true (los negativos impares también son impares)
console.log(esImpar(2));    // false (los pares no son impares)

module.exports = esImpar;