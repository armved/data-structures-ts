import { LinkedList } from "./index";

describe("LinkedList", () => {
  test("append() works", () => {
    const myLinkedList = new LinkedList();

    myLinkedList.append(1);
    myLinkedList.append(2);
    myLinkedList.append(3);
    myLinkedList.append(4);
    myLinkedList.append(5);
    myLinkedList.append(6);

    expect(myLinkedList.toArray()).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("prepend() works", () => {
    const myLinkedList = new LinkedList();

    myLinkedList.prepend(1);
    myLinkedList.prepend(2);
    myLinkedList.prepend(3);
    myLinkedList.prepend(4);
    myLinkedList.prepend(5);
    myLinkedList.prepend(6);

    expect(myLinkedList.toArray()).toEqual([6, 5, 4, 3, 2, 1]);
  });

  test("removeHead() works", () => {
    const myLinkedList = new LinkedList();

    myLinkedList.append(1);
    myLinkedList.append(2);
    myLinkedList.append(3);
    myLinkedList.prepend(4);
    myLinkedList.removeHead();
    myLinkedList.removeHead();

    expect(myLinkedList.toArray()).toEqual([2, 3]);
  });

  test("removeTail() works", () => {
    const myLinkedList = new LinkedList();

    myLinkedList.append(1);
    myLinkedList.append(2);
    myLinkedList.removeTail();
    myLinkedList.append(3);
    myLinkedList.append(4);
    myLinkedList.removeTail();
    myLinkedList.prepend(5);
    myLinkedList.prepend(6);
    myLinkedList.removeTail();

    expect(myLinkedList.toArray()).toEqual([6, 5, 4, 3, 2, 1]);
  });

  describe("isEmpty()", () => {
    let myLinkedList: LinkedList<number>;
    beforeEach(() => myLinkedList = new LinkedList<number>());

    test("Empty LinkedList without append/prepend", () => {
      expect(myLinkedList.isEmpty()).toBeTruthy();
    });

    test("Empty LinkedList with appending and removing Tail till empty", () => {
      myLinkedList.append(1);
      myLinkedList.append(2);
      myLinkedList.removeTail();
      myLinkedList.removeTail();
      expect(myLinkedList.isEmpty()).toBeTruthy();
    });

    test("Empty LinkedList with appending and removing Head till empty", () => {
      myLinkedList.append(1);
      myLinkedList.append(2);
      myLinkedList.removeHead();
      myLinkedList.removeHead();
      expect(myLinkedList.isEmpty()).toBeTruthy();
    });
  });

  test("Iterator should work", () => {
    const myLinkedList = new LinkedList();

    myLinkedList.append(1);
    myLinkedList.append(2);
    myLinkedList.append(3);
    myLinkedList.append(4);
    myLinkedList.append(5);
    myLinkedList.append(6);

    const values = [];

    for (const node of myLinkedList) {
      values.push(node.value);
    }

    expect(values).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
