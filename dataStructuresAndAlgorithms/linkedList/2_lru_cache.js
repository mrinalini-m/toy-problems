/*
https://leetcode.com/problems/lru-cache/description/

146. LRU Cache

Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

*/


var DoubleLL = function(key, val) {
  this.key = key;
  this.val = val;
  this.next = null;
  this.prev = null;
}

let node1 = new DoubleLL(1);
let node2 = new DoubleLL(2);
let node3 = new DoubleLL(3);
let node4 = new DoubleLL(4);

node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node2;
node3.next = node4;
node4.prev = node3;


var LRUCache = function(capacity) {
  this.map = {};
  this.capacity = capacity;
  this.size = 0;
  this.cache = null;
  this.tail = null;
};


LRUCache.prototype.get = function(key) {
  if (this.map[key] === undefined) {
    return -1;
  } 
  if (this.capacity > 1) {  
    const node = this.map[key];
    let tempCache = this.cache;
    if (key === this.tail.key) {
      this.tail = this.map[key].prev;
      if (this.tail !== null) {
        this.tail.next = null;
      }
    } else {
      node.next.prev = node.prev;
      node.prev.next = node.next;
    }
    node.prev = null;
    node.next = tempCache;
    tempCache.prev = node;
    this.cache = node;
  }
  return this.map[key].val;

};


LRUCache.prototype.put = function(key, value) {
  const node = new DoubleLL(key, value);
  if (this.size === 0) {
    this.cache = node;
    this.tail = node;
  } else if (this.size <= this.capacity) {
    let tempCache = this.cache;
    node.next = tempCache;
    tempCache.prev = node;
    this.cache = node;
  } 
  if (this.map[key] === undefined) {
    this.size++;
  }
  if(this.size > this.capacity) {
    delete this.map[this.tail.key];
    this.tail.prev.next = null;
    this.tail = this.tail.prev;
    this.size--;
  }
  this.map[key] = node;
};

/** 
 * Your LRUCache object will be instantiated and called as such:
*/
var obj = new LRUCache(2);
// var obj = Object.create(LRUCache).createNew(3);
obj.put(2,1);
obj.put(2,2);
console.log(obj.get(2));
console.log('tail', this.tail);
obj.put(1,1);
obj.put(4,1);
console.log(obj.get(2));
console.log('tail', this.tail);
// console.log('size', obj.size);
// obj.put(2, "something else");
// console.log('size', obj.size);
// obj.put(3, "something else");
// console.log('size', obj.size);
// obj.put(4, "something else");
console.log('size', obj.size);
// console.log(obj.tail, 'tail');
// console.log(obj.get(2));
// console.log(obj.get(3));
// console.log(obj.cache);
console.log('---------');
// console.log(obj.map);



let start = obj.cache;
console.log('obj.map', obj.map);
console.log('start', start);
console.log('obj.tail', obj.tail);
console.log('---------cache console start');
while (start !== null) {
  if (start.prev !== null) {
    var prev = start.prev.val
  } else {
    var prev = null;
  }
  if (start.next !== null) {
    var next = [start.next.val, start.next.key]
  } else {
    var next = null;
  }
  console.log('key:', start.key, 'val:', start.val, 'prev:', prev, 'next:', next);
  start = start.next;
}


// console.log(param_1);
  