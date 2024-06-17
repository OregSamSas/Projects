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
const gaptextModeToggle = document.getElementById('gaptext-mode');
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

// Global vars
let verse = new String;

let areAnswersCorrect = []

let gapNumber = 0;
let goodGaps = 0;

// State variables
let currentPoem = null;
let poemIndex = -1;
let verseIndex = -1;
let reciteModeEnabled = true;
let gaptextModeEnabled = true;

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

function removeExtraSpaces(str) {
    return str.trim().replace(/\s+/g, ' ');
}

// Insert text into span element
function newSpan(txt = "", classes = "", style = "") {
    let newSpan = document.createElement('span');
    newSpan.textContent = txt;
    newSpan.style = style;
    newSpan.className = classes;
    return newSpan;
}

// Construct DIV container from array
function newDivFromArray(array) {
    let newDiv = document.createElement("div");
    array.forEach(element => {
        newDiv.appendChild(element);
    });
    return newDiv;
}

// Create an input field with a width of a text
function createInputWithTextWidth(text, padding=4) {
    let input = document.createElement('input');

    // Text width measured in a temporal element
    let tempSpan = document.createElement('span');
    tempSpan.style.visibility = 'hidden';
    tempSpan.style.whiteSpace = 'nowrap';
    tempSpan.style.font = getComputedStyle(document.body).font;
    tempSpan.innerText = text;

    document.body.appendChild(tempSpan);

    // Measuring
    let textWidth = tempSpan.offsetWidth;

    // Deleting temporaly element
    document.body.removeChild(tempSpan);

    // Setting the width of the input
    input.style.width = (textWidth + padding) + 'px';

    return input;
}

// Remove some words for the creation "open-cloze task"
function makeGapsInVerse(verse) {
    gapNumber = 0;

    // separate verse by lines and words, convert it to a doc. fragment and insert inputs
    let verseArray = [];
    verseArray = verse.split("\n");
    for (let line = 0; line < verseArray.length; line++) {
        if (verseArray[line] !== "") {
            gapNumber++;

            verseArray[line] = verseArray[line].split(' ');
            let random = getRandomInt(verseArray[line].length);
            let inputField = createInputWithTextWidth(verseArray[line][random])
            inputField.className = "verseinput";
            inputField.type = "text";
            inputField.setAttribute("title", verseArray[line][random]);
            let tempLine = [
                newSpan(verseArray[line].slice(0, random).join(' '), "versespan"),
                inputField,
                newSpan(verseArray[line].slice(random + 1, verseArray[line].length).join(' '), "versespan")
            ]
            verseArray[line] = tempLine;
            console.log(verseArray[line]);
        }
    }

    // Construct a set of HTML document elements
    let verseDocSet = document.createDocumentFragment();
    for (let divNum = 0; divNum < verseArray.length; divNum++) {
        console.log(verseArray[divNum])
        verseDocSet.append(newDivFromArray(verseArray[divNum]));
    }

    return verseDocSet;
}

// Function to load a new poem
function loadNewPoem() {
    // Delete previously displayed verse and reset previous state
    poemContainer.innerHTML = "";
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

    reciteModeEnabled = reciteModeToggle.checked;
    gaptextModeEnabled = gaptextModeToggle.checked;

    nextButton.style.display = 'none';
    submitButton.style.display = 'inline-block';

    // Select a random poem
    poemIndex = Math.floor(Math.random() * poems.length);
    currentPoem = poems[poemIndex];

    // Display poem in poem container
    if (currentPoem.recite && reciteModeEnabled) {

        if (Math.random() > 0.5 && gaptextModeEnabled) {
            // Display a gappy verse with inputs for missing words to fill in/out
            displayPoem(true);
            displayInputBoxes(true);
        } else {
            gaptextModeEnabled = false;
            if (currentPoem.verses.length > 1) {
                // Display a random verse for recitation (next stanza etc.)
                displayPoem();
                displayInputBoxes(true);
            } else {
                // Display a random author and title for recitation (if it has only 1 stanza/group of lines)
                displayData();
                displayInputBoxes(false);
            }
            nextVerseGroup.style.display = 'block';
    
            if (currentPoem.verses.length === 1) {
                nextVerseLabel.textContent = "Vers:";
            }
            else if (verseIndex + 1 == (currentPoem.verses.length)) {
                nextVerseLabel.textContent = "Első versszak:";
            }
            else {
                nextVerseLabel.textContent = "Következő versszak:";
            }
        }

    } else {
        // Display verse extract, ask for title and author
        displayPoem();
        displayInputBoxes(true);
    }

    // Hide submit button and show next button
    submitButton.style.display = 'inline-block';
    nextButton.style.display = 'none';
}

// Function to display the current poem in the poem container
function displayPoem(gaptext = false) {
    verseIndex = Math.floor(Math.random() * currentPoem.verses.length);
    verse = currentPoem.verses[verseIndex];
    let verseFragment;
    if (gaptext) {
        verseFragment = makeGapsInVerse(verse);
    } else {
        verseFragment = document.createElement("span");
        verseFragment.textContent = verse;
    }
    poemContainer.appendChild(verseFragment);
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

function checkGaps() {
    let gaps = document.querySelectorAll(".verseinput");
    gaps.forEach(gap => {
        if (gap.type === "text" && !gap.disabled) { // safety check
            if (removeExtraSpaces(gap.value.toLowerCase()) == removeExtraSpaces(gap.title.toLowerCase())) {
                // correct
                goodGaps++;
                gap.className += " correct-answer";
            } else {
                // incorrect
                gap.className += " incorrect-answer";
                let correctAnswer = document.createElement("span");
                correctAnswer.style.color = "var(--correct-colour)";
                correctAnswer.style.fontWeight = "bold";
                correctAnswer.innerHTML = `<i>${gap.title}</i>&nbsp;`;
                gap.after(correctAnswer);
            }
            gap.disabled = true;
        }
    });

    return goodGaps === gapNumber;
}

// Function to handle form submission and check answers
function checkAnswer(event) {
    event.preventDefault();

    areAnswersCorrect = [];

    // Showing feedback based on correctness

    if (currentPoem.recite && reciteModeEnabled){
        if (gaptextModeEnabled) {
            areAnswersCorrect = checkInputBoxes();
            areAnswersCorrect.push(checkGaps())
        } else {
            if (currentPoem.verses.length === 1){
                areAnswersCorrect = [true, true];
                areAnswersCorrect.push(checkTextarea(currentPoem.verses[(verseIndex+1) % (currentPoem.verses.length)]));
            }
            else{
                areAnswersCorrect = checkInputBoxes();
                areAnswersCorrect.push(checkTextarea(currentPoem.verses[(verseIndex+1) % (currentPoem.verses.length)]));
            }
        }
    }
    else{
        areAnswersCorrect = checkInputBoxes();
        areAnswersCorrect.push(true);
    }

    if (areAnswersCorrect[0] && areAnswersCorrect[1] && areAnswersCorrect[2]) {
        showFeedback("Helyes!", 'green');
    }
    else if (!areAnswersCorrect[0] && areAnswersCorrect[1] && areAnswersCorrect[2]) {
        showFeedback(`Hibás. A helyes cím "${currentPoem.title}".`, 'red');
    }
    else if (areAnswersCorrect[0] && !areAnswersCorrect[1] && areAnswersCorrect[2]) {
        showFeedback(`Hibás. A szerző neve "${currentPoem.author}".`, 'red');
    }
    else if (!areAnswersCorrect[0] && !areAnswersCorrect[1] && areAnswersCorrect[2]) {
        showFeedback(`Hibás. A cím "${currentPoem.title}" és a szerző "${currentPoem.author}"`, 'red');
    }

    else if (areAnswersCorrect[0] && areAnswersCorrect[1] && !areAnswersCorrect[2]) {
        showFeedback('Hibásan írtad a memoritert.', 'red');
    }
    else if (!areAnswersCorrect[0] && areAnswersCorrect[1] && !areAnswersCorrect[2]) {
        showFeedback(`Hibás. A helyes cím "${currentPoem.title}".`, 'red');
    }
    else if (areAnswersCorrect[0] && !areAnswersCorrect[1] && !areAnswersCorrect[2]) {
        showFeedback(`Hibás. A szerző neve "${currentPoem.author}".`, 'red');
    }
    else if (!areAnswersCorrect[0] && !areAnswersCorrect[1] && !areAnswersCorrect[2]) {
        showFeedback(`Hibás. A cím "${currentPoem.title}" és a szerző "${currentPoem.author}"`, 'red');
    }

    if (!areAnswersCorrect[2] && !gaptextModeEnabled) {
        poemContainer.textContent = currentPoem.verses[(verseIndex+1) % (currentPoem.verses.length)]
        poemContainer.style.color = "red"
    }

    // Hide submit button and show next button
    submitButton.style.display = 'none';
    nextButton.style.display = 'inline-block';
}

// Function to show feedback message
function showFeedback(message, color) {
    if (gaptextModeEnabled) {
        message += ` Helyesen beírt szavak száma: ${goodGaps}/${gapNumber}`;
    }
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
