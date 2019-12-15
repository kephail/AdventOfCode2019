const { interpretIntcode } = require("./index");

it("Should correctly interpret Intcode program", () => {
  expect(interpretIntcode("1,0,0,0,99")).toBe("2,0,0,0,99");
  expect(interpretIntcode("2,3,0,3,99")).toBe("2,3,0,6,99");
  expect(interpretIntcode("2,4,4,5,99,0")).toBe("2,4,4,5,99,9801");
  expect(interpretIntcode("1,1,1,4,99,5,6,0,99")).toBe("30,1,1,4,2,5,6,0,99");
});
