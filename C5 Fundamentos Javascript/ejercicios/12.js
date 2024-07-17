function tienenMismaLongitud(str1, str2) {
  // La función recibe dos argumentos llamados "str1" y "str2" que son strings.
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // "SoyHenry", "HenrySoy" ---> true 
  // "hi", "there" ---> false 
  // Tu código:
  return str1.length===str2.length;
}

// Ejemplos de uso:
console.log(tienenMismaLongitud("SoyHenry", "HenrySoy"));  // true
console.log(tienenMismaLongitud("hi", "there"));           // false
console.log(tienenMismaLongitud("abc", "def"));            // true
console.log(tienenMismaLongitud("JavaScript", "Python"));  // false
module.exports = tienenMismaLongitud;