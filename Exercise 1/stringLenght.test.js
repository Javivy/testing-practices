const stringLength = require('./stringLength.js');

it('Successfull', () => {
  expect(stringLength('Hola')).toBe(4);
});

it('Throw Error', () => {
  expect(stringLength('')).toThrow(Error);
});