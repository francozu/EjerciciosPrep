function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:

  var mesesBuscados = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
      mesesBuscados.push(array[i]);
    }
  }

  // Verificamos si encontramos todos los meses pedidos
  if (mesesBuscados.includes("Enero") && mesesBuscados.includes("Marzo") && mesesBuscados.includes("Noviembre")) {
    return mesesBuscados;
  } else {
    return "No se encontraron los meses pedidos";
  }
}

console.log(mesesDelAño(["Enero","Abril","Noviembre","Marzo"]));
console.log(mesesDelAño(["Enero","Abril","Noviembre"]));
  
  
  
  


module.exports = mesesDelAño;
