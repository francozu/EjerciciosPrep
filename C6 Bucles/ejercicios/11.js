function estaEnRango(num) {
  // Retorna true si "num" es menor que 50 y mayor que 20.
  // De lo contrario, retornar false.
  // Tu código:
  if(num < 50 && num > 20)console.log(true);
  else console.log(false);
}
estaEnRango(35);
estaEnRango(19);
estaEnRango(50);

module.exports = estaEnRango;
