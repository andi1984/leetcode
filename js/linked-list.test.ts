const LinkedList = require("./linked-list");

describe("addAtHead", () => {
  test("Adds at head", () => {
    const myList = new LinkedList();
    myList.addAtHead(2);
    expect(myList.head).toMatchObject({ val: 2 });
  });
});

describe("get", () => {
  test("Returns -1 on empty list", () => {
    const myList = new LinkedList();
    expect(myList.get(2)).toBe(-1);
    myList.addAtHead(2);
    myList.addAtHead(5);
    expect(myList.get(1)).toBe(2);
  });
});

describe("addAtTail", () => {
  test("Adds at the end", () => {
    const myList = new LinkedList();
    myList.addAtHead(2);
    myList.addAtHead(5);
    myList.addAtTail(10);
    expect(myList.get(2)).toBe(10);
  });
});

describe("deleteAtIndex", () => {
  test("Deletes correctly", () => {
    const myList = new LinkedList();
    myList.addAtHead(5);
    myList.addAtHead(2);
    myList.deleteAtIndex(0);
    expect(myList.get(0)).toBe(5);
  });
});
