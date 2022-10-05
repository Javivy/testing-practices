function capitalize(str) {
  const firstLetter = str.split('').splice(0, 1).join('').toUpperCase();
  const newStr = str.replace(str[0], firstLetter);
  return newStr;
}

module.exports = capitalize;