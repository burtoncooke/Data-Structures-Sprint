var BinarySearchTree = function(value){

  var bsTree = {value:value, left: null, right: null};

  bsTree.insert = function(val, innerObj){
      //check value
        //greater than or less than?
      var obj;
      if(arguments.length === 1){
        obj = bsTree;
      }
      else{
        obj = innerObj;
      }

      var node = {value: val, left: null, right: null};

      if(val > obj.value){
        if(obj.right === null){
          obj.right = node
        }
        else{
          bsTree.insert(val,obj.right)
        }
      }

      else{
        if(obj.left === null){
          obj.left = node;
        }
        else{
          bsTree.insert(val,obj.left)
        }
      }
  }

  bsTree.contains = function(val,innerObj){

      var obj;
      if(arguments.length === 1){
        obj = bsTree;
        if(val === obj.value){
          return true;
        }
      }
      else{
        obj = innerObj;
      }


      if(val > obj.value){
        if(obj.right === null){
          return false;
        }
        else if(obj.right.value === val){

          return true;
        }
        else{

          return bsTree.contains(val, obj.right)
        }
      }

      else{
        if(obj.left === null){

          return false;
        }
        else if(obj.left.value === val){

          return true;
        }
        else{

          return bsTree.contains(val, obj.left)
        }
      }

  }
  bsTree.depthFirstLog = function(callback){

  }
  return bsTree;
};



//first insert is top node in tree
//if undefined inititialize top node
//then go to left or right key for subsequent nodes
//insert creates new object with value, left, and right keys

/*
 * Complexity: What is the time complexity of the above functions?
 */

