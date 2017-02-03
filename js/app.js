$(document).ready(function(){
var currentProgress = 0;
var myIndex = -1;
var userAnswers = []
var points = 0;

$('.quiz-here').html(renderQuestion());
console.log('currentProgress',currentProgress);
renderQuestion();
function renderQuestion(){
	var c = currentProgress;
	var q = quiz[c];
	var p = c +1;
	var l = 5 - p;
	if (c <= 5){
		c = 0;
	}
	console.log('q.prompt', q.prompt);
	console.log('c',c);
	var html = '<h3 class="question">'+'Question '+ p +'<br>' + q.prompt + '</h3>' + '<h6>' + l + ' questions remaining' + '</h6>'
	c++
	for (var i=0; i<q.options.length;i++){
		var a = q.options[i];
		html+= '<br><input type="radio" name="radio-btn" value="'+ q.options[i]+'"><label for="radio3" value="'+q.options[i]+'">' + q.options[i] + '</label><br>'
	}
	return html;
}

function checkAnswers(){
	if (userAnswers[myIndex] === correctAnswers[myIndex]){
		points++;
	}
}

function playAgain(){
	var currentProgress = 0;
	var userAnswers = [];
	var points = 0;
	var myIndex = -1;
	$('div.quiz-here').empty();
	$('div.quiz-here').append(renderQuestion());
	$('input[type=button]').replaceWith('<input type="button" value="Next" id="next-btn" />');
}

$('#next-btn').click(function(){
	myIndex++;
	currentProgress++;
	var userResponse = $('input[name=radio-btn]:checked').val();
	userAnswers.push(userResponse);
	checkAnswers();
	console.log('points',points);
		console.log(userAnswers);
	if (userResponse == undefined) {
		alert("Please select one to continue.")
		currentProgress--
		myIndex--
		userAnswers.pop();
} else if (myIndex >= 4) {
	checkAnswers();
	$('div.quiz-here').replaceWith('<div class="quiz-here"><h3>' + 'You\'ve finished the game!' + '</h3>' + '<h5>' + 'You answered ' + points + ' questions correctly.'+ '</h5></div>');
	$('input[type=button]').replaceWith('<input type="button" value="Start Over" id="start-over" />');
	$('#start-over').click(function(){
		console.log('#start-over');
		playAgain();
	})
} else {
	$('.quiz-here').html(renderQuestion());
	}
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
				'The Colony'
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

//Correct answers
var correctAnswers = ['The Crown','Luke Cage','The Man in the High Castle', 'The Underwoods', 'The Mindy Project']

//Need to figure out which question the user is on at each stage

//Need to implement a session/run-time state to move b/w each question



