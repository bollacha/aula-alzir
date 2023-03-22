const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  
  return true;
}

readline.question('Digite um número: ', (number) => {
  if (isPrime(number)) {
    console.log(`${number} é um número primo.`);
  } else {
    console.log(`${number} não é um número primo.`);
  }
  
  readline.close();
});
