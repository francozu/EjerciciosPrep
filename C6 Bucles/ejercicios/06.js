function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  if (num >=100 && num <1000)console.log(true);
  else console.log(false);
}
tieneTresDigitos(1000);
tieneTresDigitos(999);
tieneTresDigitos(784);
tieneTresDigitos(068);
module.exports = tieneTresDigitos;
