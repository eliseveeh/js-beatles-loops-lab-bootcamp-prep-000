function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (var x = 0; x < musicians.length; x++){
    array.push(musicians[x] +" plays " + instruments[x]);
  }
  return array;
}
