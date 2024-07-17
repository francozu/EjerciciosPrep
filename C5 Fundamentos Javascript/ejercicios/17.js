function esPositivo(num) {
  // La función recibe un argumento llamado num el cual es un numero entero.
  // Retorna como resultado un string que indica si el número es positivo o negativo.
  // Por ejemplo: 
  // Si el número es positivo ---> "Es positivo".
  // Si el número es negativo ---> "Es negativo".
  // Si el número es 0, devuelve false.
  // Tu código:
  if(num>0){
    return "El numero es positivo";
  }else if (num < 0){
    return "El numero es negativo";
  }else{
    return "error";
  }
}

console.log(esPositivo(5));    // "Es positivo"
console.log(esPositivo(-8));   // "Es negativo"
console.log(esPositivo(0));    // false
console.log(esPositivo(10));   // "Es positivo"
console.log(esPositivo(-15));  // "Es negativo


module.exports = esPositivo;