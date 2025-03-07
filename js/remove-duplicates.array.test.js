const removeDuplicates = require("./remove-duplicates.array");

describe("removeDuplicates", () => {
  test("Change the passed in array", () => {
    const foo = [1, 1];
    removeDuplicates(foo);
    expect(foo).toEqual([1]);
  });

  test("Custom test", () => {
    let a = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    removeDuplicates(a);
    expect(a).toEqual([0, 1, 2, 3, 4]);
  });
});
