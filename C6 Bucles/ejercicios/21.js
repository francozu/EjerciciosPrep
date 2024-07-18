function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:

    
  if (numero <= 0)console.log(false);

  // Mientras el número sea divisible por 2
  while (numero % 2 === 0) {
    // Dividimos el número por 2
    numero = numero / 2;
  }

  // Si después de dividir el número repetidamente por 2 obtenemos 1, es una potencia de 2
  console.log(true);
}


esPotenciaDeDos(16);
esPotenciaDeDos(-1);
esPotenciaDeDos(23);
module.exports = esPotenciaDeDos;
