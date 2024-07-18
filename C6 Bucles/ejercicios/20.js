function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:
   suma = 0;

  for(i=1; i<n; i++){
    suma = suma + i;
    if (suma > 100) {
      break;
  }
  
} 
console.log(suma);
}

sumarHastaNConBreak(10);
sumarHastaNConBreak(20);
sumarHastaNConBreak(16);


module.exports = sumarHastaNConBreak;
