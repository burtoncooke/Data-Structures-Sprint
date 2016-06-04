var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

/*
var LimitedArray = function(limit){
  var storage = [];

  var limitedArray = {};
  limitedArray.get = function(index){
    checkLimit(index);
    return storage[index];
  };

  limitedArray.set = function(index, key, value){
    checkLimit(index);
    if(storage[index] === undefined){
      var obj = {};
      obj[key] = value;
      storage[index] = obj;
    }
    else{
      var obj = {};
      obj[key] = value;
      extend(storage[index], obj);
    }

  };
  limitedArray.each = function(callback){
    for(var i = 0; i < storage.length; i++){
      callback(storage[i], i, storage);
    }
  };
  limitedArray.rtrn = function(){
    return storage;//[index];
  }

  var checkLimit = function(index){
    if(typeof index !== 'number'){ throw new Error('setter requires a numeric index for its first argument'); }
    if(limit <= index){ throw new Error('Error trying to access an over-the-limit index'); }
  };

  return limitedArray;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between the
// numbers 0 and `max`
var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};
*/


var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // if(this._storage[i] === undefined) {
  //   //debugger
  //   var obj = {};
  //   obj[k] = v;
  //   this._storage.set(i, obj);
  // }

  // else {
  //   var obj = {};
  //   obj[k] = v;
  //   extend(this._storage.rtrn()[i], obj);
  // }

  this._storage.set(i,k,v)

 // limitedArray.set = function(index, key, value){
 //    checkLimit(index);
 //    if(storage[index] === undefined){
 //      var obj = {};
 //      obj[key] = value;
 //      storage[index] = obj;
 //    }
 //    else{
 //      var obj = {};
 //      obj[key] = value;
 //      extend(storage[index], obj);
 //    }




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

  var bucket = this._storage.get(i);

  for(var key in bucket) {
    if(key === k) {
      return bucket[key];
    }
  }

  // limitedArray.get = function(index){
  //     checkLimit(index);
  //     return storage[index];
  //   };
};

HashTable.prototype.remove = function(k){

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
