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
  return Math.floor(module / 3) - 2;
}

function recursivelyCalculateRequiredFuel(module, totalFuel = 0) {
  const fuel = calculateRequiredFuel(module);
  if (fuel <= 0) {
    return totalFuel;
  }
  totalFuel += fuel;
  return recursivelyCalculateRequiredFuel(fuel, totalFuel);
}

async function dayOnePartOne() {
  const inputs = await loadInput();
  const result = inputs.reduce((acc, cur) => {
    return calculateRequiredFuel(cur) + acc;
  }, 0);
  console.log("dayOnePartOne:");
  console.log(result);
}

async function dayOnePartTwo() {
  const inputs = await loadInput();
  const result = inputs.reduce((acc, cur) => {
    return recursivelyCalculateRequiredFuel(cur) + acc;
  }, 0);
  console.log("dayOnePartTwo:");
  console.log(result);
}

module.exports = {
  dayOnePartOne,
  dayOnePartTwo,
  calculateRequiredFuel,
  recursivelyCalculateRequiredFuel,
};
