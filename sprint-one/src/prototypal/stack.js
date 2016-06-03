var Stack = function() {



  // extend(stack, stackMethods)
  var stack = Object.create(stackMethods);
  stack.sizer = 0;
  return stack;
};

stackMethods = {};

stackMethods.pop = function(){
   if(this.sizer>0){
     this.sizer--;
   }
   var popped = this[this.sizer]
   delete this[this.sizer]
   return popped;
  }

stackMethods.push =function(value){
    this[this.sizer] = value;
    this.sizer++;
  }

stackMethods.size = function(){
   return this.sizer;
 }



