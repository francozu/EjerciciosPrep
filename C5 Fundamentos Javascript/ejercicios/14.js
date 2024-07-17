function mayorQueCincuenta(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es mayor que cincuenta.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 51 ---> true
  // 15 ---> false
  // Tu código:
  return num>50;
}
// Ejemplos de uso:
console.log(mayorQueCincuenta(51));   // true
console.log(mayorQueCincuenta(15));   // false
console.log(mayorQueCincuenta(50));   // false
console.log(mayorQueCincuenta(100));  // true
console.log(mayorQueCincuenta(-5));   // false

module.exports = mayorQueCincuenta;
