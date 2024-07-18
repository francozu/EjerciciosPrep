function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  producto = 1;
 
  for (i=a; i<=b; i++){
    producto = producto * i;
  }
  console.log(producto);
}
productoEntreNúmeros(1,2);
productoEntreNúmeros(1,10);
productoEntreNúmeros(3,7);
productoEntreNúmeros(6,20);

module.exports = productoEntreNúmeros;