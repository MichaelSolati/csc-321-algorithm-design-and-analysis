import { Node } from './node';

export class BinaryTree {
  private _root: Node;

  constructor(value: number | number[]) {
    if (Array.isArray(value)) {
      this._root = new Node(value.pop());
      value.forEach((val: number) => this._insert(val));
    } else {
      this._root = new Node(value);
    }
  }

  get root(): Node {
    return this._root;
  }

  public delete(value: number): void {
    this._root = this._delete(value, this.root);
  }

  private _delete(value: number, node: Node): Node {
    if (!node) {
      return null;
    } else if (value === node.value) {
      if (!node.left && !node.right) {
        return null;
      } else if (node.left) {
        return node.left;
      } else if (node.right) {
        return node.right;
      }
      const temp: number = this._min(node.right).value;
      node.value = temp;
      node.right = this._delete(temp, node.right);
      return node;
    } else if (value < node.value) {
      node.left = this._delete(value, node.left);
      return node;
    } else {
      node.right = this._delete(value, node.right);
      return node;
    }
  }

  public insert(value: number | number[]): void {
    if (Array.isArray(value)) {
      if (!this._root) { this._root = new Node(value.pop()); }
      value.forEach((val: number) => this._insert(val));
    } else {
      (!this._root) ? this._root = new Node(value) : this.insert(value);
    }
  }

  private _insert(value: number, node: Node = this._root): void {
    if (value < node.value) {
      (node.left) ? this._insert(value, node.left) : node.left = new Node(value);
    } else {
      (node.right) ? this._insert(value, node.right) : node.right = new Node(value);
    }
  }

  public max(): Node {
    return this._max();
  }

  private _max(node: Node = this._root): Node {
    while (node.right) { node = node.right; }
    return node;
  }

  public min(): Node {
    return this._min();
  }

  private _min(node: Node = this._root): Node {
    while (node.left) { node = node.left; }
    return node;
  }

  public search(value: number, traversal: string = 'inorder', log: boolean = true): Node {
    traversal = traversal.toLowerCase();
    switch (traversal) {
      case 'preorder':
        return this._searchPreOrder(value, this._root, log);
      case 'postorder':
        return this._searchPostOrder(value, this._root, log);
      default:
        return this._searchInOrder(value, this._root, log);
    }
  }

  private _searchInOrder(value: number, node: Node, log: boolean): Node {
    if (node) {
      let result: Node = this._searchInOrder(value, node.left, log);
      if (result) { return result; }
      if (log) { console.log('Is it ' + node.value + '?'); }
      if (node.value === value) { return node; }
      result = this._searchInOrder(value, node.right, log);
      if (result) { return result; }
    }
    return;
  }

  private _searchPostOrder(value: number, node: Node, log: boolean): Node {
    let result: Node;
    if (node.left) {
      result = this._searchPostOrder(value, node.left, log);
      if (result) { return result; }
    }
    if (node.right) {
      result = this._searchPostOrder(value, node.right, log);
      if (result) { return result; }
    }
    if (log) { console.log('Is it ' + node.value + '?'); }
    if (node.value === value) { return node; }
  }

  private _searchPreOrder(value: number, node: Node, log: boolean): Node {
    let result: Node;
    if (log) { console.log('Is it ' + node.value + '?'); }
    if (node.value === value) { return node; }
    if (node.left) {
      result = this._searchPreOrder(value, node.left, log);
      if (result) { return result; }
    }
    if (node.right) {
      result = this._searchPreOrder(value, node.right, log);
      if (result) { return result; }
    }
  }
}