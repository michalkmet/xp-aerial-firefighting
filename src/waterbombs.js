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
        for (let j = 0; j < waterbombStrenght; j++) {
          console.log('j: ', j);
          console.log('i: ', i);
          console.log('i+j: ', i + j);
          if (i + j != 0 && fire[i + j] === 'x') {
            console.log("fire[i + j] === 'x'");
            i++;
          } else {
            continue;
          }
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
