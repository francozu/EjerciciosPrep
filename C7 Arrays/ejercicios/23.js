function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
  // Tu código:
  var arr = [];
  var iteraciones = 0;

  while (iteraciones < 10) {
    num += 2;
    iteraciones++;
    arr.push(num);

    if (num === iteraciones) {
      return "Se interrumpió la ejecución";
      
    }
  }

  return arr;
}
console.log(breakStatement(8));
console.log(breakStatement(2));
console.log(breakStatement(1));
module.exports = breakStatement;
