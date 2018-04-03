function theBeatlesPlay(musicianArray, instrumentArray) {
  let beatlesPlayArray = new Array();
  for (let i = 0; i < musicianArray.length; i++) {
    beatlesPlayArray.push(`${musicianArray[i]} plays ${instrumentArray[i]}`);
  }
  return beatlesPlayArray;
}
