var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //i - index in bucket array
  //k - key
  //v - value
  //this._limit - length of bucket array
  //use set for insert
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //use get for retrieve
  //return value

};

HashTable.prototype.remove = function(k){

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
