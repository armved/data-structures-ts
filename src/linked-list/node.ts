export class Node<T> {
  constructor(
    public value: T = null,
    public next: Node<T> = null,
  ) {}
}
