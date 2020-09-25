/*
JavaScript Algorithms and Data Structures Masterclass
Doubly Linked List
*/

class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push = (val) => {
    let node = new Node(val);
    if(this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop = () => {
    let temp = this.tail;
    if(this.length === 0) {
      return undefined
    } else if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
  }

  shift = () => {
    let temp = this.head;
    if(this.length === 0) {
      return undefined;
    } else if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
    return temp
  }

  unshift = (val) => {
    let node = new Node(val);
    if(this.length === 0) {
      this.head = node;
      this.tail = node
    } else {
      let temp = this.head;
      this.head = node;
      this.head.next = temp;
      temp.prev = this.head;
    }
    this.length++;
    return this;
  }

  get = (index) => {
    let ind;
    let node;
    if(index < 0 || index >= this.length) {
      return null;
    }
    if(index > this.length / 2) {
      ind = this.length - 1;
      node = this.tail;
      while(ind > index) {
        node = node.prev;
        ind--;
      }
    } else {
      ind = 0;
      node = this.head;
      while(ind < index) {
        node = node.next;
        ind++;
      }
    }
    return node;
  }

  set = (index, val) => {
    let node = this.get(index);
    if(node === undefined) {
      return false;
    }
    node.val = val;
    return true;
  }

  insert = (index, val) => {
    let node = new Node(val);
    let old;
    if(index >= this.length || index < 0) {
      return false;
    } else if(index === 0) {
      this.unshift(val);
    } else if(index === this.length - 1) {
      this.push(val);
    } else {
      old = this.get(index - 1);
      old.next.prev = node;
      old.next = node;
      node.prev = old;
      node.next = old.next.next;
    }
    this.length++;
    return true;
  }

  remove = (index) => {
    let node;
    if(index < 0 || index >= this.length) {
      return false;
    } else if(index === 0) {
      this.shift();
    } else if(index === this.length - 1) {
      this.pop();
    } else {
      node = this.get(index);
      node.prev.next = node.next;
      node.next.prev = node.prev;
      node.next = null;
      node.prev = null;
      this.length--;
      return node;
    }
  }
}