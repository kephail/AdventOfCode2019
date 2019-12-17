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
      program[program[i + 3]] = program[program[i + 1]] + program[program[i + 2]];
    }
    if (opcode === 2) {
      program[program[i + 3]] = program[program[i + 1]] * program[program[i + 2]];
    }
  }
  return program;
}

function findNounAndVerb(originalProgram, desiredOutput) {
  for (let noun = 0; noun <= 99; noun++) {
    for (let verb = 0; verb <= 99; verb++) {
      let program = [...originalProgram];
      program[1] = noun;
      program[2] = verb;
      const result = interpretIntcode(program);
      if (result[0] === desiredOutput) {
        return { noun, verb };
      }
    }
  }
  return { noun: 0, verb: 0 };
}

async function dayTwoPartOne() {
  const input = await loadInput();
  let inputs = input.split(",").map(Number);
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
