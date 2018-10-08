export function WordCount(sentence) {
var words = sentence.split(" ");
var numberOfWords = words.length;
return numberOfWords;
}
export function VowelCount(sentence) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  var lowerSentence = sentence.toLowerCase();
  var splitSentence = lowerSentence.split("");
  var i = 0;
  splitSentence.forEach(function(letter){
    vowels.forEach(function(vowel){
      if(letter === vowel){
        i += 1;
      }
    });
  });
  return i;
}
  export function ConsonantCount(sentence) {
    const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    var lowerSentence = sentence.toLowerCase();
    var splitSentence = lowerSentence.split("");
    var x = 0;
    splitSentence.forEach(function(letter){
      consonants.forEach(function(consonants){
        if(letter === consonants){
          x += 1;
        }
      });
    });
    return x;
}








export function GetTeaser(sentence) {
  var stringArray = sentence.split('.');
  var firstSentenceArray = stringArray[0].split(' ');
  var returnSentence = "";
  if (firstSentenceArray.length > 8) {
    for (var i = 0; i < 8; i++) {
      returnSentence += i;
    }
  } else {
    returnSentence = firstSentenceArray.join(' ');
  }
  return returnSentence;
}
