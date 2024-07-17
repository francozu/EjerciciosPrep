function esTipoDato(valor) {
  // La función recibe un argumento llamado valor.
  // Retorna el tipo de dato de este valor.
  // Por ejemplo: "string", "number", "boolean", "object", etc.
  // Tu código
  return typeof valor;

}
// Ejemplos de uso:
console.log(esTipoDato("Hola"));   // "string"
console.log(esTipoDato(42));       // "number"
console.log(esTipoDato(true));     // "boolean"
console.log(esTipoDato({}));       // "object"
console.log(esTipoDato(null));     // "object"
console.log(esTipoDato(undefined));// "undefined"
console.log(esTipoDato(Symbol())); // "symbol"
console.log(esTipoDato(() => {})); // "function

module.exports = esTipoDato;