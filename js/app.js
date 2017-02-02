$(document).ready(function(){
var userQuest = {
	started:false,
	currentProgress: 0,
}

var myIndex = -1;

/*function newButton(){
var noClick = $('input[type="button"]').replaceWith('<input type="button" value="Next" id="next-btn" disabled="true" />');

$('input[type="radio"]').change(function(){
	$('input[type="button"]').prop({
		disabled: false
	})
})
}*/
var userAnswers = []

$('.quiz-here').html(renderQuestion());

renderQuestion();
function renderQuestion(){
	var c = userQuest.currentProgress;
	var q = quiz[c];
	var p = c +1;
	var l = 5 - p;
	var html = '<h3 class="question">'+'Question '+ p +'<br>' + q.prompt + '</h3>' + '<h6>' + l + ' questions remaining' + '</h6>'
	c++
	for (var i=0; i<q.options.length;i++){
		var a = q.options[i];
		html+= '<br><input type="radio" name="radio-btn" value="'+ q.options[i]+'"><label for="radio3" value="'+q.options[i]+'">' + q.options[i] + '</label><br>'
	}
	return html;
}

/*function gameOver() {
	var html = '<h3>' + 'You\'ve finished the game' + '</h3>'
	return html;
}*/

$('#next-btn').click(function(){
	myIndex++;
	userQuest.currentProgress++;
	var userResponse = $('input[name=radio-btn]:checked').val();
	userAnswers.push(userResponse);
	if (userResponse == undefined) {
		alert("Please select one to continue.")
		userQuest.currentProgress--
		myIndex--
		userAnswers.pop();
} else if (myIndex >= 4) {
	$('div.quiz-here').replaceWith('<h3>' + 'You\'ve finished the game' + '</h3>');
} else {
	$('.quiz-here').html(renderQuestion());
	//newButton();
	console.log(userAnswers);
	console.log(myIndex);
	}  /*if (quiz.prompt == undefined) {
	$('.quiz-here').html(gameOver());
}*/
})
});

/*	html+= $('.quiz-here').append('<br><input type="radio" name="radio-btn" value="'+ q.options[userQuest.currentProgress]+'"><label for="radio3" value="'+q.options[userQuest.currentProgress]+'">' + q.options[i] + '</label><br>');*/

/*function moreQuestions(){
$('h3.question').replace('<h3 class="question">' + quiz.question[0] + '</h3>');
$('input#radio1').replaceWith('<input type="radio" name="radio-btn" value="'+ allQuestions[1]+'" id="radio1">');
$('label[for=radio1]').replaceWith('<label for="radio1"  value="'+allQuestions[1]+'">' + allQuestions[1] + '</label>');
$('input#radio2').replaceWith('<input type="radio" name="radio-btn" value="'+ allQuestions[2]+'" id="radio2">');
$('label[for=radio2]').replaceWith('<label for="radio2" value="'+allQuestions[2]+'">' + allQuestions[2] + '</label>');
$('input#radio3').replaceWith('<input type="radio" name="radio-btn" value="'+allQuestions[3]+'" id="radio2">');
$('label[for=radio3]').replaceWith('<label for="radio3" value="'+allQuestions[3]+'">' + allQuestions[3] + '</label>');
}
$('form').change(function(){
	$('input[type="button"]').prop({
		disabled: false
	})
	});
	var q = quiz[n];
$('.next-btn').click(function(){
	var userResponse = $('input[name=radio-btn]:checked', '#current-question').val();
	userAnswers.push(userResponse);
	n++;
	$(this).prop({
		disabled: true
	})
});*/


/*$('form').change(function(){
	$('input[type="button"]').prop({
		disabled: false
	})
	});
//} else

/*$('#next-btn').click(function(){
	var userResponse = $('input[name=radio-btn]:checked', '#current-question').val();
	userAnswers.push(userResponse);
	questionNum +4
	moreQuestions()
	/*$('h3.question').replaceWith('<h3 class="question">' + questions[1] + '</h3>');
	$('label[for=radio1]').replaceWith('<label for="radio1">' + radio1Choices[1] + '</label>');
	$('label[for=radio2]').replaceWith('<label for="radio2">' + radio2Choices[1] + '</label>');
	$('label[for=radio3]').replaceWith('<label for="radio3">' + radio3Choices[1] + '</label>');
	console.log(userAnswers);*/

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

//Check that value is selected
//Check value for correct response
//Add tally to score if response is correct
//You need user states for each game
//Need to regenerate the html with jquery in order to get the right values for each round of questions

/*var allQuestions = ['Which show was the most expensive to produce in television history?','Game of Thrones', 'The Crown', 'Marco Polo', 'Which show crashed the Netflix application upon being release during the fall of 2016?', 'Gilmore Girls', 'Black Mirror', 'Luke Cage', 'Which show is based on a fictional history novel about the United States losing World War II?', 'The Aftermath', 'The Man in the High Castle', 'The Colony', 'What is the surname of the power couple in House of Cards?', 'The Habermans', 'The Lindlemans', 'The Underwoods', 'Which series was canceled by a major tradidtional network after season three then picked up by Hulu?', 'The Mindy Project', 'Difficult People', 'Casual']*/

var quiz =[
		{
			prompt: 'Which show was the most expensive to produce in television history?',
			options:[
				'Game of Thrones',
				'The Crown',
				'Marco Polo'
			],
		},
		{
			prompt: 'Which show crashed the Netflix application upon being release during the fall of 2016?',
			options:[
				'Gilmore Girls',
				'Black Mirror',
				'Luke Cage'
			],
		},
		{
			prompt: 'Which show is based on a fictional history novel about the United States losing World War II?',
			options:[
				'The Aftermath',
				'The Man in the High Castle',
				'Luke Cage'
			],
		},
		{
			prompt: 'What is the surname of the power couple in House of Cards?',
			options:[
				'The Habermans',
				'The Lindlemans',
				'The Underwoods'
			],
		},
		{
			prompt: 'Which series was canceled by a major tradidtional network after season three then picked up by Hulu?',
			options: [
				'The Mindy Project',
				'Difficult People',
				'Casual'
			],
		}
	];
var questionOne = ['Which show was the most expensive to produce in television history?','Game of Thrones', 'The Crown', 'Marco Polo']

var questionTwo = ['Which show crashed the Netflix application upon being release during the fall of 2016?', 'Gilmore Girls', 'Black Mirror', 'Luke Cage']

var questionThree = ['Which show is based on a fictional history novel about the United States losing World War II?', 'The Aftermath', 'The Man in the High Castle', 'The Colony']

var questionFour = ['What is the surname of the power couple in House of Cards?', 'The Habermans', 'The Lindlemans', 'The Underwoods']

var questionFive = ['Which series was canceled by a major tradidtional network after season three then picked up by Hulu?', 'The Mindy Project', 'Difficult People', 'Casual']

//Correct answers
var correctAnswers = ['The Crown','Luke Cage','The Man in the High Castle', 'The Underwoods', 'The Mindy Project']
//Correct answers radio button position value
var correctRadios = ['radio2', 'radio3', 'radio2', 'radio3', 'radio1']

//Need to figure out which question the user is on at each stage

//Need to implement a session/run-time state to move b/w each question



