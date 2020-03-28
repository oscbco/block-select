import toTitleCase from './titleCase';

test('Title case of item is Item', () => {
  expect(toTitleCase('item')).toBe('Item');
});
