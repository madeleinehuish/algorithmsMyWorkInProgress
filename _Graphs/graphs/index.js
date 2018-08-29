const adjacencyMatrix = [
	[0, 1, 1, 1, 0], //node at index 0
  [0, 0, 1, 0, 0], //node at index 1 etc...
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0]
]

// breadth first search (finds distance away of all nodes, inputing a graph and starting node)
// based on following tutorial : https://www.youtube.com/watch?v=wu0ckYkltus
function bfs(graph, root) {
  let nodesLen = {};

  for(let i=0; i < graph.length; i++) { //start all node distances at infinity
    nodesLen[i] = Infinity;
  }

  nodesLen[root] = 0;

  let queue = [root];
  let current;

  while(queue.length !== 0) {
    current = queue.shift();

    let curConnected = graph[current]; //gets current node
    let neighborIdx = [];              //array set up to hold all neighbors of that node
    let idx = curConnected.indexOf(1); //looking for 1, which means node is connected to that node
    while(idx !== -1) {                //keep cycling through and adding nodes that are connected
      neighborIdx.push(idx);
      idx = curConnected.indexOf(1, idx + 1);
    }

    for(let j=0; j < neighborIdx.length; j++) { //now that we know all nodes connected to current node we loop through all those connections to get the distance
      if(nodesLen[neighborIdx[j]] === Infinity) { //if = to infinity, means we haven't set the distance yet
        nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
        queue.push(neighborIdx[j]);
      }
    }
  }
  return nodesLen;
}

// console.log(bfs(adjacencyMatrix, 1))

//pathfinding algorithms using breadth and depth first search : https://www.youtube.com/watch?v=F6oYjQc_tNM
//also : http://bryukh.com/labyrinth-algorithms/
const adjacencyMatrixTestMaze = [
	[1, 1, 0, 0, 0], //node at index 0
  [0, 1, 1, 1, 0], //node at index 1 etc...
  [0, 0, 0, 1, 0],
  [0, 0, 0, 1, 1],
  [0, 0, 0, 0, 1]
]
