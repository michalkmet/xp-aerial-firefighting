function waterbombs(fire, waterbombStrenght) { 
  if (!fire.includes('x')) {
    return 0;
  }
  let waterbombsCount = 0;
  // let waterbombStillActive = 0;

  for (let i = 0; i < fire.length; i++) {
    console.log('fire[i] ', fire[i]);
    if (fire[i] === 'x') {
      waterbombsCount++;
      if (waterbombStrenght > 1) {
        if (fire[i + 1] === 'x') {
          break;
        }
      }
    } else {
      continue;
    }
  }
  console.log('waterbombsCount: ', waterbombsCount);
  return waterbombsCount;
}

module.exports = waterbombs;
