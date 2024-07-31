function map(array, cb) {
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:
  var nuevoMap=[];
  for(let i=0; i<array.length;i++){
    nuevoMap.push(cb(array[i]));
    
  }
  return nuevoMap;
}
function multiplicar(num){
  return num*2;
  
  
}
var resultado = map([2,3,4,5],multiplicar);
console.log(resultado);
module.exports = map;
