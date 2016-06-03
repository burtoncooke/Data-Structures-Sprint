var Queue = function(){
  this.sizer = 0;
};


Queue.prototype.enqueue = function(value) {
  this[this.sizer] = value;
  this.sizer++;
}

Queue.prototype.dequeue = function() {
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

Queue.prototype.size = function() {
  return this.sizer;
}

