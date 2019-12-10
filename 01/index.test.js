const calculateRequiredFuel = require("./index");

it("Should calculate the correct fuel for a module", () => {
  expect(calculateRequiredFuel(12)).toBe(2);
  expect(calculateRequiredFuel(14)).toBe(2);
  expect(calculateRequiredFuel(1969)).toBe(654);
  expect(calculateRequiredFuel(100756)).toBe(33583);
});
