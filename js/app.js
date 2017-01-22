$(document).ready(function(){

$('#next-btn').click(function(){
	var userResponse = $('input[name=radio-btn]:checked', '#current-question').val();
	console.log(userResponse);
if (typeof $('input[name=radio-btn]:checked').val() != undefined){
alert('Select one');
} else {
	userAnswers.push('userResponse');
	console.log(userAnswers);
}
})
});

//Check that value is selected
//Check value for correct response
//Add tally to score if response is correct

//User Responses
var userAnswers = []

//Correct answers
var correctAnswers = ['The-Crown','Luke-Cage','The-Man-in-the-High-Castle', 'The-Underwoods', 'The-Mindy-Project']

//All Questions
var questions = ['Which show was the most expensive to produce in television history?','Which show chashed Netflix upon being release during the fall of 2016?','Which show is based on a fictional history novel about the United States losing World War II?','What is the surname of the main characters in the House of Cards?','Which series was canceled by a major tradidtional network after season three then picked up by Hulu?']

//Question One Choices
var choicesQ1 = ['Game of Throne', 'The Crown', 'Marco Polo']

//Question Two Choices
var choicesQ2 = ['Gilmore Girls', 'Black Mirror', 'Luke Cage']

//Question Three Choices
var choicesQ3 = ['The Aftermath', 'The Man in the High Castle', 'The Colony']

//Question Four Choices
var choicesQ4	= ['The Habermans', 'The Lindlemans', 'The Underwoods']

//Question Five Choices
var chociesQ5 = ['The Mindy Project', 'Difficult People', 'Casual']