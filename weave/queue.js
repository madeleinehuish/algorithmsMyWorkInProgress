// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    let lastElem=this.data[this.data.length-1];
    // console.log(lastElem);
    return lastElem;
  }

  list() {
    console.log(this.data);
  }
}

module.exports = Queue;
