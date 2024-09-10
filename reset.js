// Get the container element where we'll display the list
const knownListContainer = document.getElementById('knownListContainer');

// Display each question as a new line in a <p> element

function createAndUpdateList() {
    console.log("Do I get triggered");
    allCollection.questions.forEach(item => {
        if (item.iKnowThis) {
            console.log(item + "is this getting hit?");
            let questionElement = document.createElement('p');
            let buttonElement = document.createElement('button');
            buttonElement.onclick = function () {
                item.iKnowThis = false;
                console.log(item.iKnowThis);
                createAndUpdateList();
            }
            questionElement.textContent = item.question; // Display the question
            buttonElement.textContent = "Set to Unknown";

            knownListContainer.appendChild(questionElement);
            knownListContainer.appendChild(buttonElement);
            console.log(item.iKnowThis);
        }

    });
}

createAndUpdateList();
