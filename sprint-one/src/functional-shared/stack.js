// extend = function(obj) {

//    if(arguments.length === 1) {
//      return obj;
//    }

//    for(var i = 1; i <= arguments.length; i++) {

//      for(var key in arguments[i]) {
//        obj[key] = arguments[i][key];
//      }
//    }
//    return obj;
//  };



var Stack = function() {

  var extend = function(to, from) {
    for (var key in from) {
      to[key] = from[key];
    }
  };

  var stack = {sizer:0};
  extend(stack, stackMethods)
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
//pop

//push
//size




