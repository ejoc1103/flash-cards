// Retrieve the known list from localStorage
let knownList = JSON.parse(localStorage.getItem('knownList')) || [];

// Get the container element where we'll display the list
const knownListContainer = document.getElementById('knownListContainer');

// Display each question as a new line in a <p> element
knownList.forEach(item => {
    let questionElement = document.createElement('p');
    let buttonElement = document.createElement('button');
    questionElement.textContent = item.question; // Display the question
    buttonElement.textContent = "Set to Unknown";

    knownListContainer.appendChild(questionElement);
    knownListContainer.appendChild(buttonElement);
});