function fizzBuzz(num) {
  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
  // Tu código:
  if (num % 3 === 0 && num % 5 ===0)console.log("fizzbuzz");
  else if(num % 3 ===0)console.log("fizz");
  else if(num % 5 === 0)console.log("Buzz");
  else console.log(false);
}
fizzBuzz(275);
fizzBuzz(15);
fizzBuzz(14);
fizzBuzz(6);


module.exports = fizzBuzz;
