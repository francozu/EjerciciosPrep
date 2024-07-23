function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  // Paso 1: Convertir el texto a un arreglo de caracteres
  var arregloDeCaracteres = texto.split('');
  
  // Paso 2: Invertir el arreglo de caracteres
  var arregloInvertido = arregloDeCaracteres.reverse();
  
  // Paso 3: Unir los caracteres invertidos en un string
  var textoInvertido = arregloInvertido.join('');
  
  // Retornar el texto invertido
  return textoInvertido;
}
console.log(invertirTexto("Hola Mundo")); // "odnuM aloH"
console.log(invertirTexto("JavaScript")); // "tpircSavaJ"
console.log(invertirTexto("12345")); // "54321"
module.exports = invertirTexto;
