const reverseString = require('./reverseString.js');

it('Successfull', () => {
  expect(reverseString('Hola')).toBe('aloH');
});