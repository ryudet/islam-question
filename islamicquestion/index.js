document.documentElement.setAttribute('dir', 'rtl');

document.addEventListener("DOMContentLoaded", () => {
    // Question Data
    const questions = [
        {
            question: "What is the first pillar of Islam?",
            options: ["Shahada", "Salah", "Zakat", "Hajj"],
            correct: 0 // The index of the correct option
        },
        {
            question: "How many times do Muslims pray daily?",
            options: ["3", "5", "7", "10"],
            correct: 1
        },
        {
            question: "What is the holy book of Islam?",
            options: ["Torah", "Quran", "Bible", "Vedas"],
            correct: 1
        },
        {
            question: "What is the name of the Prophet of Islam?",
            options: ["Prophet Moses", "Prophet Jesus", "Prophet Muhammad", "Prophet Abraham"],
            correct: 2
        },
        {
            question: "In which month do Muslims fast?",
            options: ["Ramadan", "Sha'ban", "Muharram", "Dhul-Hijjah"],
            correct: 0
        }
    ];
    

    // DOM Elements
    const homepage = document.getElementById("homepage");
    const gamePage = document.getElementById("gamePage");
    const resultsPage = document.getElementById("resultsPage");
    const questionText = document.getElementById("questionText");
    const questionNumber = document.getElementById("questionNumber");
    const optionsContainer = document.getElementById("options");
    const scoreDisplay = document.getElementById("score");
    const totalQuestionsDisplay = document.getElementById("totalQuestions");
    const startGameButton = document.getElementById("startGame");
    const restartGameButton = document.getElementById("restartGame");

    // Game State
    let currentQuestionIndex = 0;
    let score = 0;

    // Function: Start the game
    const startGame = () => {
        currentQuestionIndex = 0;
        score = 0;
        showSection(gamePage);
        loadQuestion();
    };

    // Function: Load a question
    const loadQuestion = () => {
        const question = questions[currentQuestionIndex];
        questionText.textContent = question.question;
        questionNumber.textContent = currentQuestionIndex + 1;
        optionsContainer.innerHTML = "";

        question.options.forEach((option, index) => {
            const button = document.createElement("button");
            button.classList.add("option");
            button.textContent = option;
            button.addEventListener("click", () => checkAnswer(index));
            optionsContainer.appendChild(button);
        });
    };

    // Function: Check the selected answer
    const checkAnswer = (selectedIndex) => {
        const question = questions[currentQuestionIndex];
        if (selectedIndex === question.correct) {
            score++;
        }
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            loadQuestion();
        } else {
            showResults();
        }
    };

    // Function: Show results
    const showResults = () => {
        scoreDisplay.textContent = score;
        totalQuestionsDisplay.textContent = questions.length;
        showSection(resultsPage);
    };

    // Function: Show a specific section
    const showSection = (section) => {
        [homepage, gamePage, resultsPage].forEach((sec) =>
            sec.classList.remove("active")
        );
        section.classList.add("active");
    };

    // Event Listeners
    startGameButton.addEventListener("click", startGame);
    restartGameButton.addEventListener("click", () => showSection(homepage));

    // Initialize the homepage
    showSection(homepage);
});
fetch('questions.json')
    .then(response => response.json())
    .then(data => {
        const questions = data;
        startGame(); // Start the game after loading questions
    })
    .catch(error => console.error('Error loading questions:', error));

// Elements
const startButton = document.getElementById("startButton");
const questionContainer = document.getElementById("questionPage");
const optionsContainer = document.getElementById("options");
const questionText = document.getElementById("questionText");
const nextButton = document.getElementById("nextButton");
const resultsPage = document.getElementById("resultsPage");
const scoreDisplay = document.getElementById("score");
const restartButton = document.getElementById("restartButton");

// Buttons for selecting number of questions
const select10Button = document.getElementById("select10");
const select15Button = document.getElementById("select15");
const select20Button = document.getElementById("select20");

// Question Data
const questions = [
    { question: "ما هو عدد سور القرآن الكريم؟", options: ["110", "112", "114", "116"], correct: 2 },
    { question: "في أي سنة هاجر النبي محمد صلى الله عليه وسلم إلى المدينة المنورة؟", options: ["622م", "632م", "612م", "642م"], correct: 0 },
    { question: "ما اسم الغزوة التي وقعت فيها معجزة المطر؟", options: ["غزوة بدر", "غزوة تبوك", "غزوة الخندق", "غزوة حنين"], correct: 0 },
    { question: "كم عدد الأشهر الحرم في التقويم الإسلامي؟", options: ["2", "3", "4", "5"], correct: 2 },
    { question: "ما هو اسم السورة التي تسمى قلب القرآن؟", options: ["الملك", "يس", "الفاتحة", "الرحمن"], correct: 1 },
    { question: "في أي عام وقعت حادثة الفيل؟", options: ["عام 570م", "عام 600م", "عام 580م", "عام 590م"], correct: 0 },
    { question: "من هو أول خليفة في الإسلام؟", options: ["عمر بن الخطاب", "أبو بكر الصديق", "عثمان بن عفان", "علي بن أبي طالب"], correct: 1 },
    { question: "كم عدد أركان الإيمان؟", options: ["4", "5", "6", "7"], correct: 2 },
    { question: "ما هي القبلة الأولى للمسلمين؟", options: ["الكعبة", "المسجد الحرام", "بيت المقدس", "المسجد النبوي"], correct: 2 },
    { question: "ما هو اسم الملك الذي ينفخ في الصور؟", options: ["جبريل", "ميكائيل", "إسرافيل", "مالك"], correct: 2 },
    { question: "في أي سورة ذكر فرض الصيام؟", options: ["البقرة", "النساء", "المائدة", "آل عمران"], correct: 0 },
    { question: "ما هو الاسم الذي أطلق على معركة تحرير مكة؟", options: ["غزوة بدر", "غزوة الخندق", "غزوة الفتح", "غزوة حنين"], correct: 2 },
    { question: "كم مرة ذكر اسم النبي محمد صلى الله عليه وسلم في القرآن الكريم؟", options: ["4 مرات", "5 مرات", "6 مرات", "7 مرات"], correct: 0 },
    { question: "ما هو الاسم الثاني لسورة التوبة؟", options: ["البراءة", "النصر", "الكافرون", "الحديد"], correct: 0 },
    { question: "ما هي السورة التي تحتوي على آية الكرسي؟", options: ["الفاتحة", "النساء", "البقرة", "النور"], correct: 2 },
    { question: "ما هو الركن الذي يأتي بعد الشهادة مباشرة؟", options: ["الصلاة", "الزكاة", "الصوم", "الحج"], correct: 0 },
    { question: "من هو الصحابي الذي لقب بسيف الله المسلول؟", options: ["عمر بن الخطاب", "خالد بن الوليد", "علي بن أبي طالب", "أبو عبيدة بن الجراح"], correct: 1 }
];

// Variables
let currentQuestionIndex = 0;
let score = 0;
let totalQuestions = 10; // Default to 10 questions
let usedQuestions = []; // To keep track of answered questions

// Select Number of Questions
select10Button.addEventListener("click", () => setTotalQuestions(10));
select15Button.addEventListener("click", () => setTotalQuestions(15));
select20Button.addEventListener("click", () => setTotalQuestions(20));

function setTotalQuestions(number) {
    totalQuestions = number;
    document.getElementById("welcomePage").classList.remove("active");
    questionContainer.classList.add("active");
    displayQuestion();
}

// Start Game
startButton.addEventListener("click", () => {
    document.getElementById("welcomePage").classList.remove("active");
    questionContainer.classList.add("active");
    displayQuestion();
});

// Display Question
function displayQuestion() {
    // Filter out used questions based on selected number of questions
    const availableQuestions = questions.filter((question, index) => !usedQuestions.includes(index));
    if (availableQuestions.length === 0 || usedQuestions.length >= totalQuestions) {
        showResults();
        return;
    }

    const currentQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    usedQuestions.push(questions.indexOf(currentQuestion)); // Mark this question as used
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = ""; // Clear previous options

    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement("div");
        optionElement.classList.add("option");
        optionElement.textContent = option;
        optionElement.addEventListener("click", () => selectAnswer(index, currentQuestion));
        optionsContainer.appendChild(optionElement);
    });

    nextButton.disabled = true; // Disable next button until an answer is selected
}

// Select Answer
function selectAnswer(selectedIndex, currentQuestion) {
    const allOptions = document.querySelectorAll(".option");

    allOptions.forEach((option, index) => {
        // Highlight the correct and selected answer
        if (index === currentQuestion.correct) {
            option.classList.add("correct");
        } else if (index === selectedIndex) {
            option.classList.add("incorrect");
        }
        option.classList.add("disabled"); // Disable all options after selection
    });

    if (selectedIndex === currentQuestion.correct) {
        score++; // Increase score for correct answer
    }

    nextButton.disabled = false; // Enable next button after selecting an answer
}

// Next Question
nextButton.addEventListener("click", () => {
    if (usedQuestions.length < totalQuestions) {
        displayQuestion();
    } else {
        showResults();
    }
});

// Show Results
function showResults() {
    questionContainer.classList.remove("active");
    resultsPage.classList.add("active");
    scoreDisplay.textContent = `You scored ${score} out of ${totalQuestions}`;
}

// Restart Game
restartButton.addEventListener("click", () => {
    resultsPage.classList.remove("active");
    document.getElementById("welcomePage").classList.add("active");
    currentQuestionIndex = 0;
    score = 0;
    usedQuestions = []; // Reset used questions
});
