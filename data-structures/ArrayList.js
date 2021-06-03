/*
  ArrayList
  
  We are going to approximate an implementation of ArrayList. In JavaScript terms, that means we are
  going to implement an array using objects. You should not use arrays at all in this exercise, just
  objects. Make a class (or constructor function; something you can call new on) called ArrayList.
  ArrayList should have the following properties (in addition to whatever properties you create):
  
  length - integer  - How many elements in the array
  push   - function - accepts a value and adds to the end of the list
  pop    - function - removes the last value in the list and returns it
  get    - function - accepts an index and returns the value at that position
  delete - function - accepts an index, removes value from list, collapses, 
                      and returns removed value
*/

class ArrayList {
  constructor() {
    // instantiate your variables
    this.length = 0;
    this.data = {};
  }
  push(value) {
    // add an item to the end of the array
    this.data[this.length] = value;
    this.length++;
  }
  pop() {
    // remove the last item from an array and return it
    const ans = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return ans;
  }
  get(index) {
    // returns that item from an array
    return this.data[index];
  }
  delete(index) {
    // removes item from the array and collapses the array
    const ans = this.data[index];
    this._collapseTo(index);
    return ans;
  }
  _collapseTo(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
  serialize() {
    return this.data;
  }
}
