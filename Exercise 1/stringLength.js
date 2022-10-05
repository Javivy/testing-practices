function stringLength(str) {
  if (str.length >= 1 && str.length <= 10) {
    return str.length;
  }
  throw new Error('Please verify that the length of your string is more than or equal to 1, or less than or equal to 10');
}

module.exports = stringLength;