var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function(){
    var dequeued = storage[0];
    delete storage[0];
    if(size > 0) {
      size--;
      var temp = {}
      for(var key in storage){
        temp[key-1] = storage[key]
      }
      for(var key in temp){
        storage[key] = temp[key]
      }
    }
    return dequeued;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
