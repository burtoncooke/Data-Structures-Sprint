var Stack = function() {
  this.sizer = 0;
};


Stack.prototype.pop = function(){
   if(this.sizer>0){
     this.sizer--;
   }
   var popped = this[this.sizer]
   delete this[this.sizer]
   return popped;
  }

Stack.prototype.push =function(value){
    this[this.sizer] = value;
    this.sizer++;
  }

Stack.prototype.size = function(){
   return this.sizer;
 }

