const fs = require("fs").promises,
  path = require("path"),
  inputPath = path.join(__dirname, "input.txt");

async function loadInput() {
  const data = await fs.readFile(inputPath, "binary");
  let inputs = data.toString().split(/\r?\n/);
  inputs = inputs.map(input => parseInt(input));
  return inputs;
}

function calculateRequiredFuel(module) {
  /*
    Fuel required to launch a given module is based on its mass. 
    Specifically, to find the fuel required for a module, take its mass, 
    divide by three, round down, and subtract 2.
    */
  return Math.floor(module / 3) - 2;
}

function recursivelyCalculateRequiredFuel(module) {
  return module;
}

async function dayOnePartOne() {
  const inputs = await loadInput();
  const result = inputs.reduce((acc, cur) => {
    return calculateRequiredFuel(cur) + acc;
  }, 0);
  console.log(result);
}

function dayOnePartTwo() {}

module.exports = {
  dayOnePartOne,
  dayOnePartTwo,
  calculateRequiredFuel,
  recursivelyCalculateRequiredFuel,
};
