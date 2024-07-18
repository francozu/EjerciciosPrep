function esVerdaderoYFalso(booleano1, booleano2) {
  // La función recibe dos argumentos "booleano1" y "booleano2".
  // Retorna true si ambos son verdaderos, caso contrario, retorna false.
  // Tu código:
  if(booleano1 === true && booleano2 === true )console.log(true);
  else console.log(false)
}
esVerdaderoYFalso(true, true);
esVerdaderoYFalso(true, false);
esVerdaderoYFalso(false, false);
module.exports = esVerdaderoYFalso;
