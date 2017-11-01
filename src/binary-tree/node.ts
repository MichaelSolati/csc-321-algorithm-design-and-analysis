export class Node {
  private _left: Node;
  private _right: Node;

  constructor(private _value: number) { }

  get left(): Node {
    return this._left;
  }

  get right(): Node {
    return this._right;
  }

  get value(): number {
    return this._value;
  }

  set left(left: Node) {
    this._left = left;
  }

  set right(right: Node) {
    this._right = right;
  }

  set value(value: number) {
    this._value = value;
  }
}