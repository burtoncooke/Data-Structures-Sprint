var extend = function(to, from) {
    for (var key in from) {
      to[key] = from[key];
    }
  };

var Queue = function(){
  var queue = {};
  queue.sizer = 0;
  extend(queue, queueMethods);
  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this[this.sizer] = value;
  this.sizer++;
}

queueMethods.dequeue = function() {
  var dequeued = this[0];
    delete this[0];
    if(this.sizer > 0) {
      this.sizer--;
      var temp = {}
      for(var key in this){
        temp[key-1] = this[key]
      }
      for(var key in temp){
        this[key] = temp[key]
      }
    }
    return dequeued;
}

queueMethods.size = function() {
  return this.sizer;
}



