const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o primeiro número: ', (input1) => {
  const a = parseInt(input1);
  rl.question('Digite o segundo número: ', (input2) => {
    const b = parseInt(input2);
    console.log(`O MDC entre ${a} e ${b} é: ${mdc(a, b)}`);
    rl.close();
  });
});

function mdc(a, b) {
  if (b === 0) {
    return a;
  } else {
    return mdc(b, a % b);
  }
}
