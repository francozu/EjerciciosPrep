function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   // Utiliza el método filter para crear un nuevo arreglo con los elementos que comiencen con la letra "a"
   const resultado = arrayOfStrings.filter(function(elemento) {
      // Verifica si el primer carácter del elemento es "a" o "A"
      return elemento.charAt(0).toLowerCase() === 'a';
    });
  
    // Retorna el nuevo arreglo
    return resultado;

}
const palabras = ['apple', 'banana', 'avocado', 'grape', 'apricot'];
const palabrasConA = filter(palabras);

console.log(palabrasConA); // Debería imprimir ['apple', 'avocado', 'apricot']
//primera vez usando charAt asique practicar mas
module.exports = filter;
