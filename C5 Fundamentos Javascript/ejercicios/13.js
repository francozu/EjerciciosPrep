function menosQueNoventa(num) {
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es menor que noventa.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 50 ---> true
  // 91 ---> false
  // Tu código:
  if (num<90){
    return true;
  }else{
    return false;
  }
}
// Ejemplos de uso:
console.log(menosQueNoventa(50));   // true
console.log(menosQueNoventa(91));   // false
console.log(menosQueNoventa(89));   // true
console.log(menosQueNoventa(90));   // false
console.log(menosQueNoventa(100));  // false

module.exports = menosQueNoventa;