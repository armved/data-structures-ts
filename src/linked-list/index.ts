import { Loggable } from "../utilities/loggable";
import { Node } from "./node";

export class LinkedList<T> implements Loggable, Iterable<Node<T>> {
  private head: Node<T> = null;
  private tail: Node<T> = null;

  public append(value: T): void {
    const node  = new Node(value);

    if (this.isEmpty()) {
      this.tail = node;
      this.head = node;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }
  }

  public prepend(value: T): void {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.tail = node;
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  public removeHead(): void {
    if (this.isEmpty()) {
      console.log("LinkedList is empty");
    } else {
      this.head = this.head.next;
    }
  }

  public removeTail(): void {
    // TODO
  }

  public contains(): void {
    // TODO
  }

  public log(): void {
    if (this.isEmpty) {
      console.log("List is empty");
    } else {
      const values = this.toArray();
      console.log(`HEAD: ${this.head.value}`);
      console.log(`TAIL: ${this.tail.value}`);
      console.log(`MEMORY: ${values}`);
    }
  }

  public toArray(): T[] {
    const values: T[] = [];
    let pointer = this.head;

    while (pointer) {
      values.push(pointer.value);
      pointer = pointer.next;
    }
    return values;
  }

  public isEmpty(): boolean {
    return !this.head || !this.tail;
  }

  public [Symbol.iterator](): Iterator<Node<T>> {
    let current = this.head;

    return {
      next: () => {
        if (!current) {
          return {value: null, done: true};
        } else {
          const value = current;
          if (current.next) {
            current = current.next;
          } else {
            current = null;
          }
          return {value, done: false};
        }
      },
    };
  }

}
