function agregarItemAlComienzoDelArray(array, elemento) {
  // Agrega el "elemento" al comienzo del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.unshift(elemento);
  console.log(array);
}
var frutas=["anana","banana","Pera"];
agregarItemAlComienzoDelArray(frutas,"kiwi");

module.exports = agregarItemAlComienzoDelArray;
