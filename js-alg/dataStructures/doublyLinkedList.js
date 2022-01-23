class ReverseNode {
   constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
   }
}

class DoublyLinkedList {
   constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
   }
   push(value) {
      let newNode = new ReverseNode(value);
      if (this.length === 0) {
         this.head = newNode;
         this.tail = newNode;
      } else {
         this.tail.next = newNode;
         newNode.prev = this.tail;
         this.tail = newNode;
      }
      this.length++;
      return this;
   }
   pop() {
      if (!this.head) return null;
      let oldTail = this.tail;
      if (this.length === 1) {
         this.head = null;
         this.tail = null;
      } else {
         this.tail = oldTail.prev;
         this.tail.next = null;
         oldTail.prev = null;
      }
      this.length--;
      return oldTail;
   }
   shift() {
      if (this.length == 0) return undefined;
      let oldHead = this.head;
      if (this.length == 1) {
         this.head = null;
         this.tail = null;
      }

      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
      this.length--;
      return oldHead;
   }
   unshift(value) {
      let newNode = new ReverseNode(value);
      if (this.length == 0) {
         this.head = newNode;
         this.tail = newNode;
      } else {
         this.head.prev = newNode;
         newNode.next = this.head;
         this.head = newNode;
      }
      this.length++;
      return this;
   }
   get(index) {
      if (index >= this.length || index < 0) return null;
      if (index <= this.length / 2) {
         let count = 0;
         let current = this.head;
         while (count != index) {
            current = current.next;
            count++;
         }
         return current;
      } else {
         let count = this.length - 1;
         let current = this.tail;
         while (count != index) {
            current = current.prev;
            count--;
         }
         return current;
      }
   }
   set(value, index) {
      let foundNode = this.get(index);
      if (foundNode != null) {
         foundNode.value = value;
         return true;
      }
      return false;
   }
   insert(value, index) {
      if (index < 0 || index > this.length) return false;
      if (index === 0) return !!this.unshift(value);
      if (index === this.length) return !!this.push(value);
      let newNode = new ReverseNode(value);
      let beforeNode = this.get(index - 1);
      let afterNode = beforeNode.next;

      beforeNode.next = newNode;
      newNode.prev = beforeNode;
      newNode.next = afterNode;
      afterNode.prev = newNode;
      this.length++;
      return true;
   }
   remove(index){
      if (index < 0 || index >= this.length) return false;
      if(index === 0) return this.shift();
      if(index === this.length -1)return this.pop();
      let removedNode = this.get(index);
      removedNode.prev.next = removedNode.next;
      removedNode.next.prev = removedNode.prev;
      removedNode.next = null;
      removedNode.prev = null; 
      return removedNode;
   }
}

let list = new DoublyLinkedList();
list.push("abc");
list.push("123");
console.log(list);
