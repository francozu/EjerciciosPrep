function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  suma=0
  promedio =0
  cont=0
  for (var i = 0; i< resultadosTest.length; i++){
    suma = suma + resultadosTest[i];
    cont++;
  }
  return promedio=suma/cont;
}
numeros = [3,56,7,93,2,6];
console.log(promedioResultadosTest(numeros));

module.exports = promedioResultadosTest;
