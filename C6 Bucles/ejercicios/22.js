function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  contador = 0; // Contador para las iteraciones

  do {
    num= num + 5; // Incrementa el valor de "num" en 5
    contador++; // Incrementa el contador de iteraciones
  } while (contador < 8); // Condición del bucle: se repite mientras "count" sea menor que 8

  console.log(num);
}
doWhile(3);
doWhile(10);
doWhile(6);

module.exports = doWhile;