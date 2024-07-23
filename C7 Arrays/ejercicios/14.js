function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
 // Inicializa el contador en 0
 let contador = 0;
  
 // Recorre el arreglo con un bucle for
 for (let i = 0; i < array.length; i++) {
   // Verifica si el elemento actual es mayor a 10
   if (array[i] > 10) {
     // Incrementa el contador si la condición es verdadera
     contador++;
   }
 }
 
 // Devuelve la cantidad de elementos mayores a 10
 return contador;
}
const numeros = [5, 12, 7, 22, 15, 3, 8];
console.log(contarElementosMayoresA10(numeros)); 
//Ver y analizar la variante con una combinacion de array.filter y array.length