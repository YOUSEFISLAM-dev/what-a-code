/**
 * What a Code - Programming Quiz Game
 * Main Application JavaScript File
 */

// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const categoryBtns = document.querySelectorAll('.category-btn');
const startBtn = document.getElementById('start-btn');
const questionNumber = document.getElementById('question-number');
const timeLeft = document.getElementById('time-left');
const progressBar = document.getElementById('progress-bar');
const questionContainer = document.getElementById('question');
const codeSnippet = document.getElementById('code-snippet');
const codeDisplay = document.getElementById('code-display');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const finalScore = document.getElementById('final-score');
const totalQuestions = document.getElementById('total-questions');
const resultMessage = document.getElementById('result-message');
const retryBtn = document.getElementById('retry-btn');
const homeBtn = document.getElementById('home-btn');

// Quiz State
let currentCategory = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
let timeRemaining = 60;
let selectedOption = null;
let isAnswerSelected = false;

// Initialize the application
function init() {
    setupEventListeners();
}

// Set up event listeners
function setupEventListeners() {
    // Category selection
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', selectCategory);
    });

    // Start quiz button
    startBtn.addEventListener('click', startQuiz);

    // Next question button
    nextBtn.addEventListener('click', handleNextQuestion);

    // Retry quiz button
    retryBtn.addEventListener('click', () => {
        resultsScreen.classList.add('hidden');
        startScreen.classList.remove('hidden');
        resetQuiz();
    });

    // Home button
    homeBtn.addEventListener('click', () => {
        resultsScreen.classList.add('hidden');
        startScreen.classList.remove('hidden');
        resetQuiz();
    });
}

// Handle category selection
function selectCategory(e) {
    categoryBtns.forEach(btn => btn.classList.remove('selected'));
    e.target.classList.add('selected');
    currentCategory = e.target.dataset.category;
    startBtn.disabled = false;
}

// Start the quiz
function startQuiz() {
    // Initialize quiz state
    currentQuestions = [...questionBank[currentCategory]];
    shuffleArray(currentQuestions);
    currentQuestionIndex = 0;
    score = 0;
    timeRemaining = 60;
    
    // Update UI
    totalQuestions.textContent = currentQuestions.length;
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    
    // Load first question
    loadQuestion();
    
    // Start timer
    startTimer();
}

// Load a question
function loadQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    
    // Reset state
    isAnswerSelected = false;
    selectedOption = null;
    nextBtn.textContent = currentQuestionIndex === currentQuestions.length - 1 ? 'Finish Quiz' : 'Next Question';
    
    // Update UI
    questionNumber.textContent = `Question ${currentQuestionIndex + 1}/${currentQuestions.length}`;
    questionContainer.textContent = question.question;
    updateProgressBar();
    
    // Handle code snippet if present
    if (question.question.includes('\n')) {
        const parts = question.question.split('\n');
        questionContainer.textContent = parts[0];
        codeDisplay.textContent = parts.slice(1).join('\n');
        codeSnippet.classList.remove('hidden');
    } else {
        codeSnippet.classList.add('hidden');
    }
    
    // Generate options
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option;
        optionElement.dataset.index = index;
        optionElement.addEventListener('click', selectOption);
        optionsContainer.appendChild(optionElement);
    });
}

// Update the progress bar
function updateProgressBar() {
    const progress = ((currentQuestionIndex) / currentQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

// Handle option selection
function selectOption(e) {
    if (isAnswerSelected) return;
    
    const selectedIndex = parseInt(e.target.dataset.index);
    const correctIndex = currentQuestions[currentQuestionIndex].correctAnswer;
    
    // Clear previous selections
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Mark as selected
    e.target.classList.add('selected');
    selectedOption = selectedIndex;
    isAnswerSelected = true;
    
    // Show correct/incorrect
    document.querySelectorAll('.option').forEach(opt => {
        const optIndex = parseInt(opt.dataset.index);
        if (optIndex === correctIndex) {
            opt.classList.add('correct');
        } else if (optIndex === selectedIndex && selectedIndex !== correctIndex) {
            opt.classList.add('wrong');
        }
    });
    
    // Update score
    if (selectedIndex === correctIndex) {
        score++;
    }
}

// Handle next question button click
function handleNextQuestion() {
    if (!isAnswerSelected && currentQuestionIndex < currentQuestions.length) {
        alert('Please select an answer first!');
        return;
    }
    
    currentQuestionIndex++;
    
    if (currentQuestionIndex < currentQuestions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

// Start the timer
function startTimer() {
    clearInterval(timerInterval);
    timeLeft.textContent = timeRemaining;
    
    timerInterval = setInterval(() => {
        timeRemaining--;
        timeLeft.textContent = timeRemaining;
        
        if (timeRemaining <= 10) {
            timeLeft.parentElement.style.color = 'var(--danger-color)';
        }
        
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}

// End the quiz
function endQuiz() {
    clearInterval(timerInterval);
    quizScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');
    
    finalScore.textContent = score;
    
    // Generate result message
    const percentage = (score / currentQuestions.length) * 100;
    let message = '';
    
    if (percentage >= 90) {
        message = 'Outstanding! You\'re a coding genius! 🏆';
    } else if (percentage >= 70) {
        message = 'Great job! You have solid programming knowledge! 👏';
    } else if (percentage >= 50) {
        message = 'Good effort! Keep practicing to improve further. 💪';
    } else {
        message = 'Keep learning! Practice makes perfect. 📚';
    }
    
    resultMessage.textContent = message;
}

// Reset the quiz state
function resetQuiz() {
    currentCategory = null;
    currentQuestions = [];
    currentQuestionIndex = 0;
    score = 0;
    categoryBtns.forEach(btn => btn.classList.remove('selected'));
    startBtn.disabled = true;
    clearInterval(timerInterval);
}

// Utility function to shuffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', init);
