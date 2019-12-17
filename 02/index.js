const fs = require("fs").promises,
  path = require("path"),
  inputPath = path.join(__dirname, "input.txt");

async function loadInput() {
  const data = await fs.readFile(inputPath, "binary");
  return data;
}

function interpretIntcode(program) {
  for (let i = 0; i < program.length; i += 4) {
    const opcode = program[i];
    if (opcode === 99) return program;
    if (opcode === 1) {
      program[program[i + 3]] =
        program[program[i + 1]] + program[program[i + 2]];
    }
    if (opcode === 2) {
      program[program[i + 3]] =
        program[program[i + 1]] * program[program[i + 2]];
    }
  }
  return program;
}

function findNounAndVerb(originalProgram, desiredOutput) {
  let noun = 0;
  let verb = 0;

  for (let i = 0; i <= 99; i++) {
    for (let j = 0; j <= 99; j++) {
      let program = [...originalProgram];
      program[1] = i;
      program[2] = j;
      const result = interpretIntcode(program);
      if (result[0] === desiredOutput) {
        noun = i;
        verb = j;
      }
    }
  }
  return { noun, verb };
}

async function dayTwoPartOne() {
  const input = await loadInput();
  let inputs = input.split(",").map(step => parseInt(step));
  inputs[1] = 12;
  inputs[2] = 2;
  const result = interpretIntcode(inputs);
  console.log("dayTwoPartOne:");
  console.log(result);
}

async function dayTwoPartTwo() {
  const input = await loadInput();
  let inputs = input.split(",").map(step => parseInt(step));
  const { noun, verb } = findNounAndVerb(inputs, 19690720);
  console.log("dayOnePartTwo:");
  console.log(`noun: ${noun}, verb: ${verb}`);
}

module.exports = {
  dayTwoPartOne,
  dayTwoPartTwo,
  interpretIntcode,
};
