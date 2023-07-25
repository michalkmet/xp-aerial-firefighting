function waterbombs(fire, waterbombStrenght) { 
  if (!fire.includes('x')) {
    return 0;
  }
  let waterbombsCount = 0;
  let fieldsArr = fire.split('Y');
  for (let field of fieldsArr) {
    if (field === '') continue;
    if (field.length <= waterbombStrenght) {
      waterbombsCount++;
    } else {
      let fieldsChunks = [];
      for (let i = 0; i < field.length; i++) {
        fieldsChunks.push(field.slice(0, waterbombStrenght));
      }
      waterbombsCount += fieldsChunks.length;
    }
  }
  return waterbombsCount;
}

module.exports = waterbombs;
