function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

funciton DoublyList() {
  this.head = null;
  this.tail = null;
  this.size = 0;
}

DoublyList.prototype.add = function(val) {
  var node = new Node(val);
  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }
  this.size++;
  return node;
}

DoublyList.prototype.remove = function(val) {
  
}