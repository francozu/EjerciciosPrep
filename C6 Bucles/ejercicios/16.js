function saludo(idioma) {
  // Retornar un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!".
  // Si "idioma" es "mandarin", devuelve "Ni Hao!".
  // Si "idioma" es "ingles", devuelve "Hello!".
  // Si "idioma" no es ninguno de los anteriores o es `undefined`, devuelve "Hola!".
  // Tu código:
  switch (idioma){
    case "aleman":console.log("Guten Tag!");
    break;
    case "mandarin":console.log("Ni Hao!");
    break;
    case "ingles":console.log("Hello!");
    break;
    default:console.log("Hola!");
  }
}
saludo("aleman");
saludo("mandarin");
saludo("ingles");
saludo(" ");

module.exports = saludo;
