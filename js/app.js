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

var currentProgress = 0;
var myIndex = -1;
var userAnswers = []
var points = 0;


$(document).ready(function(){

//use the start over function on the initial start and on the all other starts

$('.quiz-here').html(renderQuestion());
console.log('currentProgress',currentProgress);

function renderQuestion(){
	var c = currentProgress;
	var q = quiz[c];
	var p = c +1;
	var l = 5 - p;
	//Maybe move this to the global scope aka outside of this function
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
	currentProgress = 0;
	userAnswers = [];
	points = 0;
	myIndex = -1;
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



