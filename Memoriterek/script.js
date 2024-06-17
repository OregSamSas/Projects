// Sample data
let poems = [];
dataXHR = new XMLHttpRequest();
dataXHR.open("GET", "textbank.json", false);
dataXHR.overrideMimeType("application/json");
dataXHR.onload = (e) => {
    poems = JSON.parse(dataXHR.response).poems;
};
dataXHR.send("");

// DOM Elements
const poemContainer = document.getElementById('poem-container');
const modeToggle = document.getElementById('typing-mode');
const reciteModeToggle = document.getElementById('recite-mode');
const titleInput = document.getElementById('title-input');
const authorInput = document.getElementById('author-input');
const titleDropdown = document.getElementById('title-dropdown');
const authorDropdown = document.getElementById('author-dropdown');
const nextVerseTextarea = document.getElementById('next-verse');
const feedbackContainer = document.getElementById('feedback');
const submitButton = document.getElementById('submit-button');
const nextButton = document.getElementById('next-button');
const answerBoxes = document.getElementById('answer-boxes');
const nextVerseGroup = document.getElementById('next-verse-group');
const nextVerseLabel = document.getElementById('next-verse-label');

let areAnswersCorrect = []

// State variables
let currentPoem = null;
let poemIndex = -1;
let verseIndex = -1;
let reciteModeEnabled = true;

// Function to initialize the page
function initialize() {
    nextButton.style.display = 'none';
    populateDropdowns();
    loadNewPoem();
}

// Function to populate dropdowns with unique poem titles and authors in alphabetical order
function populateDropdowns() {
    // Use Sets to track unique titles and authors
    const titleSet = new Set();
    const authorSet = new Set();

    // Populate Sets with unique titles and authors
    poems.forEach(poem => {
        titleSet.add(poem.title);
        authorSet.add(poem.author);
    });

    // Convert Sets to sorted arrays
    const titles = Array.from(titleSet).sort((a, b) => a.localeCompare(b));
    const authors = Array.from(authorSet).sort((a, b) => a.localeCompare(b));

    // Populate title dropdown
    titles.forEach(title => {
        const optionTitle = document.createElement('option');
        optionTitle.value = title;
        optionTitle.textContent = title;
        titleDropdown.appendChild(optionTitle);
    });

    // Populate author dropdown
    authors.forEach(author => {
        const optionAuthor = document.createElement('option');
        optionAuthor.value = author;
        optionAuthor.textContent = author;
        authorDropdown.appendChild(optionAuthor);
    });
}


// Function to toggle typing mode
function toggleMode() {
    if (modeToggle.checked) {
        // Typing mode is on
        titleInput.style.display = 'block';
        authorInput.style.display = 'block';
        titleDropdown.style.display = 'none';
        authorDropdown.style.display = 'none';
    } else {
        // Typing mode is off
        titleInput.style.display = 'none';
        authorInput.style.display = 'none';
        titleDropdown.style.display = 'block';
        authorDropdown.style.display = 'block';
    }
}

// Better random generator
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Remove some words for the creation "open-cloze task"
function makeGapsInVerse(verse) {
    let verseArry = []; // separate verse by lines and words
    verseArray = verse.split("\n");
    for (let line = 0; line<verseArray.length; line++) {
        if (verseArry[line] !== "") {
            verseArray[line] = verseArray[line].split(" ");
            console.log(verseArray[line]);
            let random = getRandomInt(verseArray[line].length);
            verseArray[line][random] = "&_;"
            verseArray[line] = verseArray[line].join(" ");
        }
    }
    return verseArray.join("\n");
}

// Function to load a new poem
function loadNewPoem() {
    // Reset previous state
    resetInputBackgroundColors();
    poemContainer.style.color = "black"

    titleInput.value = '';
    authorInput.value = '';
    titleDropdown.selectedIndex = -1;
    authorDropdown.selectedIndex = -1;
    nextVerseTextarea.value = '';
    nextVerseGroup.style.display = 'none';
    feedbackContainer.textContent = '';
    feedbackContainer.style.display = 'none';

    reciteModeEnabled = reciteModeToggle.checked

    nextButton.style.display = 'none';
    submitButton.style.display = 'inline-block';

    // Select a random poem
    poemIndex = Math.floor(Math.random() * poems.length);
    currentPoem = poems[poemIndex];

    // Display poem in poem container
    if (currentPoem.recite && reciteModeToggle.checked) {
        
        if (currentPoem.verses.length > 1){
            // Display a random verse for recitation
            displayPoem();
            displayInputBoxes(true);
        } else {
            // Display a random author and title for recitation
            displayData();
            displayInputBoxes(false);
        }

        nextVerseGroup.style.display = 'block';

        if (currentPoem.verses.length === 1){
            nextVerseLabel.textContent = "Vers:";
        }
        else if (verseIndex + 1 == (currentPoem.verses.length)){
            nextVerseLabel.textContent = "Első versszak:";
        }
        else {
            nextVerseLabel.textContent = "Következő versszak:";
        }
    } else {
        // Display author and title, ask for title and author
        displayPoem();
        displayInputBoxes(true);
    }

    // Hide submit button and show next button
    submitButton.style.display = 'inline-block';
    nextButton.style.display = 'none';
}

// Function to display the current poem in the poem container
function displayPoem() {
    verseIndex = Math.floor(Math.random() * currentPoem.verses.length);
    const verse = currentPoem.verses[verseIndex];
    if (false) {
        verse = makeGapsInVerse(verse);
    }
    poemContainer.textContent = verse;
}
function displayData() {
    verseIndex = 0
    poemContainer.textContent = `${currentPoem.author}: ${currentPoem.title}`;
}
function displayInputBoxes(show){
    if (show){
        answerBoxes.style.display = "block";
        if (modeToggle.checked) {
            // Typing mode is on
            titleInput.style.display = 'block';
            authorInput.style.display = 'block';
            titleDropdown.style.display = 'none';
            authorDropdown.style.display = 'none';
        } else {
            // Dropdown mode is on
            titleInput.style.display = 'none';
            authorInput.style.display = 'none';
            titleDropdown.style.display = 'block';
            authorDropdown.style.display = 'block';
        }
    } else {
        answerBoxes.style.display = "none";
    }
    
}

function checkInputBoxes() {
    let isTitleCorrect = false;
    let isAuthorCorrect = false;

    if (modeToggle.checked) {
        // Typing mode is on
        const title = titleInput.value.trim();
        const author = authorInput.value.trim();

        if (title === currentPoem.title) {
            isTitleCorrect = true;
            titleInput.style.backgroundColor = 'lightgreen';
        } else {
            titleInput.style.backgroundColor = 'lightcoral';
        }

        if (author === currentPoem.author) {
            isAuthorCorrect = true;
            authorInput.style.backgroundColor = 'lightgreen';
        } else {
            authorInput.style.backgroundColor = 'lightcoral';
        }
    } else {
        // Dropdown mode is on
        const selectedTitle = titleDropdown.value;
        const selectedAuthor = authorDropdown.value;

        if (selectedTitle === currentPoem.title) {
            isTitleCorrect = true;
            titleDropdown.style.backgroundColor = 'lightgreen';
        } else {
            titleDropdown.style.backgroundColor = 'lightcoral';
        }

        if (selectedAuthor === currentPoem.author) {
            isAuthorCorrect = true;
            authorDropdown.style.backgroundColor = 'lightgreen';
        } else {
            authorDropdown.style.backgroundColor = 'lightcoral';
        }
    }

    return [isTitleCorrect, isAuthorCorrect]
}

function checkTextarea(nextVerse) {
    let isNextVerseCorrect = false;

    if (nextVerseTextarea.value.trim() === nextVerse) {
        isNextVerseCorrect = true;
        nextVerseTextarea.style.backgroundColor = 'lightgreen';
    } else {
        nextVerseTextarea.style.backgroundColor = 'lightcoral';
    }

    return isNextVerseCorrect
}

// Function to handle form submission and check answers
function checkAnswer(event) {
    event.preventDefault();

    areAnswersCorrect = []

    // Showing feedback based on correctness

    if (currentPoem.recite && reciteModeEnabled){
        if (currentPoem.verses.length === 1){
            areAnswersCorrect = [true, true]
            areAnswersCorrect.push(checkTextarea(currentPoem.verses[(verseIndex+1) % (currentPoem.verses.length)]))
        }
        else{
            areAnswersCorrect = checkInputBoxes()
            areAnswersCorrect.push(checkTextarea(currentPoem.verses[(verseIndex+1) % (currentPoem.verses.length)]))
        }
    }
    else{
        areAnswersCorrect = checkInputBoxes()
        areAnswersCorrect.push(true)
    }

    if (areAnswersCorrect[0] && areAnswersCorrect[1] && areAnswersCorrect[2]){
        showFeedback('Helyes!', 'green');
    }
    else if (!areAnswersCorrect[0] && areAnswersCorrect[1] && areAnswersCorrect[2]){
        showFeedback(`Hibás. A helyes cím "${currentPoem.title}".`, 'red');
    }
    else if (areAnswersCorrect[0] && !areAnswersCorrect[1] && areAnswersCorrect[2]){
        showFeedback(`Hibás. A szerző neve "${currentPoem.author}".`, 'red');
    }
    else if (!areAnswersCorrect[0] && !areAnswersCorrect[1] && areAnswersCorrect[2]){
        showFeedback(`Hibás. A cím "${currentPoem.title}" és a szerző "${currentPoem.author}"`, 'red');
    }

    else if (areAnswersCorrect[0] && areAnswersCorrect[1] && !areAnswersCorrect[2]){
        showFeedback('Hibásan írtad a memoritert.', 'red');
    }
    else if (!areAnswersCorrect[0] && areAnswersCorrect[1] && !areAnswersCorrect[2]){
        showFeedback(`Hibás. A helyes cím "${currentPoem.title}".`, 'red');
    }
    else if (areAnswersCorrect[0] && !areAnswersCorrect[1] && !areAnswersCorrect[2]){
        showFeedback(`Hibás. A szerző neve "${currentPoem.author}".`, 'red');
    }
    else if (!areAnswersCorrect[0] && !areAnswersCorrect[1] && !areAnswersCorrect[2]){
        showFeedback(`Hibás. A cím "${currentPoem.title}" és a szerző "${currentPoem.author}"`, 'red');
    }

    if (!areAnswersCorrect[2]){
        poemContainer.textContent = currentPoem.verses[(verseIndex+1) % (currentPoem.verses.length)]
        poemContainer.style.color = "red"
    }

    // Hide submit button and show next button
    submitButton.style.display = 'none';
    nextButton.style.display = 'inline-block';
}

// Function to show feedback message
function showFeedback(message, color) {
    feedbackContainer.textContent = message;
    feedbackContainer.style.color = color;
    feedbackContainer.style.display = 'block';
}

// Function to reset background colors of input elements
function resetInputBackgroundColors() {
    titleInput.style.backgroundColor = '';
    authorInput.style.backgroundColor = '';
    nextVerseTextarea.style.backgroundColor = '';
    titleDropdown.style.backgroundColor = '';
    authorDropdown.style.backgroundColor = '';
}

// Event listeners
document.addEventListener('DOMContentLoaded',initialize);

nextButton.addEventListener('click', loadNewPoem);
modeToggle.addEventListener('change', toggleMode);
document.getElementById('quiz-form').addEventListener('submit', checkAnswer);
