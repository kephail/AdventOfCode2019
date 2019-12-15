const fs = require("fs").promises,
  path = require("path"),
  inputPath = path.join(__dirname, "input.txt");

async function loadInput() {
  const data = await fs.readFile(inputPath, "binary");
  return data;
}

async function dayTwoPartOne() {
  const input = await loadInput();
  let steps = input.split(",").map(step => parseInt(step));
  steps[1] = 12;
  steps[2] = 2;
  steps = steps.toString();
  const result = interpretIntcode(steps);
  console.log("dayOnePartTwo:");
  console.log(result);
}

function interpretIntcode(program) {
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
}

module.exports = {
  dayTwoPartOne,
  interpretIntcode,
};
