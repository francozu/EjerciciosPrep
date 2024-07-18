function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  // Un número menor que 2 no puede ser primo
  if (numero < 2) console.log("este numero no es primo");

  // Recorremos desde 2 hasta la raíz cuadrada de "numero"
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    // Si "numero" es divisible por "i", no es primo
    if (numero % i === 0) console.log(false);
  }

  // Si no se encuentra ningún divisor, el número es primo
 console.log(true);
}
esNumeroPrimo(0);
esNumeroPrimo(4);

module.exports = esNumeroPrimo;
