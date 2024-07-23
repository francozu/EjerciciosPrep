function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
  
      // Genera un índice aleatorio
      var indiceAleatorio = Math.floor(Math.random() * array.length);
      // Devuelve el elemento en el índice aleatorio
      return array[indiceAleatorio];
   }
   var numeros = [1, 3, 6, 9];
   console.log(obtenerElementoAleatorio(numeros)); 
  
module.exports = obtenerElementoAleatorio;
