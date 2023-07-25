function waterbombs(fire) {
  if (fire === 'Y' || fire === 'YY') {
    return 0;
  }
  return 1;
}

module.exports = waterbombs;
