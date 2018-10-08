import { WordCount } from './journal.js';
import { VowelCount } from './journal.js';
import { ConsonantCount } from './journal.js';
import { GetTeaser } from './journal.js';
import './styles.css';

$(document).ready(function(){
  $('#journal-form').submit(function(event){
    event.preventDefault();
    var entrySentence = $("#entrySentence").val();
    var output = WordCount(entrySentence);
    var vowelCount = VowelCount(entrySentence);
    var consonantCount = ConsonantCount(entrySentence);
    var firstSentence = GetTeaser(entrySentence);


    $("#numberOfWords").text("Number of words : " + output);
    $("#numberOfVowels").text("Number of vowels : " + vowelCount);
    $("#numberOfConsonants").text("Number of consonants : " + consonantCount);
    $("#firstSentence").text("First Sentence: " + firstSentence);

  });
});
