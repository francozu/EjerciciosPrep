function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  return array.filter(function(elemento){
    if(elemento % 2=== 0){
      return elemento;
    }
  });
}
const array = [1, 2, 3, 4, 5, 6, 8];
console.log(filtrarNumerosPares(array)); 
module.exports = filtrarNumerosPares;
