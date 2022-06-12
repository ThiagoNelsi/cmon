const path = require('path');
const fs = require('fs');
const { spawn } = require('child_process');

const file = process.argv[2];

const filePath = path.join(process.cwd(), file);
const outputPath = `/tmp/c_build/${file.split('/').at(-1).replace('.c', '.out')}`;

console.log(`Compilation output: ${outputPath}\n`);

const options = {
  timeout: 0,
  stdio: 'inherit',
  shell: true,
}

spawn('mkdir', ['/tmp/c_build']);

compile(run);


fs.watchFile(filePath, { interval: 100 }, (curr, prev) => {
  console.log("\n[Arquivo modificado]");
  console.log("Compilando...\n");

  compile(run);
});

function run() {
  spawn(outputPath, options, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
  });
}

function compile(callback) {
  const compileProcess = spawn(`gcc ${filePath} -o ${outputPath}`, options, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
  });

  compileProcess.on('exit', callback);
}
