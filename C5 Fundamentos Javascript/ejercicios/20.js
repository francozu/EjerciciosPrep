function resta(x, y) {
  // La función recibe dos argumentos llamados "x" e "y" que son números.
  // Retorna el resultado de la resta de estos argumentos.
  // Por ejemplo: 
  // 10, 5 ---> 5
  // 5, 5 ---> 0
  // Tu código:
  return x - y;
}

console.log(resta(4,6));
console.log(resta(15,9));
console.log(resta(7,1));
console.log(resta(70,6));
console.log(resta(4,17));

module.exports = resta;