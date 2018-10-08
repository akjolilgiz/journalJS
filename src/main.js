import { Entry } from './journal.js';
import './styles.css';

$(document).ready(function(){
  $('#journal-form').submit(function(event){
    event.preventDefault();
    var entrySentence = $("#entrySentence").val();
    var output = Entry(entrySentence);

    $("#numberOfWords").append("Number of words : " + output);

  });
});
