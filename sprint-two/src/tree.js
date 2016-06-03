var extend = function(to, from) {
    for (var key in from) {
      to[key] = from[key];
    }
  };

var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  // newTree.size = 0;
  extend(newTree,treeMethods )

  newTree.children = null;  // fix me

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  if(this.children === null) {
    this.children = [];
  }
  this.children.push(Tree(value));
};

treeMethods.contains = function(target){


  if(this.value === target) {
      return true;
   }

    var chldrn = this.children;

    if(chldrn !== null) {
      for(var i = 0; i < chldrn.length; i++) {
        if(chldrn[i].contains(target)){
          return true;
        }
      }
    }
    return false;
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
