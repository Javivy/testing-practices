function capitalize(str) {
  if (typeof str === 'string') {
    const firstLetter = str.split('').splice(0, 1).join('').toUpperCase();
    const newStr = str.replace(str[0], firstLetter);
    return newStr;
  }
  throw new Error('You must write a word for the function to work');
}

module.exports = capitalize;