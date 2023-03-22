const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite uma sequência de números separados por espaço: ', (input) => {
  const numbers = input.split(' ').map(Number);
  const sum = numbers.reduce((acc, cur) => acc + cur, 0);
  console.log(`A soma dos números é: ${sum}`);
  rl.close();
});
