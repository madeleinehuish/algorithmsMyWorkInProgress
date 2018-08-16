const reverse = require('./index');
const L = require('./linkedlist');
const Node = L.Node;
const LinkedList = L.LinkedList;

test('reverse is a function', () => {
  expect(typeof reverse).toEqual('function');
});

describe('Successfully reverses a list', () => {
  test('when the list has 3 elements', () => {
    const l = new LinkedList();
    l.insertLast('a');
    l.insertLast('b');
    l.insertLast('c');

    const newList = reverse(l);

    expect(newList.getLast().data).toEqual('a');
    expect(newList.getFirst().data).toEqual('c');
  });

  test('when the list has 5 elements', () => {
    const l = new LinkedList();
    l.insertLast('a');
    l.insertLast('b');
    l.insertLast('c');
    l.insertLast('d');
    l.insertLast('e');

    const newList = reverse(l);

    expect(newList.getLast().data).toEqual('a');
    expect(newList.getFirst().data).toEqual('e');
  });
});
