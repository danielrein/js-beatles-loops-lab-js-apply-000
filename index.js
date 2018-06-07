function theBeatlesPlay(musicians, instruments) {
  let phrases = []
  for (i = 0; i < musicians.length; i++ ) {
    phrases.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return stringsArray
}

function johnLennonFacts(factsArray) {
  for (let fact in factsArray) {
    fact += '!!!'
  }
  return factsArray
}

function iLoveTheBeatles(n) {
  let array = []
  do {
    array.push('I love the Beatles!');
    n += 1
  } while n < 15
}
