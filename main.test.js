const arraySumForEach = require("./algorithms/arraysLeetCodeEasy");

test("Properly adds numbers in an array", () => {
  expect(arraySumForEach([1, 2, 3])).toBe(6);
});
