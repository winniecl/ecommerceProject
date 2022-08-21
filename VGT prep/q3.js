const node = (word) => {
  return {
    value: word,
    children: [],
  };
};
const a = node("a");
const b = node("b");
const c = node("c");
const d = node("d");
const e = node("e");
const f = node("f");
const g = node("g");
const h = node("h");
const i = node("i");
const j = node("j");
const k = node("k");
const l = node("l");
const m = node("m");
a.children.push(b, c, d);
b.children.push(e);
e.children.push(k, l);
c.children.push(f, g, h);
h.children.push(m);
d.children.push(i, j);
let array = new Array();
const levelOrder = (node, array) => {
  let queue = [node];
  while (queue.length) {
    const element = queue.shift();
    array.push(element.value);
    element.children.forEach((element) => {
      queue.push(element);
    });
  }
};
//Preorder (Root, Left, Right)
const dfsPreOrder = (node, array) => {
  array.push(node.value);
  node.children.forEach((element) => {
    dfsPreOrder(element, array);
  });
};
const dfsPostOrder = (node, array) => {
  node.children.forEach((element) => {
    dfsPostOrder(element, array);
  });
  array.push(node.value);
};
levelOrder(a, array);
//dfsPreOrder(a, array);
//dfsPostOrder(a, array);
console.log("====================================");
console.log(array);
console.log("====================================");
