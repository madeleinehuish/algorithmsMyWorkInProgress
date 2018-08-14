//given array of [[4,3], [3,2], [3,1], [1,0]]
//do jobs only if first doesn't have a dependency

class Node {
	constructor(name) {
		this.name = name.toString();
		this.edges = [];
	}

	addEdge(node) {
		this.edges.push(node.toString());
	}
}


//function takes in an array of paired arrays
function jobs(arr) {

	//joblist is the array list translated into an object, jobsCheckedOff is an array to check for circular elements
	let jobList = {};
	let jobsCheckedOff = [];

	//generate the jobList
	for(let pair of arr) {

		if(!jobList.hasOwnProperty(pair[0])) {
			jobList[pair[0]] = new Node(pair[0]);
		}
		if(!jobList.hasOwnProperty(pair[1])) {
			jobList[pair[1]] = new Node(pair[1]);
		}
		jobsCheckedOff.push(jobList[pair[0]].name + jobList[pair[1]].name);
		jobList[pair[0]].addEdge(pair[1]);

	}

	//check for circular error
	if(checkForCircular(jobsCheckedOff)) throw new Error('Circular reference detected') ;

	let resolved = [];

	//use dependencyResolve function to create proper job order in resolved array
	dependencyResolve(jobList[arr[0][0]], resolved);

	//print out jobs in proper execution order
	console.log('\n', 'Printing out jobs in order of dependency resolution', '\n');

	let jobExecutionOrder = [];
	for(let node of resolved) {
		jobExecutionOrder.push(node.name);
		console.log(node.name);
	}

	return jobExecutionOrder;

	//first of two inner functions
	function dependencyResolve(node, resolved) {

		if (typeof node !== 'object') {
			node = jobList[node.toString()];
		}

		for(let edge of jobList[node.name].edges) {
			if(!resolved.includes(edge)) {
				dependencyResolve(edge, resolved);
			}
		}

		if(!resolved.includes(node)) {
			resolved.push(node);
	  }
	}

	//second of two inner functions
	function checkForCircular(arr) {
		for(let elem of arr) {
			let reversed = elem[1] + elem[0];
			if(arr.includes(reversed)) {
				return true;
			}
		}
		return false;
	}

}



module.exports = { Node, jobs };







































//
//
//
//
// class Node {
// 	constructor(name) {
// 		this.name = name;
// 		this.edges = [];
// 	}
//
// 	addEdge(node) {
// 		this.edges.push(node);
// 	}
// }
//
// let n4 = new Node('4');
// let n3 = new Node('3');
// let n2 = new Node('2');
// let n1 = new Node('1');
// let n0 = new Node('0');
//
// n4.addEdge(n3);
// n3.addEdge(n2);
// n3.addEdge(n1);
// n1.addEdge(n0);
//
// let resolved = [];
// let unresolved = [];
//
// function dependencyResolve(node, resolved, unresolved) {
// 	unresolved.push(node);
// 	for(let edge of node.edges) {
// 		if(!resolved.includes(edge)) {
// 			if(unresolved.includes(edge)) {
// 				throw "Circular reference detected";
// 			}
// 			dependencyResolve(edge, resolved, unresolved);
// 		}
// 	}
// 	resolved.push(node);
// }
//
// dependencyResolve(n4, resolved, unresolved);
//
// for(let node of resolved) {
// 	console.log(node.name);
// }
//
// function addJobs(arr) {
// 	let jobList = {};
// 	for(let pair of arr) {
// 		if(!jobList.hasOwnProperty(pair[0])) {
// 			jobList[pair[0]] = new Node(pair[0]);
// 			jobList[pair[0]].addEdge(pair[1]);
// 		}
// 		if(!jobList.hasOwnProperty(pair[1])) {
// 			jobList[pair[1]] = new Node(pair[1]);
// 		}
// 	}
//
// 	let resolved = [];
// 	let unresolved = [];
//
// 	dependencyResolve(jobList[pair[0]], resolved, unresolved);
//
// 	for(let node of resolved) {
// 		console.log(node.name);
// 	}
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// class Node {
// 	constructor(name) {
// 		this.name = name.toString();
// 		this.edges = [];
// 	}
//
// 	addEdge(node) {
// 		this.edges.push(node.toString());
// 	}
// }
//
// let jobList = {};
// // let jobArr = [[4,3], [3,2], [3,1], [1,0]];
// let jobArr = [[6,5], [6,4], [5,4], [5,3], [5,2], [4,3], [3,2], [3,1], [1,0]];
// addJobs(jobArr);
//
// function addJobs(arr) {
//
//   for(let pair of arr) {
// 		if(!jobList.hasOwnProperty(pair[0])) {
// 			jobList[pair[0]] = new Node(pair[0]);
// 		}
// 		if(!jobList.hasOwnProperty(pair[1])) {
// 			jobList[pair[1]] = new Node(pair[1]);
// 		}
//     jobList[pair[0]].addEdge(pair[1]);
// 	}
//
//   console.log('jobList: ', jobList);
// 	let resolved = [];
// 	let unresolved = [];
//
// 	dependencyResolve(jobList[arr[0][0]], resolved, unresolved);
//
//   console.log('\n', 'Printing out jobs in order of dependency resolution', '\n');
// 	for(let node of resolved) {
// 		console.log(node.name);
// 	}
// }
//
// function dependencyResolve(node, resolved, unresolved) {
// 	unresolved.push(node);
//   if (typeof node !== 'object') {
//     node = jobList[node.toString()];
//   }
//
// 	for(let edge of jobList[node.name].edges) {
// 		if(!resolved.includes(edge)) {
// 			if(unresolved.includes(edge)) {
// 				throw "Circular reference detected";
// 			}
// 			dependencyResolve(edge, resolved, unresolved);
// 		}
// 	}
// 	resolved.push(node);
// }
