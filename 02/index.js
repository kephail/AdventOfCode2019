const interpretIntcode = program => {
  const steps = program.split(",").map(step => parseInt(step));
  for (let i = 0; i < steps.length; i += 4) {
    const opcode = steps[i];
    if (opcode === 99) return steps.toString();
    if (opcode === 1) {
      steps[steps[i + 3]] = steps[steps[i + 1]] + steps[steps[i + 2]];
    }
    if (opcode === 2) {
      steps[steps[i + 3]] = steps[steps[i + 1]] * steps[steps[i + 2]];
    }
  }
  return steps.toString();
};

module.exports = {
  interpretIntcode,
};
