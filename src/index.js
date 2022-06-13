const path = require('path');
const fs = require('fs');
const { spawn } = require('child_process');
const compile = require('./compile');
const run = require('./run');
const getArg = require('./getArg.js');

const COMPILATION_OUTPUT_DIR = '/tmp/c_build';

const watchFiles = [];

const cFile = process.argv[2];
const filePath = path.join(process.cwd(), cFile);
watchFiles.push(filePath);

const compiledCodePath = `${COMPILATION_OUTPUT_DIR}/${cFile.split('/').at(-1).replace('.c', '.out')}`;

let inputFile = getArg(['-i', '--input', '--in']);
if (inputFile) {
  inputFile = path.join(process.cwd(), inputFile);
  watchFiles.push(inputFile);
}

let outputFile = getArg(['-o', '--output', '--out']);
outputFile = outputFile ? path.join(process.cwd(), outputFile) : undefined;

console.log(`Compilation output: ${compiledCodePath}\n`);

spawn('mkdir', [`${COMPILATION_OUTPUT_DIR}`]);
compile(filePath, compiledCodePath, () => run(inputFile, outputFile, compiledCodePath));

watchFiles.forEach(file => {
  fs.watchFile(file, { interval: 100 }, (curr, prev) => {
    console.log("\n[Arquivo modificado]");
    console.log("Compilando...\n");

    compile(filePath, compiledCodePath, () => run(inputFile, outputFile, compiledCodePath));
  });
});
