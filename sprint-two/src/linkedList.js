var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  list.size = 0;
  //list.index = null;

  list.addToTail = function(value){
    var newNode = Node(value)
    if(list.head === null){
      list.head = newNode;
      list.tail = newNode;
      //list.head.index = list.size;
      //list.tail.index = list.size;
      list.size++;
    }
    else{
      list.tail.next = newNode;
      list.tail = newNode;
      //list.head.index = list.size;
     // list.tail.index = list.size;
      list.size++;
    }
  };

  list.removeHead = function(){
    var formerHead = list.head;
    var newHead = list.head.next;
    list.head = newHead;
    return formerHead.value
  };

  list.contains = function(target){
    var obj = list.head;

    while(true) {
      if(obj.value === target) {
        return true;
      }
      else if(obj.next === null){
        return false;
      }
      else {
        obj = obj.next;
      }
    }
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.index = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
