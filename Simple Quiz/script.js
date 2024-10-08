var questions = [{
    q: 'What is the capital of Azerbaijan?',
    o: [
        "Baku",
        "Tbilisi",
        "Ankara",
        "Tehran"
    ],
    a: 0 // The correct answer is 'Baku', which is option 0 in the array.
}];

var quiz = {
    hWrap: null,
    hQn: null,
    hAns: null,

    now: 0,
    score: 0,

    init: function () {
        quiz.hWrap = document.getElementById('quizWrap');

        quiz.hQn = document.createElement('div');
        quiz.hQn.id = 'quizQn';
        quiz.hWrap.appendChild(quiz.hQn);

        quiz.hAns = document.createElement('div');
        quiz.hAns.id = 'quizAns';
        quiz.hWrap.appendChild(quiz.hAns);

        quiz.draw();
    },

    draw: function () {
        if (quiz.now < questions.length) {
            quiz.hQn.innerHTML = questions[quiz.now].q;

            quiz.hAns.innerHTML = '';
            for (let i in questions[quiz.now].o) {
                let radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = 'quiz';
                radio.value = i;
                radio.id = 'quizo' + i;
                quiz.hAns.appendChild(radio);

                let label = document.createElement('label');
                label.innerHTML = questions[quiz.now].o[i];
                label.setAttribute('for', 'quizo' + i);
                label.dataset.idx = i;
                label.addEventListener('click', function () {
                    quiz.select(label);
                });
                quiz.hAns.appendChild(label);
            }
        } else {
            quiz.hQn.innerHTML = 'Quiz is over! Your score is ' + quiz.score + '/' + questions.length;
        }
    },

    select: function (option) {
        let allLabels = quiz.hAns.getElementsByTagName('label');
        for (let label of allLabels) {
            label.removeEventListener('click', function () {
                quiz.select(label);
            });
        }

        let correct = option.dataset.idx == questions[quiz.now].a;
        if (correct) {
            quiz.score++;
            option.classList.add('correct');
        } else {
            option.classList.add('wrong');
        }

        quiz.now++;

        setTimeout(function () {
            quiz.draw();
        }, 1000);
    },

    reset: function () {
        quiz.now = 0;
        quiz.score = 0;
        quiz.draw();
    }
};

window.addEventListener('load', quiz.init);
