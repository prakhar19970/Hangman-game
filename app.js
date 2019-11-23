
const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(text) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(text, resolve);
  });
}

start();

async  function start() {
  let name = await ask('guess :');
  console.log(name);
  process.exit();
}