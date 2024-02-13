let correctAnswers = 0;
let wrongAnswers = 0;
let counter = 2;
const alternatives = document.querySelectorAll(".alternatives-list li");
const btnNextQuestion = document.querySelectorAll(".btn-next-question");
const progressBar = document.querySelector(".progress-bar");
const correctAnswersText = document.querySelector(".correct-answers");
const correctWrongText = document.querySelector(".wrong-answers");

alternatives.forEach((e) => {
    e.addEventListener('click', () => {
        checkAnswer(e);
    })
})

btnNextQuestion.forEach((e) => {
    e.addEventListener('click', () => {
        swapCard(e);
        updateProgressBar();
        updateResultAnswers();
    });
})

function checkAnswer(e) {
    if (e.classList[0] === "correct-alternative") {
        correctAnswers++;
        btnNextQuestion[counter].style.pointerEvents = "all";
        counter--;
        changeAlternativesStyles(e);
    } else {
        wrongAnswers++;
        btnNextQuestion[counter].style.pointerEvents = "all";
        counter--;
        changeAlternativesStyles(e);
    }
}

function changeAlternativesStyles(e) {
    let fatherElement = e.closest(".card");
    let alternativesList = fatherElement.querySelector(".alternatives-list");
    let correctAlternative = alternativesList.querySelector(".correct-alternative");
    let wrongAlternatives = alternativesList.querySelectorAll(".wrong-alternative");

    correctAlternative.style.backgroundColor = "var(--primary-color)";
    correctAlternative.style.borderColor = "var(--primary-color)";
    correctAlternative.style.color = "var(--white)";
    correctAlternative.style.pointerEvents = "none";
    
    for (let i = 0; i < wrongAlternatives.length; i++) {
        wrongAlternatives[i].style.backgroundColor = "var(--secondary-color)";
        wrongAlternatives[i].style.borderColor = "var(--secondary-color)";
        wrongAlternatives[i].style.color = "var(--white)";
        wrongAlternatives[i].style.pointerEvents = "none";
    }
}

function swapCard(e) {
    let fatherElement = e.closest(".card");
    
    fatherElement.style.left = "-100%";
}

function updateProgressBar() {
    switch (counter) {
        case 1:
            progressBar.style.width = "66%";
            break;
        case 0:
            progressBar.style.width = "100%";
            break;
    }
}

function updateResultAnswers() {
    correctAnswersText.textContent = "Correct answers: " + correctAnswers;
    correctWrongText.textContent = "Wrong answers: " + wrongAnswers;
}