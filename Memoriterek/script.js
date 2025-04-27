// Sample data
let poems = [];
dataXHR = new XMLHttpRequest();
dataXHR.open("GET", "textbank.json", false);
dataXHR.overrideMimeType("application/json");
dataXHR.onload = (e) => {
    poems = JSON.parse(dataXHR.response).poems;
};
dataXHR.send("");

// Default colour scheme
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    toggleDarkMode();
}
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
    if ((e.matches && document.getElementById('darkmode') == null) || (!e.matches && document.getElementById('darkmode') != null)) {
        toggleDarkMode();
    }
});

// DOM Elements
const poemContainer = document.getElementById('poem-container');
const modeToggle = document.getElementById('typing-mode');
const reciteModeToggle = document.getElementById('recite-mode');
const gaptextModeToggle = document.getElementById('gaptext-mode');
const perfectGrammarModeToggle = document.getElementById('perfect-grammar-mode');
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
const darkModeButton = document.getElementById('dark-mode-button');
const settingsButton = document.getElementById('settings-button');
const overlay = document.getElementById('overlay');
const settingsModal = document.getElementById('settings-modal');
const doneButton = document.getElementById('done-button');
const poemsButton = document.getElementById('poems-button');
const poemsModal = document.getElementById('poems-modal');
const poemsModalFlexdiv = document.getElementById('poems_main_div');
const poemsCheckbox1 = document.getElementById('poems-checkbox-1-0');
const poemsCheckbox2 = document.getElementById('poems-checkbox-2-0');


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
let requirePerfectMatch = perfectGrammarModeToggle.checked
let gaptextModeEnabled = true;

// URL parameters
const urlParams = new URLSearchParams(window.location.search);
const poemParam = urlParams.get('poem');
const verseParam = urlParams.get('verse');

// Function to initialize the page
function initialize() {
    nextButton.style.display = 'none';
    populateDropdowns();
    loadNewPoem();
    fixWrapperOverflow();
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
    const titles = [...new Set([...Array.from(titleSet).sort((a, b) => a.localeCompare(b)), ...["Ágnes asszony", "V. László", "Walesi bárdok"]])]
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
    if (!modeToggle.checked) {
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
            inputField.setAttribute("sol", verseArray[line][random]);
            if (verseArray[line][random].length < 1) {
                inputField = newSpan("", "");
                gapNumber--;
            }
            let tempLine = [
                newSpan(verseArray[line].slice(0, random).join(' '), "versespan"),
                inputField,
                newSpan(verseArray[line].slice(random + 1, verseArray[line].length).join(' '), "versespan")
            ];
            verseArray[line] = tempLine;
            console.log(verseArray[line]);
        }
    }

    // Construct a set of HTML document elements
    let verseDocSet = document.createDocumentFragment();
    for (let divNum = 0; divNum < verseArray.length; divNum++) {
        if (typeof verseArray[divNum] == "object") {
            verseDocSet.append(newDivFromArray(verseArray[divNum]));
        }
    }

    return verseDocSet;
}

function resetQuiz() {
    // Delete previously displayed verse and reset previous state
    poemContainer.innerHTML = "";
    resetInputBackgroundColors();
    poemContainer.style.color = "black"
    goodGaps = 0;

    titleInput.value = '';
    authorInput.value = '';
    titleDropdown.selectedIndex = -1;
    authorDropdown.selectedIndex = -1;
    nextVerseTextarea.value = '';
    nextVerseTextarea.style.display = 'block';
    if (document.querySelector('#answer-diffs') !== null) {
        document.querySelector('#answer-diffs').remove();
    }
    nextVerseGroup.style.display = 'none';
    feedbackContainer.textContent = '';
    feedbackContainer.style.display = 'none';

    // Enable inputs
    titleInput.disabled = false;
    authorInput.disabled = false;
    titleDropdown.disabled = false;
    authorDropdown.disabled = false;
    nextVerseTextarea.disabled = false;

    reciteModeEnabled = !reciteModeToggle.checked;
    gaptextModeEnabled = gaptextModeToggle.checked;

    nextButton.style.display = 'none';
    submitButton.style.display = 'inline-block';
}

// Function to load a new poem
function loadNewPoem() {
    let poemschecked = poems.filter(poem => document.getElementById(poem.active).checked);

    if (poemschecked.length > 0) {
        resetQuiz();
        
        if (poemParam !== null && poems.map(poem => sanitize(poem.title)).includes(sanitize(poemParam))) {
            // Select the poem with the given title
            poemIndex = poems.map(poem => sanitize(poem.title)).indexOf(sanitize(poemParam));
        } else if (poemParam !== null && !isNaN(poemParam) && poems[poemParam]) {
            // Select the poem with the given index
            poemIndex = parseInt(poemParam, 10);
        } else {
            // Select a random poem which is selected in settings
            poemIndex = Math.floor(Math.random() * poems.length);
            while (!document.getElementById(poems[poemIndex].active).checked) {
                poemIndex = Math.floor(Math.random() * poems.length);
            }
        }
        currentPoem = poems[poemIndex];

        // Display poem in poem container
        if (currentPoem.recite && reciteModeEnabled) {

            if (/*Math.random() > 0.6 && */gaptextModeEnabled) {
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
                nextVerseGroup.style.display = 'flex';
        
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
            gaptextModeEnabled = false;
            // Display verse extract, ask for title and author
            displayPoem();
            displayInputBoxes(true);
        }

        // Hide submit button and show next button
        submitButton.style.display = 'inline-block';
        nextButton.style.display = 'none';
    } else {
        gaptextModeEnabled = false;
        poemContainer.innerHTML = "";
        currentPoem = null;
        displayWarning("Nincs kiválasztott vers!");
    }}

function displayWarning(txt) {
    let warningDiv = document.createElement("div");
    warningDiv.style.color = "red";
    warningDiv.style.fontWeight = "bold";
    poemContainer.appendChild(warningDiv);
    warningDiv.textContent = txt;
    disableInputs(true);

    // Hide submit button and show next button
    submitButton.style.display = 'none';
    nextButton.style.display = 'inline-block';
}

function disableInputs(removecontent = false) {
    titleInput.disabled = true;
    authorInput.disabled = true;
    titleDropdown.disabled = true;
    authorDropdown.disabled = true;
    nextVerseTextarea.disabled = true;
    if (removecontent) {
        titleInput.value = '';
        authorInput.value = '';
        titleDropdown.selectedIndex = -1;
        authorDropdown.selectedIndex = -1;
        nextVerseTextarea.value = '';
    }

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

function displayInputBoxes(show) {
    if (show) {
        answerBoxes.style.display = "block";
        if (!modeToggle.checked) {
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
        // Dropdown mode is on
        const selectedTitle = titleDropdown.value;
        const selectedAuthor = authorDropdown.value;
        titleInput.value = selectedTitle;
        authorInput.value = selectedAuthor;

        if (selectedTitle === currentPoem.title) {
            isTitleCorrect = true;
            titleDropdown.classList.add("correct-answer");
        } else {
            titleDropdown.classList.add("incorrect-answer");
        }

        if (selectedAuthor === currentPoem.author) {
            isAuthorCorrect = true;
            authorDropdown.classList.add("correct-answer");
        } else {
            authorDropdown.classList.add("incorrect-answer");
        }
    } else {
        // Typing mode is on
        const title = titleInput.value.trim();
        const author = authorInput.value.trim();

        if (requirePerfectMatch) {
            if (title === currentPoem.title) {
                isTitleCorrect = true;
            }
        } else {
            if (sanitize(title) === sanitize(currentPoem.title.replace(/\([1-9][1-9]*.*\)/, ""))) {
                isTitleCorrect = true;
            }
        }
        
        if (requirePerfectMatch) {
            if (author === currentPoem.author) {
                isAuthorCorrect = true;
            }
        } else {
            if (sanitize(author) === sanitize(currentPoem.author)) {
                isAuthorCorrect = true;
            }
        }
    }
    if (isTitleCorrect) {
        titleInput.classList.add("correct-answer");
    } else {
        titleInput.classList.add("incorrect-answer");
    }

    if (isAuthorCorrect) {
        authorInput.classList.add("correct-answer");
    } else {
        authorInput.classList.add("incorrect-answer");
    }

    return [isTitleCorrect, isAuthorCorrect]
}

function sanitize(grammartext){
    let grammarChars = [" ", ",", ".", ";", ":", "?", "!", "-", "\"", "\n", "\\n", "(", ")", "‟", "„", "”", "‘", "’", "’", "“", "”", "–", "—", "…", "\t"];
    let i = 0

    do {
        grammartext = grammartext.replaceAll(grammarChars[i], "");
        i++;
    }
    while (i < grammarChars.length);
    
    return grammartext.toLowerCase().replaceAll("á", "a").replaceAll("é", "e").replaceAll("í", "i").replaceAll("ó", "o").replaceAll("ö", "o").replaceAll("ő", "o").replaceAll("ú", "u").replaceAll("ü", "u").replaceAll("ű", "u");
}

// Check if poem's next verse correct
function checkTextarea(nextVerse) {
    let isNextVerseCorrect = false;

    if (requirePerfectMatch) {
        if (nextVerseTextarea.value.trim() === nextVerse) {
            isNextVerseCorrect = true;
            nextVerseTextarea.classList.add("correct-answer");
        } else {
            nextVerseTextarea.classList.add("incorrect-answer");
        }
    } else {
        if (sanitize(nextVerseTextarea.value) === sanitize(nextVerse)) {
            isNextVerseCorrect = true;
            nextVerseTextarea.classList.add("correct-answer");
        } else {
            nextVerseTextarea.classList.add("incorrect-answer");

        }
    }
    
    // Highlight mistakes
    let differences = findDifferences(nextVerseTextarea.value, nextVerse);
    console.log(differences);

    // Create a paragraph to display the content with underlined differences
    let paragraph = document.createElement('p')
    paragraph.id = "answer-diffs";
    paragraph.style.whiteSpace = 'pre-wrap'; // Preserve line breaks and spaces
    paragraph.style.border = '1px rgba(118, 118, 118, 0.3) solid';
    paragraph.style.width = '100%';
    paragraph.style.fontFamily = 'monospace';
    paragraph.style.padding = '2px';
    paragraph.style.fontSize = '14px';
    paragraph.style.minHeight = '10vh';
    if (nextVerseTextarea.classList.contains("correct-answer")) {
        paragraph.className = "correct-answer";
    }
    else {
        paragraph.className = "incorrect-answer";
    }

    for (let i = 0; i < nextVerseTextarea.value.length; i++) {
        let span = document.createElement('span');
        span.textContent = nextVerseTextarea.value[i];

        // Check if the current position is in the differences
        if (differences.positions.includes(i)) {
            if (differences.types[differences.positions.indexOf(i)] === "wrong char") {
                span.style.color = 'red';
                span.style.textDecoration = 'underline';
                span.style.textDecorationColor = 'red';
            } else if (differences.types[differences.positions.indexOf(i)] === "missing char") {
                let missingSign = document.createElement('span');
                missingSign.textContent = "*";
                missingSign.style.color = 'red';
                paragraph.appendChild(missingSign);
            } else {
                span.style.color = 'red';
                span.style.textDecoration = 'line-through';
                span.style.textDecorationColor = 'red';
            }
        }

        paragraph.appendChild(span);
    }

    // Append the paragraph below the input field
    nextVerseTextarea.after(paragraph);
    nextVerseTextarea.style.display = 'none';

    return isNextVerseCorrect
}

function findDifferences(userInput, correctAnswer) {
    let differences = {
        positions: [],
        types: []
    };

    let dp = Array.from({ length: userInput.length + 1 }, () => Array(correctAnswer.length + 1).fill(0));

    for (let i = 0; i <= userInput.length; i++) {
        for (let j = 0; j <= correctAnswer.length; j++) {
            if (i === 0) {
                dp[i][j] = j;
            } else if (j === 0) {
                dp[i][j] = i;
            } else if (userInput[i - 1] === correctAnswer[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
            }
        }
    }

    let i = userInput.length, j = correctAnswer.length;
    while (i > 0 || j > 0) {
        if (i > 0 && j > 0 && userInput[i - 1] === correctAnswer[j - 1]) {
            i--;
            j--;
        } else if (i > 0 && dp[i][j] === dp[i - 1][j] + 1) {
            differences.positions.push(i - 1);
            differences.types.push("extra char");
            i--;
        } else if (j > 0 && dp[i][j] === dp[i][j - 1] + 1) {
            differences.positions.push(i);
            differences.types.push("missing char");
            j--;
        } else if (i > 0 && j > 0 && dp[i][j] === dp[i - 1][j - 1] + 1) {
            differences.positions.push(i - 1);
            differences.types.push("wrong char");
            i--;
            j--;
        }
    }

    return differences;
}

function checkGaps() {
    let gaps = document.querySelectorAll(".verseinput");
    gaps.forEach(gap => {
        if (gap.type === "text" && !gap.disabled) { // safety check
            if (removeExtraSpaces(gap.value.toLowerCase()) == removeExtraSpaces(gap.getAttribute('sol').toLowerCase())) {
                // correct
                goodGaps++;
                gap.className += " correct-answer";
            } else {
                if (!requirePerfectMatch && sanitize(gap.value) === sanitize(gap.getAttribute('sol'))) {
                    // counts as correct, but still shows the correct answer with correct punctuation
                    goodGaps++;
                    gap.className += " correct-answer";
                } else {
                    // incorrect
                    gap.className += " incorrect-answer";
                }
                let correctAnswer = document.createElement("span");
                correctAnswer.style.color = "var(--correct-colour)";
                correctAnswer.style.fontWeight = "bold";
                correctAnswer.innerHTML = `<i>${gap.getAttribute('sol')}</i>&nbsp;`;
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

    if (currentPoem.recite && reciteModeEnabled &&!gaptextModeEnabled) {
        poemContainer.textContent = currentPoem.verses[(verseIndex+1) % (currentPoem.verses.length)]
        if (areAnswersCorrect[2]) {
            poemContainer.style.color = "green"
        } else {
            poemContainer.style.color = "red";
        }
    }

    // Hide submit button, disable inputs and show next button
    submitButton.style.display = 'none';
    nextButton.style.display = 'inline-block';
    disableInputs();
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
    titleInput.classList.remove('correct-answer', 'incorrect-answer');
    authorInput.classList.remove('correct-answer', 'incorrect-answer');
    nextVerseTextarea.classList.remove('correct-answer', 'incorrect-answer');
    titleDropdown.classList.remove('correct-answer', 'incorrect-answer');
    authorDropdown.classList.remove('correct-answer', 'incorrect-answer');
}

function checkBoxes() {
    if (document.getElementById('recite-mode').checked) {
        document.getElementById('gaptext-mode').disabled = false;
        document.querySelector('label[for="gaptext-mode"]').style.opacity = "1";
    } else {
        document.getElementById('gaptext-mode').disabled = true;
        document.querySelector('label[for="gaptext-mode"]').style.opacity = "0.7";
    }
}

function showSettings() {
    overlay.style.display = 'block';
    settingsModal.style.display = 'block';
    setTimeout(() => {
        overlay.style.opacity = '1';
        settingsModal.style.opacity = '1';
    }, 10);
}

function showPoems() {
    overlay.style.display = 'block';
    poemsModal.style.display = 'block';
    poemsModalFlexdiv.style.display = 'flex';
    setTimeout(() => {
        overlay.style.opacity = '1';
        poemsModal.style.opacity = '1';
    }, 10);
}

function hideSettingsPoems() {
    overlay.style.opacity = '0';
    settingsModal.style.opacity = '0';
    poemsModal.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
        settingsModal.style.display = 'none';
        poemsModal.style.display = 'none';
    }, 300);
}

function toggleAll1() {
    document.getElementById('poems-checkbox-1-1').checked = poemsCheckbox1.checked
    document.getElementById('poems-checkbox-1-2').checked = poemsCheckbox1.checked
    document.getElementById('poems-checkbox-1-3').checked = poemsCheckbox1.checked
    document.getElementById('poems-checkbox-1-4').checked = poemsCheckbox1.checked
    document.getElementById('poems-checkbox-1-5').checked = poemsCheckbox1.checked
    document.getElementById('poems-checkbox-1-6').checked = poemsCheckbox1.checked
    document.getElementById('poems-checkbox-1-7').checked = poemsCheckbox1.checked
    document.getElementById('poems-checkbox-1-8').checked = poemsCheckbox1.checked
    document.getElementById('poems-checkbox-1-9').checked = poemsCheckbox1.checked
    document.getElementById('poems-checkbox-1-10').checked = poemsCheckbox1.checked
    
    document.getElementById('poems-checkbox-1-11').checked = poemsCheckbox1.checked
    document.getElementById('poems-checkbox-1-12').checked = poemsCheckbox1.checked
    document.getElementById('poems-checkbox-1-13').checked = poemsCheckbox1.checked
    document.getElementById('poems-checkbox-1-14').checked = poemsCheckbox1.checked
    document.getElementById('poems-checkbox-1-15').checked = poemsCheckbox1.checked
    document.getElementById('poems-checkbox-1-16').checked = poemsCheckbox1.checked
    document.getElementById('poems-checkbox-1-17').checked = poemsCheckbox1.checked
    document.getElementById('poems-checkbox-1-18').checked = poemsCheckbox1.checked
}

function toggleAll2() {
    document.getElementById('poems-checkbox-2-1').checked = poemsCheckbox2.checked
    document.getElementById('poems-checkbox-2-2').checked = poemsCheckbox2.checked
    document.getElementById('poems-checkbox-2-3').checked = poemsCheckbox2.checked
    document.getElementById('poems-checkbox-2-4').checked = poemsCheckbox2.checked
    document.getElementById('poems-checkbox-2-5').checked = poemsCheckbox2.checked
    document.getElementById('poems-checkbox-2-6').checked = poemsCheckbox2.checked
    document.getElementById('poems-checkbox-2-7').checked = poemsCheckbox2.checked
    document.getElementById('poems-checkbox-2-8').checked = poemsCheckbox2.checked
    document.getElementById('poems-checkbox-2-9').checked = poemsCheckbox2.checked
    document.getElementById('poems-checkbox-2-10').checked = poemsCheckbox2.checked
    
    document.getElementById('poems-checkbox-2-11').checked = poemsCheckbox2.checked
    document.getElementById('poems-checkbox-2-12').checked = poemsCheckbox2.checked
    document.getElementById('poems-checkbox-2-13').checked = poemsCheckbox2.checked
    document.getElementById('poems-checkbox-2-14').checked = poemsCheckbox2.checked
    document.getElementById('poems-checkbox-2-15').checked = poemsCheckbox2.checked
    document.getElementById('poems-checkbox-2-16').checked = poemsCheckbox2.checked
}

function isOverflowing(element) {
    let overflowProperty = getComputedStyle(element).overflow;
    if (overflowProperty === 'visible') {
        element.style.overflow = 'hidden';
    }
    let overflowing = element.scrollWidth > element.clientWidth || element.scrollHeight > element.clientHeight;
    if (overflowProperty === 'visible') {
        element.style.overflow = 'visible';
    }
    return overflowing; 
}

// Fix overflowing of poem when zoom is too high
function fixWrapperOverflow() {
    let wrapperDiv1 = document.getElementById("poem-wrapper");
    let wrapperDiv2 = document.getElementById("quiz-wrapper");
    if (isOverflowing(wrapperDiv1)) {
      wrapperDiv1.style.alignItems = "flex-start";
    } else {
      wrapperDiv1.style.alignItems = "center";
    }
    if (isOverflowing(wrapperDiv2)) {
      wrapperDiv2.style.alignItems = "flex-start";
    } else {
      wrapperDiv2.style.alignItems = "center";
    }
}

function toggleDarkMode() {
    let darkModeSheet = document.getElementById('darkmode');
    if (darkModeSheet == null) {
        darkModeSheet = document.createElement('link');
        darkModeSheet.setAttribute('href', 'darkmode.css'); 
        darkModeSheet.setAttribute('rel', 'stylesheet');
        darkModeSheet.id = "darkmode";
        document.head.appendChild(darkModeSheet);
        document.getElementById('dark-mode-button').textContent = "🌙"
    } else {
        darkModeSheet.remove();
        document.getElementById('dark-mode-button').textContent = "☀️"
    }
}



function showSettings() {
    overlay.style.display = 'block';
    settingsModal.style.display = 'block';
    setTimeout(() => {
        overlay.style.opacity = '1';
        settingsModal.style.opacity = '1';
    }, 10);
}

function showPoems() {
    overlay.style.display = 'block';
    poemsModal.style.display = 'block';
    poemsModalFlexdiv.style.display = 'flex';
    setTimeout(() => {
        overlay.style.opacity = '1';
        poemsModal.style.opacity = '1';
    }, 10);
}

function hideSettingsPoems() {
    overlay.style.opacity = '0';
    settingsModal.style.opacity = '0';
    poemsModal.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
        settingsModal.style.display = 'none';
        poemsModal.style.display = 'none';
    }, 300);
}

function toggleAll1() {
    document.querySelectorAll('#checkbox-container-1 input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = poemsCheckbox1.checked;
      });
}

function toggleAll2() {
    document.querySelectorAll('#checkbox-container-2 input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = poemsCheckbox2.checked;
      });
}

function odietamoSelect(){
    var selectedValue = this.value
    if (selectedValue == "Szabo"){
        poems[1]["verses"] = [`Gyűlölök és szeretek. Miért? Nem tudom én se, de érzem:
így van ez, és a szívem élve keresztre feszít.`]
    }
    else if (selectedValue == "Illyes"){
        poems[1]["verses"] = [`Gyűlölök és szeretek. Kérded tán, mért teszem én ezt?
Mit tudom! Ezt érzem. Szenvedek, ezt tudom én.`]
    }
    else if(selectedValue == "Kerenyi"){
        poems[1]["verses"] = [`Gyűlölök és szeretek. Hogy mért teszem ezt, ugye kérded?
Mit tudom én. Így van: érzem és öl e kín.`]
    }
    else if(selectedValue == "Catullus"){
        poems[1]["verses"] = [`Odi et amo. Quare id faciam, fortasse requiris.
Nescio, sed fieri sentio et excrucior.`]
    }
}

function balladaSelect(){
    var selectedValue = this.value
    if (selectedValue == "Agnes"){
        poems[37]["verses"] = poems[37]["balladak"][0]
        poems[37]["title"] = "Ágnes asszony"
    }
    else if (selectedValue == "VLaszlo"){
        poems[37]["verses"] = poems[37]["balladak"][1]
        poems[37]["title"] = "V. László"
    }
    else if(selectedValue == "Walesi"){
        poems[37]["verses"] = poems[37]["balladak"][2]
        poems[37]["title"] = "Walesi bárdok"
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', initialize);

nextButton.addEventListener('click', loadNewPoem);
modeToggle.addEventListener('change', toggleMode);
document.getElementById('quiz-form').addEventListener('submit', checkAnswer);

perfectGrammarModeToggle.addEventListener('change', () => {
    requirePerfectMatch = perfectGrammarModeToggle.checked;
});
reciteModeToggle.addEventListener('change', () => {
    if (reciteModeToggle.checked) {gaptextModeToggle.checked = false}
})

settingsButton.addEventListener('click', showSettings);
poemsButton.addEventListener('click', showPoems);
darkModeButton.addEventListener('click', toggleDarkMode);
overlay.addEventListener('click', hideSettingsPoems);
doneButton.addEventListener('click', hideSettingsPoems);
document.getElementById('odietamo-selector').addEventListener('change', odietamoSelect)
document.getElementById('ballada-selector').addEventListener('change', balladaSelect)

document.getElementById('poems-checkbox-1-0').addEventListener('change', toggleAll1);
document.getElementById('poems-checkbox-2-0').addEventListener('change', toggleAll2);

window.addEventListener("resize", () => {
    fixWrapperOverflow();
});
