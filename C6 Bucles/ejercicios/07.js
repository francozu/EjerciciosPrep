function esParYDivisiblePorTres(a) {
  // La función recibe un número "a" por argumento.
  // Retorna true si este es par y divisible por tres a la vez.
  // Retorna false si no lo es.
  // Tu código:
  if(a % 2 ==0 && a % 3 ==0)console.log(true);
    else console.log(false);
}

esParYDivisiblePorTres(6);
esParYDivisiblePorTres(618);
esParYDivisiblePorTres(15);
module.exports = esParYDivisiblePorTres;