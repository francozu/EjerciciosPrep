function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  // Inicializa el índice del valor máximo y el valor máximo
  let indiceMaximo = 0;
  let maximo = array[0];

  // Recorre el arreglo con un bucle for
  for (let i = 1; i < array.length; i++) {
    // Compara el elemento actual con el valor máximo encontrado
    if (array[i] > maximo) {
      // Actualiza el valor máximo y el índice del valor máximo
      maximo = array[i];
      indiceMaximo = i;
    }
  }
  
  // Devuelve el índice del número más grande
  return indiceMaximo;

}
const numeros = [3, 7, 2, 10, 5];
console.log(encontrarIndiceMayor(numeros)); 

module.exports = encontrarIndiceMayor;
