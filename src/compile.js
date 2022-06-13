const { spawn } = require('child_process');

function compile(filePath, compiledCodePath, callback) {
  const options = {
    timeout: 0,
    stdio: 'inherit',
    shell: true,
  }

  const compileProcess = spawn(`gcc ${filePath} -o ${compiledCodePath}`, options, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
  });

  compileProcess.on('exit', callback);
}

module.exports = compile;
