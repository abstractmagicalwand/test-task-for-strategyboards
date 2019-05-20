const {Ranges} = require('./ranges');


const r = new Ranges();

test('Should display [1, 4]', () => {
  r.add([1, 4]);
  expect(r.print()).toBe('[1, 4]');
});

test('Should display [1, 4] [10, 20]', () => {
  r.add([10, 20]);
  expect(r.print()).toBe('[1, 4] [10, 20]');
});

test('Should display [1, 4] [10, 20]', () => {
  r.add([10, 10]);
  expect(r.print()).toBe('[1, 4] [10, 20]');
});

test('Should display [1, 4] [10, 21]', () => {
  r.add([21, 21]);
  expect(r.print()).toBe('[1, 4] [10, 21]');
});

test('Should display [1, 4] [10, 21]', () => {
  r.add([2, 4]);
  expect(r.print()).toBe('[1, 4] [10, 21]');
});

test('Should display [1, 8] [10, 21]', () => {
  r.add([3, 8]);
  expect(r.print()).toBe('[1, 8] [10, 21]');
});

test('Should display [1, 8] [11, 21]', () => {
  r.remove([10, 10]);
  expect(r.print()).toBe('[1, 8] [11, 21]');
});

test('Should display [1, 8] [12, 21]', () => {
  r.remove([10, 11]);
  expect(r.print()).toBe('[1, 8] [12, 21]');
});

test('Should display [1, 8] [12, 14] [18, 21]', () => {
  r.remove([15, 17]);
  expect(r.print()).toBe('[1, 8] [12, 14] [18, 21]');
});

test('Should display [1, 2] [20, 21]', () => {
  r.remove([3, 19]);
  expect(r.print()).toBe('[1, 2] [20, 21]');
});

test('Should display [1, 20]', () => {
  const r = new Ranges();
  r.add([1, 10]);
  r.add([5, 20]);
  expect(r.print()).toBe('[1, 20]');
});

test('Should display [1, 30] [100, 200]', () => {
  const r = new Ranges();
  r.add([1, 10]);
  r.add([100, 200]);
  r.add([20, 30]);
  r.add([1, 30]);

  expect(r.print()).toBe('[1, 30] [100, 200]');
});

test('Should display [1, 10] [50, 200]', () => {
  const r = new Ranges();
  r.add([1, 10]);
  r.add([100, 200]);
  r.add([50, 150]);

  expect(r.print()).toBe('[1, 10] [50, 200]');
});

test('Should display [1, 10] [50, 200]', () => {
  const r = new Ranges();
  r.add([1, 10]);
  r.add([100, 200]);
  r.add([50, 99]);

  expect(r.print()).toBe('[1, 10] [50, 200]');
});

test('Should display [1, 200]', () => {
  const r = new Ranges();
  r.add([1, 10]);
  r.add([50, 80]);
  r.add([100, 200]);
  r.add([10, 150]);

  expect(r.print()).toBe('[1, 200]');
});

test('Should display [1, 150]', () => {
  const r = new Ranges();
  r.add([1, 10]);
  r.add([50, 80]);
  r.add([100, 145]);
  r.add([10, 150]);

  expect(r.print()).toBe('[1, 150]');
});

test('Should display [1, 10] [35, 150]', () => {
  const r = new Ranges();
  r.add([1, 10]);
  r.add([40, 45]);
  r.add([50, 80]);
  r.add([35, 150]);

  expect(r.print()).toBe('[1, 10] [35, 150]');
});

test('Should display [1, 10] [35, 70]', () => {
  const r = new Ranges();
  r.add([1, 10]);
  r.add([40, 55]);
  r.add([57, 58]);
  r.add([60, 70]);
  r.add([35, 65]);

  expect(r.print()).toBe('[1, 10] [35, 70]');
});
