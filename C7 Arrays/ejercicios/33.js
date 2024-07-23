function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:
   // Filtrar los strings vacíos y mantener solo los que tienen contenido
   const strings = [str1, str2, str3].filter(s => s.length > 0);
  
   let result = '';
   let maxLength = Math.max(...strings.map(s => s.length)); // Encontrar la longitud máxima entre los strings
 
   for (let i = 0; i < maxLength; i++) {
     for (let str of strings) {
       if (i < str.length) {
         result += str[i]; // Agregar el carácter en la posición i del string actual
       }
     }
   }
   
   return result;
}
// Ejemplos de uso
console.log(combine("abc", "", "123"));   // "a1b2c3"
console.log(combine("abc", "12345", "")); // "a1b2c345"
console.log(combine("abc", "12345", "67"));// "a16b27c345"
// NO LO ENTIENDO!!!!!

module.exports = combine;