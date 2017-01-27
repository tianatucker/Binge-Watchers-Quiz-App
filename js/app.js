$(document).ready(function(){

$('form').change(function(){
	$('input[type="button"]').prop({
		disabled: false
	})

$('#next-btn').click(function(){
	var userResponse = $('input[name=radio-btn]:checked', '#current-question').val();
	userAnswers.push(userResponse);
	$('h3.question').replaceWith('<h3 class="question">' + questions[1] + '</h3>');
	$('label[for=radio1]').replaceWith('<label for="radio1">' + radio1Choices[1] + '</label>');
	$('label[for=radio2]').replaceWith('<label for="radio2">' + radio2Choices[1] + '</label>');
	$('label[for=radio3]').replaceWith('<label for="radio3">' + radio3Choices[1] + '</label>');
	console.log(userAnswers);
})

});

/*$('#next-btn').click(function(){
	var userResponse = $('input[name=radio-btn]:checked', '#current-question').val();
	console.log(userResponse);
if (typeof $('input[name=radio-btn]:checked').val() != undefined){
alert('Select one')
} else {
	userAnswers.push(userResponse);
	console.log(userAnswers);
}
})*/
});

//Check that value is selected
//Check value for correct response
//Add tally to score if response is correct
//You need user states for each game
//Need to regenerate the html with jquery in order to get the right values for each round of questions


//User Responses
var userAnswers = []

var questionOne = ['Which show was the most expensive to produce in television history?','Game of Thrones', 'The Crown', 'Marco Polo']

var questionTwo = ['Which show crashed the Netflix application upon being release during the fall of 2016?', 'Gilmore Girls', 'Black Mirror', 'Luke Cage']

var questionThree = ['Which show is based on a fictional history novel about the United States losing World War II?', 'The Aftermath', 'The Man in the High Castle', 'The Colony']

var questionFour = ['What is the surname of the power couple in House of Cards?', 'The Habermans', 'The Lindlemans', 'The Underwoods']

var questionFive = ['Which series was canceled by a major tradidtional network after season three then picked up by Hulu?', 'The Mindy Project', 'Difficult People', 'Casual']

//Correct answers
var correctAnswers = ['The-Crown','Luke-Cage','The-Man-in-the-High-Castle', 'The-Underwoods', 'The-Mindy-Project']
//Correct answers radio button position value
var correctRadios = ['radio2', 'radio3', 'radio2', 'radio3', 'radio1']
