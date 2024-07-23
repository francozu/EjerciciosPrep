function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  array.sort(function(a, b) {
    return a-b ;
   
  });
  console.log(array);
}
ordenarArray([23,65,3,8,4,25])
module.exports = ordenarArray;
