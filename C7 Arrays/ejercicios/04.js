function agregarItemAlFinalDelArray(array, elemento) {
  // Agrega el "elemento" al final del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.push(elemento);
  console.log(array);
}

var numeros=[1,2,3,4];
agregarItemAlFinalDelArray(numeros,89);


module.exports = agregarItemAlFinalDelArray;
