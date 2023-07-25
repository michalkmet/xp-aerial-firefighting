function waterbombs(fire, waterbombStrenght) { 
  if (!fire.includes('x')) {
    return 0;
  }
  let waterbombsCount = 0;
  // let waterbombStillActive = 0;
  console.log('fire.length: ', fire.length);
  console.log('waterbombStrenght: ', waterbombStrenght);

  let fieldsArr = fire.split('Y');
  console.log('fieldsArr: ', fieldsArr);
  for (let field of fieldsArr) {
    console.log('field: ', field);
    if (field.length <= waterbombStrenght) {
      waterbombsCount++;
    } else {
      // we need to split field by waterbombStrenght
    }
  }
  console.log('waterbombsCount: ', waterbombsCount);
  return waterbombsCount;
}

module.exports = waterbombs;
