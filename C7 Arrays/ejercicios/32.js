function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  
  // Comprobar si el texto  es un palíndromo
  var longitud = string.length;
  for (var i = 0; i < longitud / 2; i++) {
    if (string[i] !== string[longitud - 1 - i]) {
      return false;
    }
  }
  return true;
}
// Ejemplos de uso
console.log(esPalindromo("A man a plan a canal Panama")); // false
console.log(esPalindromo("Hola Mundo")); // false
console.log(esPalindromo("madam")); // false
console.log(esPalindromo("12321")); // true
module.exports = esPalindromo;