var quiz = [{
        prompt: 'Which show was the most expensive to produce in television history?',
        options: [
            'Game of Thrones',
            'The Crown',
            'Marco Polo'
        ],
    },
    {
        prompt: 'Which show crashed the Netflix application upon being release during the fall of 2016?',
        options: [
            'Gilmore Girls',
            'Black Mirror',
            'Luke Cage'
        ],
    },
    {
        prompt: 'Which show is based on a fictional history novel about the United States losing World War II?',
        options: [
            'The Aftermath',
            'The Man in the High Castle',
            'The Colony'
        ],
    },
    {
        prompt: 'What is the surname of the power couple in House of Cards?',
        options: [
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
    },
];

//Correct answers
var correctAnswers = ['The Crown', 'Luke Cage', 'The Man in the High Castle', 'The Underwoods', 'The Mindy Project'];

var currentProgress = 0;
var myIndex = -1;
var userAnswers = [];
var points = 0;


$(document).ready(function() {
	//Start quiz
    $('.quiz-here').html(renderQuestion());

    function renderQuestion() {
        var q = quiz[currentProgress];

        //Current question number
        var p = currentProgress + 1;

        //Number of questions left
        var l = 5 - p;

        //Render question and number of questions left
        var html = '<h3 class="question">' + 'Question ' + p + '<br>' + q.prompt + '</h3>' + '<h6>' + l + ' questions remaining' + '</h6>'

        for (var i = 0; i < q.options.length; i++) {
            //Render the question choices
            html += '<br><input type="radio" name="radio-btn" value="' + q.options[i] + '"><label for="radio3" value="' + q.options[i] + '">' + q.options[i] + '</label><br>'
        }
        return html;
    }

    function checkAnswers() {
    	//Compare the user answer to the correct answer
        if ( userAnswers[myIndex] === correctAnswers[myIndex] ) {
            points++;
        }
    }

    $('#next-btn').click(function() {
    	console.log('x');
        myIndex++;
        currentProgress++;
        //Get the value of the selected radio button
        var userResponse = $('input[name=radio-btn]:checked').val();
        userAnswers.push(userResponse);
        checkAnswers();
        if (userResponse == undefined) {
        	//Tell the user that they put make choice to continue
            alert("Please select one to continue.")
            currentProgress--
            myIndex--
            //Remove the undefined choice from the array
            userAnswers.pop();
        	} else if (myIndex >= 4) {
            checkAnswers();
            	//Display end of game message and score
            	$('div.quiz-here').replaceWith('<div class="quiz-here"><h3>' + 'You\'ve finished the game!' + '</h3>' + '<h5>' + 'You answered ' + points + ' questions correctly.' + '</h5></div>');
            	$('input[type=button]').replaceWith('<input type="button" value="Start Over" id="start-over" />');
            	//Reload the page to start a new game
            	$('#start-over').click(function() {
                 window.location.reload(true);
            	})
        	} else {
        	//Move on to the next question
            $('.quiz-here').html(renderQuestion());
        	}
    	});
});



