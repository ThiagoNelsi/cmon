const { spawn } = require('child_process');

function run(inputFile, outputFile, compiledCodePath) {
  const options = {
    timeout: 0,
    stdio: 'inherit',
    shell: true,
  }

  let command = compiledCodePath;
  if (inputFile) command += ` < ${inputFile}`;
  if (outputFile) command += ` > ${outputFile}`;

  spawn(command, options, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
  });
}

module.exports = run;
