var SimpleGraph = (function() {
	'use strict';

	function SimpleGraph() {
		// enforces new
		if (!(this instanceof SimpleGraph)) {
			return new SimpleGraph();
		}
		
		this.edges = {};

		// if((typeof adjacencyList === "object") && (adjacencyList !== null)) {
		// 	for (var vertex in adjacencyList) {
		// 		if (adjacencyList.hasOwnProperty(vertex)) {
		// 			this.addVertex(vertex);
		// 			for (var i = 0; i < this.edges[vertex]; i++) {
		// 				console.log(i);
		// 			};
		// 		}
		// 	}
		// }


	}


	SimpleGraph.prototype.addVertex = function(vertex) {

		if ((vertex in this.edges == false)) {
			this.edges[vertex] = [];
		};

	};

	
	function isExists (list, item){
		for (var i = 0; i < list.length; i++) {
			if (list[i] == item) {return true};
		};

		return false;
	}

	SimpleGraph.prototype.addEdge = function(sourceVertex, destenationVertex) {
		
		if ((sourceVertex in this.edges == false)) {
			this.edges[sourceVertex] = [];
		};

		if ((destenationVertex in this.edges == false)) {
			this.edges[destenationVertex] = [];
		};

		if ((isExists(this.edges[sourceVertex], destenationVertex)) == false) {
			this.edges[sourceVertex].push(destenationVertex)
		};

		if ((isExists(this.edges[destenationVertex], sourceVertex)) == false) {
			this.edges[destenationVertex].push(sourceVertex)
		};

	};

	SimpleGraph.prototype.isEdge = function(sourceVertex, destenationVertex) {
		
		if ((sourceVertex in this.edges == false)) {
			return false;
		};

		if ((destenationVertex in this.edges == false)) {
			return false;
		};
	
		return destenationVertex in this.edges[sourceVertex];
	
	};

	SimpleGraph.prototype.getAdjacencyList = function() {
		// method body
		return this.edges;
	};



	return SimpleGraph;

}());




//test code
// var graph = new SimpleGraph();
// graph.addVertex(4);
// graph.addVertex(6);
// graph.addVertex(7);
// graph.addEdge(4, 6);
// graph.addVertex(8);
// graph.addEdge(6, 8);
// console.log(graph.getAdjacencyList());

// simple = {1 : [2, 3, 5],
//           2 : [1, 4],
//           3 : [1],
//           4 : [2, 5],
//           5 : [1, 4] }

// var graph = new SimpleGraph(simple);
// console.log(graph.getAdjacencyList());