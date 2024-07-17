function agregarSimboloExclamacion(str) {
  // La función recibe un argumento llamado str el cual es un string.
  // Agrega un símbolo de exclamación al final del string str y retórnalo.
  // Por ejemplo: 
  // "hello world" ---> "hello world!"
  // Tu código:
  
  return (str + "!");
}

console.log(agregarSimboloExclamacion("hello world"));
console.log(agregarSimboloExclamacion("franco zufia"));
console.log(agregarSimboloExclamacion("curso henry"));

module.exports = agregarSimboloExclamacion;
