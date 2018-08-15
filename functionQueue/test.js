
// // //sample tests with console.log
// test('steps called with n = 1', () => {
//   steps(1);
//   expect(console.log.mock.calls[0][0]).toEqual('#');
//   expect(console.log.mock.calls.length).toEqual(1);
// });
//
// test('steps called with n = 2', () => {
//   steps(2);
//   expect(console.log.mock.calls[0][0]).toEqual('# ');
//   expect(console.log.mock.calls[1][0]).toEqual('##');
//   expect(console.log.mock.calls.length).toEqual(2);
// });


//tests are still a work in progress. I have the basic test cases working in the browser and node so far

const { FunctionQueue } = require('./index');

const fnQ = new FunctionQueue();

const fn1 = (value) => {
  console.log(value);
}

const fn2 = (value) => {
  console.log('value is ', value);
}

fnQ.add(fn1);
fnQ.add(fn2);

beforeEach(() => {
  jest.spyOn(console, 'log');
});

afterEach(() => {
  console.log.mockRestore();
});

test('fnGenerator called with ')
