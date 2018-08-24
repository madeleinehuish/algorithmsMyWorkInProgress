const myFunc = () => {
	return function (val) {
		console.log(val);
	}
}

myFunc()('Madeleine') //'Madeleine'


const add = (a) => {
	return (b) => {
		return (c) => {
			return a+b+c;
		}
	}
}

add(1)(2)(3) //'6'
