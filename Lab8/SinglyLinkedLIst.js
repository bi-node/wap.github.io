/*1. Use constructor function to implement a Singly LinkedList.
Use case:
let linkedlist = new LinkedList();
linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print(); //Expected Result: LinkedList{1,2,3};
linkedlist.remove(2);
linkedlist.print(); //Expected Result: LinkedList{1,3};
*/
function Node(data, next) {
    this.data = data;
    this.next = next;
}
function LinkedList() {
    this.headNode = new Node();
}
LinkedList.prototype.add = function (data) {
    let lastNode = this.headNode;
    while (lastNode.next) {
        lastNode = lastNode.next;
    }
    let node = new Node(data);
    lastNode.next = node;
}
LinkedList.prototype.print = function () {
    console.log("The Singly Linked List");
     let result=""
    let pointer=this.headNode.next;
    while(pointer){
        result=result+pointer.data+"->";
        pointer=pointer.next;
    }
    result=result+"null";
    console.log(result);
}

LinkedList.prototype.remove = function (data) {
    let prev = this.headNode;
    let current=(prev)?prev.next:undefined;
    let next = (current)?current.next:undefined;
    let toDelete;
    while (!toDelete && (current)) {
        if(current.data === data){
            toDelete=current;
        }
        else{
            prev=current;
            current=next;
            next=(current)?current.next:undefined;
        }      
    }
    if (toDelete) {
        prev.next=next;
    }
}

const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.print();
linkedList.remove(2);
linkedList.print();

