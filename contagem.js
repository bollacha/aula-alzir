const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let integerCount = 0;

rl.question('Insira um conjunto de dados: ', (data) => {
  const dataArray = data.split(' ');

  for (let i = 0; i < dataArray.length; i++) {
    if (Number.isInteger(parseInt(dataArray[i]))) {
      integerCount++;
    }
  }

  console.log(`O conjunto de dados contém ${integerCount} números inteiros.`);
  rl.close();
});