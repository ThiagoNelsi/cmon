function getArg(flags) {
  const result = process.argv.map((arg, index) => {
    if (flags.includes(arg)) return process.argv[index + 1];
  }).filter(Boolean)[0];

  return result;
}

module.exports = getArg;
