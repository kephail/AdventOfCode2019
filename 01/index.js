function calculateRequiredFuel(module) {
  /*
    Fuel required to launch a given module is based on its mass. 
    Specifically, to find the fuel required for a module, take its mass, 
    divide by three, round down, and subtract 2.
    */
  return Math.floor(module / 3) - 2;
}
module.exports = calculateRequiredFuel;
