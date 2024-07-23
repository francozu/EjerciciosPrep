function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  // Verifica si no se han pasado argumentos
  if (arguments.length === 0) {
    return 0;
  }

  // Verifica si se ha pasado solo un argumento
  if (arguments.length === 1) {
    return arguments[0];
  }

  // Inicializa el producto en 1
  let producto = 1;

  // Recorre todos los argumentos y multiplica
  for (let i = 0; i < arguments.length; i++) {
    producto = producto *  arguments[i];
  }
  return producto;

}
console.log(multiplicarArgumentos());             // Salida: 0
console.log(multiplicarArgumentos(5));            // Salida: 5
console.log(multiplicarArgumentos(2, 3, 4));      // Salida: 24
console.log(multiplicarArgumentos(1, 2, 3, 4, 5)); // Salida: 120

module.exports = multiplicarArgumentos;
