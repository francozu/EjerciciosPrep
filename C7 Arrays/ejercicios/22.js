function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  var tablaResultado = [];

  for (var i = 0; i <= 60; i++) {
    tablaResultado.push(i * 6);
  }

  return tablaResultado;
}
console.log(tablaDelSeis());
module.exports = tablaDelSeis;
