import { getPrevItem, getNextItem } from './cycleArray';

const months = ['January', 'February', 'March', 'April', 'May'];

test('get previous item returns the correct item', () => {
  expect(months[getPrevItem(months, 0)]).toBe('May');
  expect(months[getPrevItem(months, 4)]).toBe('April');
  expect(months[getPrevItem(months, 3)]).toBe('March');
  expect(months[getPrevItem(months, 2)]).toBe('February');
  expect(months[getPrevItem(months, 1)]).toBe('January');
});

test('get next item returns the correct item', () => {
  expect(months[getNextItem(months, 0)]).toBe('February');
  expect(months[getNextItem(months, 1)]).toBe('March');
  expect(months[getNextItem(months, 2)]).toBe('April');
  expect(months[getNextItem(months, 3)]).toBe('May');
  expect(months[getNextItem(months, 4)]).toBe('January');
});
