function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:
  var arr = [];
  var iteraciones = 0;

  while (iteraciones < 10) {
    num += 2;
    iteraciones++;
    if (iteraciones === 5) {
     continue;
      
    
    }
    arr.push(num);
    

    
  }

  return arr;
}
console.log(continueStatement(8));
console.log(continueStatement(2));
console.log(continueStatement(1));

module.exports = continueStatement;
