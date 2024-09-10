let javaCollection = {
    name: "java",
    questions: [
        { id: 0, iKnowThis: false, question: "What is Polymorphism?", answer: "Definition: Allows objects to be treated as instances of their parent class, but with overridden behaviors. It can be achieved through method overriding (runtime) and method overloading (compile-time). Example: A parent class Animal has a method speak(). The child classes Dog and Cat override this method to provide different behaviors. Importance: Enables flexibility and reusability in code, allowing for cleaner, more maintainable systems." },
        { id: 1, iKnowThis: false, question: "What is Encapsulation?", answer: "Definition: Hides the internal state of an object and restricts access to it through public methods. Example: A class BankAccount has private variables balance and public methods deposit() and withdraw() to modify the balance. Importance: Protects the integrity of the data by preventing unauthorized access or modification." },
        { id: 2, iKnowThis: false, question: "What is Inheritance?", answer: "Definition: Allows one class to inherit properties and behavior (methods) from another class. Example: A class Vehicle can be a parent to Car and Bike, where both share common attributes like speed but also have their own unique methods. Importance: Promotes code reuse and establishes a natural hierarchy, reducing redundancy." },
        { id: 3, iKnowThis: false, question: "What is the relationship between a class and an object?", answer: "A class is a blueprint that defines the properties and methods, while an object is an instance of that class. Example: If 'Car' is a class, 'myCar = new Car()' is an object (instance) of that class." },
        { id: 4, iKnowThis: false, question: "What is the difference between overriding and overloading a method?", answer: "Overriding is redefining a method in a subclass, while overloading is defining multiple methods with the same name but different parameters. Example: Overriding toString() in a subclass; overloading print() to accept different argument types." },
        { id: 5, iKnowThis: false, question: "What is the difference between an abstract class and an interface?", answer: "An abstract class can contain both abstract methods and concrete methods, while an interface can only contain abstract methods (until Java 8). Abstract classes are used when you have shared behavior, while interfaces define a contract for behavior." }
    ]
}

let databaseCollection = {
    name: "database",
    questions: [
        { id: 0, iKnowThis: false, question: "What is the difference between a primary key and a foreign key?", answer: "A primary key uniquely identifies records in a table. A foreign key is a field in one table that refers to the primary key in another table, creating a relationship between the two tables." },
        { id: 1, iKnowThis: false, question: "Give an example of using inheritance in a project.", answer: "In a project with a superclass Shape, subclasses like Circle, Rectangle, and Triangle inherit common attributes (e.g., color, area) but implement their own method for calculating area." }
    ]
}
let webCollection =
{
    name: "web",

    questions: [
        { id: 0, iKnowThis: false, question: "What is MVC?", answer: "MVC stands for Model-View-Controller. Model represents the data, View is what the user sees, and Controller handles input from the user and updates the Model and View accordingly." },
        { id: 1, iKnowThis: false, question: "Why is HTTP stateless?", answer: "HTTP is stateless because each request is independent. The server doesn't retain any information about previous requests unless additional mechanisms (e.g., cookies) are used." },
        { id: 2, iKnowThis: false, question: "What is the difference between HTTP and HTTPS?", answer: "HTTP is unencrypted, while HTTPS is encrypted using SSL/TLS to secure communication." },
        { id: 3, iKnowThis: false, question: "What is the difference between POST and GET?", answer: "GET retrieves data from the server, while POST sends data to the server to create or update resources. GET sends parameters in the URL, whereas POST sends them in the request body." },
        { id: 4, iKnowThis: false, question: "What is a block-level element?", answer: "A block-level element in HTML starts on a new line and takes up the full width available. Example: <div>, <p>, and <h1> are block-level elements." },
        { id: 5, iKnowThis: false, question: "What is the difference between HTML, CSS, and JavaScript?", answer: "HTML provides the structure of a webpage, CSS controls the appearance (styles), and JavaScript enables interactive behavior on the page." },
        { id: 6, iKnowThis: false, question: "What happens when a browser requests a web page?", answer: "The browser sends an HTTP request to the server, which processes the request and sends back an HTTP response containing the HTML, CSS, and JavaScript files to display the webpage." }
    ]


}
let networkingCollection = {

    name: "networking",
    questions:
        [
            { id: 0, iKnowThis: false, question: "What is a top-level domain?", answer: "A top-level domain (TLD) is the highest level in the Domain Name System (DNS), such as .com, .org, or .net." },
            { id: 1, iKnowThis: false, question: "What is DNS?", answer: "DNS stands for Domain Name System. It translates human-readable domain names (like www.example.com) into IP addresses that computers use to identify each other." },
            { id: 2, iKnowThis: false, question: "What is the difference between POST and PUT?", answer: "POST is used to create a resource, while PUT is used to update an existing resource or create it if it does not exist." },
            { id: 3, iKnowThis: false, question: "What is Client/Server?", answer: "A client requests services or resources from a server. The server processes the request and sends back the requested resource or information." },
            { id: 4, iKnowThis: false, question: "What is Serialization?", answer: "Serialization is the process of converting an object into a stream of bytes for storage or transmission. Deserialization is the reverse process." }
        ]

}
let httpRequestCollection = {
    name: "http",
    questions:
        [
            { id: 0, iKnowThis: false, question: "What is the Message Body?", answer: "The message body contains the actual data being transmitted in an HTTP request or response. In a POST request, for example, the message body might contain form data." },
            { id: 1, iKnowThis: false, question: "Can a GET request have a Message Body?", answer: "Technically yes, but it is not recommended or common practice since GET is meant for retrieving data and should not modify resources on the server." },
            { id: 2, iKnowThis: false, question: "What is the Query String?", answer: "The query string is part of a URL that contains data in key-value pairs, typically after the `?`. Example: `?name=John&age=30`." },
            { id: 3, iKnowThis: false, question: "What is a request header?", answer: "A request header provides additional information about the HTTP request, such as authentication tokens, content type, and user-agent." }
        ]
}

let miscCollection = {
    name: "misc",
    questions:
        [
            { id: 0, iKnowThis: false, question: "What is the most interesting program you've worked on?", answer: "This is a subjective question based on personal experience. Example: 'I worked on a project that involved integrating a third-party API for weather forecasting into a mobile app.'" },
            { id: 1, iKnowThis: false, question: "How do you validate that your code works as expected?", answer: "I validate my code through unit tests, integration tests, and manual testing. I also use debugging tools and logs to ensure that the code functions as expected." }
        ]
}

let allCollection = {
    name: "all",
    categories: [javaCollection, databaseCollection, webCollection, networkingCollection, httpRequestCollection, miscCollection],
    questions: javaCollection.questions.concat(databaseCollection.questions, webCollection.questions, networkingCollection.questions, httpRequestCollection.questions, miscCollection.questions)
};


// Assigning all the dom elements we need for main page
const index = document.getElementsByClassName("index");
const question = document.getElementById('question');
const category = document.getElementById("category");
const iKnowThisButton = document.getElementById("answer-space");
const resetSpace = document.getElementById("known-list-link");
const linkToKnownList = document.getElementById("reset-space");
const makeKnownList = document.getElementById("reset-list");
const knownCounter = document.getElementById("known-counter");
const flipAnswer = document.getElementById("flip-question-answer");
const showListButton = document.getElementById("show-list-button");
const getBackToWork = document.getElementById("get-back-to-work");

// Assigning all the dom elements we need for list page
const resetDiv = document.getElementsByClassName("reset");
const showQuestionsDiv = document.getElementById("show-questions-div");
const thingsHeader = document.getElementById("reset-header");
const knownListContainer = document.getElementById('knownListContainer');

let catName = "all";
let formalCatName = "All";
let knownCount = 0;
let homePage = true;

let checker = false;

let selector = Math.floor(Math.random() * allCollection.questions.length);
//Assign current question for tracking
let currentQuestion = allCollection.questions[selector];

if (homePage == true) {
    resetDiv[0].setAttribute("id", "hidden");
    index[0].setAttribute("id", "");
    showAnswer();
    resetSpace.innerHTML = `<button id="show-list-button" onClick="createResetPage()">See what I know</button>`;
}






//puts opening question out on the board starts from all collection
if (question != null) {

    if (allCollection.questions[selector].iKnowThis) {
        while (allCollection.questions[selector].iKnowThis) {
            selector = Math.floor(Math.random() * allCollection.length);
            question.innerHTML = allCollection.questions[selector].question;
        }
    } else {
        question.innerHTML = allCollection.questions[selector].question;
    }
}




//Selects and shows nextQuestion
function nextQuestion() {
    checker = true;
    makeAnswerButton(checker);
    let newQuestion = currentQuestion;
    iKnowThisButton.innerHTML = ``;

    while (newQuestion == currentQuestion) {

        if (catName == "all") {
            if (knownCount == allCollection.questions.length) {
                alert("You marked everything in this category as known! Refresh the page or mark some questions unknown");
                return;
            }
            selector = Math.floor(Math.random() * allCollection.questions.length);
            while (allCollection.questions[selector].iKnowThis) {
                selector = Math.floor(Math.random() * allCollection.questions.length);
            }
            newQuestion = allCollection.questions[selector];
            question.innerHTML = allCollection.questions[selector].question;
        } else {

            for (let i = 0; i < allCollection.categories.length; i++) {
                if (allCollection.categories[i].name == catName) {
                    if (knownCount == allCollection.categories[i].questions.length) {
                        alert("You marked everything in this category as known! Refresh the page or mark some questions unknown");
                        return;
                    }
                    selector = Math.floor(Math.random() * allCollection.categories[i].questions.length);
                    while (allCollection.categories[i].questions[selector].iKnowThis) {
                        selector = Math.floor(Math.random() * allCollection.categories[i].questions.length);
                    }
                    newQuestion = allCollection.categories[i].questions[selector];
                    question.innerHTML = allCollection.categories[i].questions[selector].question;
                }
            }
        }
    }

    currentQuestion = newQuestion;

}


//Flips question/answer button and reveals the i know this button when showing answer
function showAnswer() {
    if (checker == true) {
        checker = false;
        makeAnswerButton(checker);
        iKnowThisButton.innerHTML = `<button id="i-know-this" onclick="isKnown()">I Know This</button>`
        question.innerHTML = currentQuestion.answer;
    } else if (checker == false) {
        checker = true;
        makeAnswerButton(checker);
        iKnowThisButton.innerHTML = ``;
        question.innerHTML = currentQuestion.question;
    }

}


function selectCategory(name) {
    //Sets category name and then calls nextQuestions
    catName = name;
    nextQuestion();
    console.log(catName);
    isKnown();

    //Sets formal names so Catagories appear nicer on the web page
    if (catName == "all") {
        formalCatName = "All";
    } else if (catName == "java") {
        formalCatName = "Java"
    } else if (catName == "web") {
        formalCatName = "Web";
    } else if (catName == "http") {
        formalCatName = "HTTP Requests";
    } else if (catName == "database") {
        formalCatName = "Database"
    } else if (catName == "networking") {
        formalCatName = "Networking";
    }

    //Updates html to show right category
    knownCounter.innerHTML = `<h2>Current Subject: ${formalCatName}</h2>\n<p>You have marked ${knownCount} questions as known out of ${allCollection.questions.length}</p>`;
}


// initialize array to keep track of known questions Adds buttons and changes stats accordingly
function isKnown() {
    console.log(catName);
    let tempKnownCount = 0;

    currentQuestion.iKnowThis = true;
    let thisCollection;
    if (catName == "all") {

        allCollection.questions.forEach(question => {
            if (question.iKnowThis) {
                tempKnownCount++;
            }
        })
        thisCollection = allCollection;
    } else {
        for (let i = 0; i < allCollection.categories.length; i++) {

            if (allCollection.categories[i].name == catName) {

                allCollection.categories[i].questions.forEach(question => {
                    if (question.iKnowThis) {
                        tempKnownCount++;
                    }
                })
                thisCollection = allCollection.categories[i];
            }
        }

    }

    if (tempKnownCount != knownCount) {
        knownCount = tempKnownCount;
    } else {
        tempKnownCount = -1;
    }

    knownCounter.innerHTML = `<h2>Current Subject: ${formalCatName}</h2>\n<p>You have marked ${knownCount} questions as known out of ${thisCollection.questions.length}</p>`;
    if (knownCount == 1 && tempKnownCount == 1) {
        resetSpace.innerHTML += `\n<button id="reset-space" onclick="resetAll()">Reset List</button>`;
    }
    nextQuestion();

}
function getBack() {
    homePage = true;
    if (homePage == true) {
        resetDiv[0].setAttribute("id", "hidden");
        index[0].setAttribute("id", "");
        showAnswer();
        resetSpace.innerHTML = `<button id="show-list-button" onClick="createResetPage()">See what I know</button>`;
        resetSpace.innerHTML += `\n<button id="reset-space" onclick="resetAll()">Reset List</button>`;

    }
}

function createResetPage() {
    homePage = false;

    index[0].setAttribute("id", "hidden")
    resetDiv[0].setAttribute("id", "");
    showQuestionsDiv.innerHTML = "";
    getBackToWork.innerHTML = `<button id="show-questions-button" onClick="getBack()">Get Back to Work</button>`;

    function createAndUpdateList() {
        console.log("Do I get triggered");
        allCollection.questions.forEach(item => {
            if (item.iKnowThis) {
                console.log(item + "is this getting hit?");
                let questionElement = document.createElement('p');
                let buttonElement = document.createElement('button');
                buttonElement.onclick = function () {
                    item.iKnowThis = false;
                    knownCount--;
                    knownCounter.innerHTML = `<h2>Current Subject: ${formalCatName}</h2>\n<p>You have marked ${knownCount} questions as known out of ${allCollection.questions.length}</p>`;
                    createResetPage();
                }
                questionElement.textContent = item.question; // Display the question
                buttonElement.textContent = "Set to Unknown";

                showQuestionsDiv.appendChild(questionElement);
                showQuestionsDiv.appendChild(buttonElement);
            }

        });
    }

    createAndUpdateList();
}

// resets all questions back to unknown
function resetAll() {
    allCollection.questions.forEach(item => {
        item.iKnowThis = false;
    });
    knownCounter.innerHTML = `<h2>Current Subject: ${formalCatName}</h2>\n<p>You have marked ${knownCount} questions as known out of ${allCollection.questions.length}</p>`;
    isKnown();
}

function makeAnswerButton(checker) {
    if (checker) {
        flipAnswer.innerHTML = `<button id="show-answer-btn" onclick="showAnswer()">Show Answer</button>`
    } else {
        flipAnswer.innerHTML = `<button id="show-answer-btn" onclick="showAnswer()">Show Question</button>`
    }
}
if (knownCounter != null) {
    knownCounter.innerHTML = `<h2>Current Subject: ${formalCatName}</h2>\n<p>You have marked ${knownCount} questions as known out of ${allCollection.questions.length}</p>`;
}

// User can add a question (maybe able to do this without a database and it would just be saved temporarily until we add back end down the road)

//TODO: Link known list to new page for individual reset



