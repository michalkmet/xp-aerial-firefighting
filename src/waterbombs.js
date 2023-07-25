function waterbombs(fire, waterbombStrenght) { 
  if (!fire.includes('x')) {
    return 0;
  }
  let waterbombsCount = 0;
  let waterbombStillActive = 0;

  for (let i = 0; i < fire.length; i++) {
    console.log('fire[i] ', fire[i]);
    if (fire[i] === 'x') {
      if (waterbombStillActive > 0) {
        waterbombStillActive--;
      } else {
        waterbombsCount++;
        waterbombStillActive = waterbombStrenght;
      }
    } else {
      continue;
    }
  }
  console.log('waterbombsCount: ', waterbombsCount);
  return waterbombsCount;

  // [...fire].map((field) => {
    
  //   if (field === 'x') {
  //     if (waterbombStillActive === 0) {
  //       waterbombsCount++;
  //     } else {
  //       waterbombStillActive - 1;
  //     }
  //   }
  // });
  // return waterbombsCount;
}

module.exports = waterbombs;
