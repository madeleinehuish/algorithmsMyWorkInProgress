function matrixZero(grid) {

	let rowLength = Math.sqrt(grid.length);
	let newGrid = new Array(grid.length).fill('x')

	for(let i=0; i < grid.length; i++) {
		//get current row and columns
		let row = Math.floor(i / rowLength);
    let col = i % rowLength;
		//check if current index has a zero
		if(grid[i]===[0]){
			//if it does make all column/rows at current in newgrid a zero. if not, put current index content at new grid index
			//
		}

	}

	return newGrid;
}

module.exports = { matrixZero }
