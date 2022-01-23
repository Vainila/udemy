class Node {
   constructor(value) {
      this.value = value;
      this.next = null;
   }
}

class SinglyLinkedList {
   constructor() {
      this.length = 0;
      this.head = null;
      this.tail = null;
   }
   push(value) {
      let newNode = new Node(value);
      if (!this.head) {
         this.head = newNode;
         this.tail = this.head;
      } else {
         this.tail.next = newNode;
         this.tail = newNode;
      }
      this.length++;
      return this;
   }
   print() {
      let arr = [];
      let current = this.head;
      while (current) {
         arr.push(current.value);
         current = current.next;
      }
      console.log(arr);
   }

   pop() {
      let current = this.head;
      let newTail = current;
      while (current.next) {
         newTail = current;
         current = current.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      if (this.length === 0) {
         this.head = null;
         this.tail = null;
      }
      return current;
   }
   shift() {
      if (!this.head) return undefined;
      let currentHead = this.head;
      this.head = currentHead.next;
      this.length--;
      if (this.length === 0) {
         this.tail = null;
      }
      return currentHead;
   }
   unshift(value) {
      let newNode = new Node(value);
      if (!this.head) {
         this.head = newNode;
         this.tail = this.head;
      } else {
         newNode.next = this.head;
         this.head = newNode;
      }
      this.length++;
      return this;
   }
   get(index) {
      if (index < 0 || index >= this.length) return null;
      let counter = 0;
      let current = this.head;
      while (counter != index) {
         current = current.next;
         counter++;
      }
      return current;
   }
   set(value, index) {
      let oldNode = this.get(index);
      if (oldNode) {
         oldNode.value = value;
         return true;
      }
      return false;
   }
   insert(value, index) {
      if (index < 0 || index > this.length) {
         return false;
      }
      if (index == this.length) {
         return !!this.push(value);
      }
      if (index == 0) {
         return this.unshift(value);
      }
      let newNode = new Node(value);
      let prev = this.get(index - 1);
      let temp = prev.next;
      prev.next = newNode;
      newNode.next = temp;
      this.length++;
      return true;
   }
   remove(index) {
      if (index > 0 || index > this.length) return null;
      if (index == this.length - 1) return this.pop();
      if (index == 0) return this.shift();

      let prevNode = this.get(index - 1);
      let removed = prevNode.next;
      prevNode.next = removed.next;
      this.length--;
      return removed;
   }
   reverse() {
      let node = this.head;
      this.head = this.tail;
      this.tail = node;

      let next; 
      let prev = null;

      for (var i = 0; i < this.length; i++) {
         next = node.next;
         node.next = prev;
         prev = node;
         node = next;
      }
      return this;
   }
}

let list = new SinglyLinkedList();
list.push(1231);
list.push(2562146);
list.push(311);
list.push(461213412412341234);

list.print();
console.log(list.insert("bla", 2));
list.print();
list.reverse();
list.print();

// console.log(list.pop(), list.tail);
// console.log(list.value);
