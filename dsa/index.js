import DoublyLinkedList from "./data-structures/DoublyLinkedList.js";
const dll = new DoublyLinkedList();
dll.push(30);
dll.push(40);
dll.push(50);
const result = dll.find(51);
console.log(result);
