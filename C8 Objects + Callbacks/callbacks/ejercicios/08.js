const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código:
  const elementoEncontrado = array.find(callback);

  if (elementoEncontrado !== undefined) {
    return elementoEncontrado;
  } else {
    return "No se encontró el elemento";
  }
}

const numeroAEncontrar = (num) => {
  return num === 3;
}

console.log(buscarElemento([2, 4, 5, 6, 3], numeroAEncontrar)); // Output: 3
console.log(buscarElemento([2, 4, 5, 6], numeroAEncontrar)); // Output: "No se encontró el elemento"
module.exports = buscarElemento;
