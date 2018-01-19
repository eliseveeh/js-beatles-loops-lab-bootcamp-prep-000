function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (var x = 0, x < musicians.length; x++){
    array.push("${musicians[x]} plays ${instruments[x]}.")
  }
  return array;
}

function johnLennonFacts(facts){
  var counter = 0;
  while (counter < facts.length){
    facts[counter] = facts[counter] + "!!!";
    counter++
  }
  return facts;
}
