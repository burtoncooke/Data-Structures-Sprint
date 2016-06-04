
var Graph = function(){
 this.nodes = [];

};

Graph.prototype.addNode = function(node){

 this.nodes.push({value: node, edges: []});


};

Graph.prototype.contains = function(node){

 for(var i = 0; i < this.nodes.length; i++) {
   if(this.nodes[i].value === node) {
     return true;
   }
 }
 return false;
};

Graph.prototype.removeNode = function(node){

 for(var i = 0; i < this.nodes.length; i++) {
   if(this.nodes[i].value === node) {
     this.nodes.splice(i, i + 1);
   }
 }
};

Graph.prototype.hasEdge = function(fromNode, toNode){

 var has = true;

 for(var i = 0; i < this.nodes.length; i++) {
   var node = this.nodes[i];
   if(node.value === fromNode) {
     if(node.edges.includes(toNode) === false) {
       has =  false;
     }
   }
   if(node.value === toNode) {
     if(node.edges.includes(fromNode) === false) {
       has = false;
     }
   }
 }

 return has;

};

Graph.prototype.addEdge = function(fromNode, toNode){

 for(var i = 0; i < this.nodes.length; i++) {

   var val = this.nodes[i].value;
   if( val === fromNode) {
     this.nodes[i].edges.push(toNode);
   }
   if(val === toNode) {
     this.nodes[i].edges.push(fromNode);
   }
 }

};

Graph.prototype.removeEdge = function(fromNode, toNode){

 for(var i = 0; i < this.nodes.length; i++) {

   var node = this.nodes[i];
   if(node.value === fromNode) {
     var index = node.edges.indexOf(toNode);
     node.edges.splice(index, index + 1);
   }
   if(node.value === toNode) {
     var index = node.edges.indexOf(fromNode);
     node.edges.splice(index, index + 1);
   }
 }
};

Graph.prototype.forEachNode = function(cb){

 _.each(this.nodes, function(element) {
   cb(element.value);
 })
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



