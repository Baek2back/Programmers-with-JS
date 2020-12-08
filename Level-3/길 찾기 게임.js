function solution(nodeinfo) {
  class Node {
    constructor(data) {
      const [x, y, idx] = data;
      this.coordinates = [x, y];
      this.index = idx;
      this.left = null;
      this.right = null;
    }
  }
  class Tree {
    constructor() {
      this.root = null;
      this.preOrderResult = [];
      this.postOrderResult = [];
    }

    insert(node, current = this.root) {
      if (!this.root) {
        this.root = new Node(node);
        return;
      }
      const [nodeX] = node;
      const [curX] = current.coordinates;
      if (curX > nodeX) {
        if (current.left) return this.insert(node, current.left);
        current.left = new Node(node);
      }
      if (curX < nodeX) {
        if (current.right) return this.insert(node, current.right);
        current.right = new Node(node);
      }
    }

    getPreOrderResult() {
      if (this.preOrderResult.length) this.preOrderResult = [];
      this.preOrderTraverse(this.root);
      return this.preOrderResult;
    }

    preOrderTraverse(current) {
      if (current) {
        const { index } = current;
        this.preOrderResult.push(index);
        this.preOrderTraverse(current.left);
        this.preOrderTraverse(current.right);
      }
    }

    getPostOrderResult() {
      if (this.postOrderResult.length) this.postOrderResult = [];
      this.postOrderTraverse(this.root);
      return this.postOrderResult;
    }

    postOrderTraverse(current) {
      if (current) {
        const { index } = current;
        this.postOrderTraverse(current.left);
        this.postOrderTraverse(current.right);
        this.postOrderResult.push(index);
      }
    }
  }
  const compare = (p1, p2) => {
    const [p1X, p1Y] = p1;
    const [p2X, p2Y] = p2;
    return p1Y === p2Y ? p1X - p2X : p2Y - p1Y;
  };
  const tree = new Tree();
  const nodeInfoWithIndex = nodeinfo.map((node, idx) => [...node, idx + 1]);
  nodeInfoWithIndex.sort(compare);
  nodeInfoWithIndex.forEach(node => {
    tree.insert(node);
  });
  const answer = [tree.getPreOrderResult(), tree.getPostOrderResult()];
  return answer;
}
