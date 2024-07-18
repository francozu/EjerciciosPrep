function esPositivoOInferiorA10(a) {
   // La función recibe un número "a" por parámetro.
   // Retorna true si es positivo y menor que 10.
   // Retorna false en caso contrario.
   // Tu código:
   if (a > 0 && a < 10)console.log(true);
   else console.log(false);
}
esPositivoOInferiorA10(3);
esPositivoOInferiorA10(10);
esPositivoOInferiorA10(-6);
esPositivoOInferiorA10(14);

module.exports = esPositivoOInferiorA10;
