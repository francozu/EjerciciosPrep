function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  suma=0
  for(var i = 0; i< arrayOfNums.length; i++){
    suma= suma + arrayOfNums[i];
  }
  return suma;
}

numeros = [3,56,7,93,2,6];
console.log(agregarNumeros(numeros));
module.exports = agregarNumeros;
// entender que es el array en la posisicon i y no solo i