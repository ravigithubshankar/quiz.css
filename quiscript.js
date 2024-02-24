const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false }
        ]
    },
    {
        question: "Which is the fastest land animal?",
        answers: [
            { text: "Cheetah", correct: true },
            { text: "Lion", correct: false },
            { text: "Leopard", correct: false },
            { text: "Gazelle", correct: false }
        ]
    },
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false }
        ]
    },
    {
        question: "Which is the fastest land animal?",
        answers: [
            { text: "Cheetah", correct: true },
            { text: "Lion", correct: false },
            { text: "Leopard", correct: false },
            { text: "Gazelle", correct: false }
        ]
    },
    // Add more questions as needed
    {
        question: "If a car travels at a speed of 60 km/h, how far will it travel in 3 hours?",
        answers: [
            { text: "120 km", correct: false },
            { text: "180 km", correct: false },
            { text: "90 km", correct: true },
            { text: "150 km", correct: false }
        ]
    },
    {
        question: "What is the value of 3x + 7y when x = 4 and y = 2?",
        answers: [
            { text: "31", correct: true },
            { text: "25", correct: false },
            { text: "23", correct: false },
            { text: "14", correct: false }
        ]
    },
    {
        question: "If the perimeter of a rectangle is 30 cm and its length is 8 cm, what is its width?",
        answers: [
            { text: "7 cm", correct: true },
            { text: "6 cm", correct: false },
            { text: "5 cm", correct: false },
            { text: "9 cm", correct: false }
        ]
    },
    {
        question: "Simplify: 4 + 2 * (8 ÷ 2) - 1",
        answers: [
            { text: "11", correct: false },
            { text: "13", correct: true },
            { text: "15", correct: false },
            { text: "9", correct: false }
        ]
    },
    {
        question: "If a box contains 12 red balls and 8 green balls, what is the probability of picking a red ball?",
        answers: [
            { text: "3/5", correct: false },
            { text: "2/5", correct: false },
            { text: "3/4", correct: true },
            { text: "1/2", correct: false }
        ]
    },
    {
        question: "A train travels 150 km in 2 hours. What is its speed?",
        answers: [
            { text: "75 km/h", correct: true },
            { text: "80 km/h", correct: false },
            { text: "65 km/h", correct: false },
            { text: "90 km/h", correct: false }
        ]
    },
    {
        question: "If the product of two numbers is 36 and one of the numbers is 6, what is the other number?",
        answers: [
            { text: "5", correct: false },
            { text: "6", correct: false },
            { text: "4", correct: false },
            { text: "3", correct: true }
        ]
    },
    {
        question: "A piece of cloth costs $20. If the price increases by 25%, what will be the new price?",
        answers: [
            { text: "$22.50", correct: false },
            { text: "$25.00", correct: false },
            { text: "$18.75", correct: false },
            { text: "$25.50", correct: true }
        ]
    },
    {
        question: "If a right-angled triangle has sides of length 3, 4, and 5, what is its area?",
        answers: [
            { text: "6 sq units", correct: true },
            { text: "8 sq units", correct: false },
            { text: "10 sq units", correct: false },
            { text: "12 sq units", correct: false }
        ]
    },
    {
        question: "What is the square of 9?",
        answers: [
            { text: "81", correct: true },
            { text: "64", correct: false },
            { text: "100", correct: false },
            { text: "121", correct: false }
        ]
    },
    {
        question: "If a clock shows 3:15, what is the angle between the hour and minute hands?",
        answers: [
            { text: "37.5 degrees", correct: false },
            { text: "45 degrees", correct: true },
            { text: "30 degrees", correct: false },
            { text: "60 degrees", correct: false }
        ]
    },
    {
        question: "If 20% of a number is 40, what is the number?",
        answers: [
            { text: "180", correct: false },
            { text: "200", correct: true },
            { text: "160", correct: false },
            { text: "220", correct: false }
        ]
    },
    {
        question: "The average of five numbers is 18. If four of the numbers are 15, 20, 25, and 30, what is the fifth number?",
        answers: [
            { text: "15", correct: false },
            { text: "20", correct: false },
            { text: "25", correct: false },
            { text: "35", correct: true }
        ]
    },
    {
        question: "If a person buys a shirt for $45 and sells it for $60, what is the profit percentage?",
        answers: [
            { text: "25%", correct: true },
            { text: "20%", correct: false },
            { text: "15%", correct: false },
            { text: "30%", correct: false }
        ]
    },
    {
        question: "If 3x + 7 = 22, what is the value of x?",
        answers: [
            { text: "5", correct: true },
            { text: "4", correct: false },
            { text: "6", correct: false },
            { text: "7", correct: false }
        ]
    },
    {
        question: "If the sum of three consecutive integers is 72, what are the integers?",
        answers: [
            { text: "23, 24, 25", correct: false },
            { text: "24, 25, 26", correct: true },
            { text: "21, 22, 23", correct: false },
            { text: "22, 23, 24", correct: false }
        ]
    },
    {
        question: "What is the area of a circle with radius 5 units?",
        answers: [
            { text: "25π sq units", correct: true },
            { text: "20π sq units", correct: false },
            { text: "30π sq units", correct: false },
            { text: "10π sq units", correct: false }
        ]
    },
    {
        question: "If 2y - 5 = 11, what is the value of y?",
        answers: [
            { text: "8", correct: false },
            { text: "9", correct: true },
            { text: "10", correct: false },
            { text: "7", correct: false }
        ]
    },
    {
        question: "The sum of the angles in a triangle is always:",
        answers: [
            { text: "90 degrees", correct: false },
            { text: "180 degrees", correct: true },
            { text: "120 degrees", correct: false },
            { text: "60 degrees", correct: false }
        ]
    },
];

    
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const timerSpan = document.getElementById("timer-span");

let index = 0;
let score = 0;
let timerMinutes = 1; // Set your desired time limit in minutes
let timerSeconds = 0;
let timerInterval;

function startQuiz() {
    index = 0;
    score = 0;
    timerMinutes = 1;
    timerSeconds = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
    startTimer();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[index];
    let questionNo = index + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;

    Array.from(answerButtons.children).forEach(button => {
        const correct = button.dataset.correct === "true";

        if (correct) {
            button.classList.add("correct");
        } else if (button === selectedBtn) {
            button.classList.add("incorrect");
        }

        button.disabled = true;
    });

    if (selectedBtn.dataset.correct === "true") {
        score++;
    }

    nextButton.style.display = "block";
}

function disableAnswerButtons() {
    answerButtons.childNodes.forEach(button => {
        button.disabled = true;
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
    });
}

function highlightSelected(button) {
    button.classList.add("selected");
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Retake Test";
    nextButton.style.display = "block";
    stopTimer();
}

function handleNextButton() {
    index++;
    if (index < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function startTimer() {
    timerInterval = setInterval(function () {
        if (timerMinutes === 0 && timerSeconds === 0) {
            showScore(); // Time's up, display the result
        } else {
            if (timerSeconds === 0) {
                timerMinutes--;
                timerSeconds = 59;
            } else {
                timerSeconds--;
            }

            timerSpan.textContent = formatTime(timerMinutes, timerSeconds);
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

nextButton.addEventListener("click", () => {
    if (index < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});
// ... (previous code)

function showScore() {
    resetState();
    const percentage = (score / questions.length) * 100;
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}! (${percentage.toFixed(2)}%)`;
    nextButton.innerHTML = "Retake Quiz";
    nextButton.addEventListener("click", startQuiz);
    nextButton.style.display = "block";
    stopTimer();
}

// ... (remaining code)


function formatTime(minutes, seconds) {
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}


startQuiz();
