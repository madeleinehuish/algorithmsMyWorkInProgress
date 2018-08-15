class FunctionQueue {
	constructor() {
		this.queue = new Map();
	}
	add(fn) {
		this.queue.set(fn, 'enabled');
	}
	delete(fn) {
		this.queue.delete(fn)
	}
	enable(fn) {
		this.queue.set(fn, 'enabled');
	}
	disable(fn) {
		this.queue.set(fn, 'disabled');
	}
	fire(value) {
		let functionArray = this.queue.keys();

		for(let f of functionArray) {
			f(value);
		}
	}
}

let fg = new FunctionQueue();

const fn1 = (value) => {
  console.log(value);
}

const fn2 = (value) => {
  console.log('value is ', value);
}


fg.add(fn1);
fg.add(fn2);
fg.fire('Madeleine');
