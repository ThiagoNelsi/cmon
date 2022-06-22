const { spawn } = require('child_process');
const getArg = require('./getArg');

function compile(filePath, compiledCodePath, callback) {
  const options = {
    timeout: 0,
    stdio: 'inherit',
    shell: true,
  }

  const compilationOptions = getArg(['-c', '--compile', '--compile-options']);

  const compileProcess = spawn(`gcc ${filePath} -o ${compiledCodePath} ${compilationOptions ? compilationOptions : ''}`, options, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
  });

  compileProcess.on('exit', callback);
}

module.exports = compile;
