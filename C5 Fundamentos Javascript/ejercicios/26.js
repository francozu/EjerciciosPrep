function obtenerSaludo(nombre) {
  // La función recibe un argumento llamado nombre el cual es un string. 
  // Toma el string "nombre" y concatena otros string en la cadena para que tome la siguiente forma:
  // Ejemplo: "Martin" ---> "Hola Martin!"
  // Retorna el nuevo string. 
  // Tu código:
  return "Hola " + nombre + "!" 
}
console.log(obtenerSaludo("Franco"));
console.log(obtenerSaludo("Adrian"));
console.log(obtenerSaludo("Cloud"));

module.exports = obtenerSaludo;