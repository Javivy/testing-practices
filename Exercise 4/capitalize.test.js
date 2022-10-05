const capitalize = require('./capitalize.js');

test('Capitalize test', () => {
  expect(capitalize('hola')).toBe('Hola');
});

test('Capitalize test 2', () => {
  expect(capitalize('adios')).toBe('Adios');
});