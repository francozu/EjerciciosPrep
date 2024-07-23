function encontrarElemento(num, array) {
   // Busca el número pasado por argumento dentro del array.
   // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
   // Si no se encuentra, retorna -1.
   // Tu código:
   console.log(array.indexOf(num));
   
}
encontrarElemento(4,[2,5,7,8,6,9,4]);
encontrarElemento(4,[2,5,7,8,6,9,5]);

module.exports = encontrarElemento;
