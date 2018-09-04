//these are some notes on graph studies I've been doing....

//also see https://medium.com/basecs/a-gentle-introduction-to-graph-theory-77969829ead8

//ways to represent graphs
//notes based on the following video : https://www.youtube.com/watch?v=DBRW8nwZV-g
//1. adjacency list
// ex/
// const undirectedGraph = {
//   Node1: ['Node2', 'Node3'],
//   Node2: ['Node1'],
//   Node3: ['Node3']
// }
//or...
// const undirectedGraphArr = [
//             [1,2], // Node1
//             [0],   // Node2
//             [2]    // Node3
//  ]
// or adjacency matrix like so...
//   a b c d e
// a 0 1 1 1 0
// b 0 0 1 0 0
// c 1 1 0 0 0
// d 0 0 0 1 0
// e 0 1 0 0 0
//
// where each number is whether or not there is an edge between those nodes
// can be represented in an array like so (each column and row is a node)
//
// const adjacencyMatrix = [
// 	 [0, 1, 1, 1, 0], //node at index 0
//   [0, 0, 1, 0, 0], //node at index 1 etc...
//   [1, 1, 0, 0, 0],
//   [0, 0, 0, 1, 0],
//   [0, 1, 0, 0, 0]
// ]

// example of directed graph done as adjacency adjacency matrix
//  a <-- b <-- c
// const adjMatrix = [
//  [0, 0, 0]    //represents a
//  [1, 0, 0]    //represents b
//  [0, 1, 0]    //represents c
// ]
//

// incidence matrix
// rows represent nodes, columns represent edges

// for an undirected graph use a 1 to represent whether or not that node connects to that edge
// for a directed graph use a -1 for when the node has that edge leaving it, and a 1 for when the edge enters it, 0 for no connection
// weights can be given to these numbers as well by representing them greater than 1


//checkout node package : https://www.npmjs.com/package/graphs-all
