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

let catName = "all";


const question = document.getElementById('question');
const category = document.getElementById("category");
const iKnowThis = document.getElementById("answer-space");
const resetSpace = document.getElementById("known-list-link");
const linkToKnownList = document.getElementById("reset-space");
const makeKnownList = document.getElementById("reset-list");
const knownCounter = document.getElementById("known-counter");
const flipAnswer = document.getElementById("flip-question-answer");





makeAnswerButton(true);

let checker = true;

let selector = Math.floor(Math.random() * allCollection.questions.length);

//puts opening question out on the board starts from all collection
if (allCollection.questions[selector].iKnowThis) {
    while (allCollection.questions[selector].iKnowThis) {
        selector = Math.floor(Math.random() * allCollection.length);
        question.innerHTML = allCollection.questions[selector].question;
    }
} else {
    question.innerHTML = allCollection.questions[selector].question;
}

function nextQuestion() {
    checker = true;
    makeAnswerButton(checker);

    iKnowThis.innerHTML = ``;
    //Gonna use to make sure the same question doesn't return twice in a row
    let tempSelector = selector;
    if (catName == "all") {
        selector = Math.floor(Math.random() * allCollection.questions.length);
        while (allCollection.questions[selector].iKnowThis) {
            selector = Math.floor(Math.random() * allCollection.questions.length);
        }
        question.innerHTML = allCollection.questions[selector].question;
    } else {

        for (let i = 0; i < allCollection.categories.length; i++) {
            console.log(allCollection.categories[i]);
            if (allCollection.categories[i].name == catName) {
                console.log(allCollection.categories[i]);
                selector = Math.floor(Math.random() * allCollection.categories[i].questions.length);
                while (allCollection.categories[i].questions[selector].iKnowThis) {
                    selector = Math.floor(Math.random() * allCollection.categories[i].questions.length);
                }
                question.innerHTML = allCollection.categories[i].questions[selector].question;
            }
        }
    }

}

function showAnswer() {
    iKnowThis.innerHTML = `<button id="i-know-this" onclick="isKnown()">I Know This</button>`
    let type = 'answer';

    if (checker == true) {
        checker = false;
        makeAnswerButton(checker);
    } else if (checker == false) {
        checker = true;
        makeAnswerButton(checker);
    }

    if (catName == "all") {
        if (checker == false) {
            question.innerHTML = allCollection.questions[selector].answer;
        } else {
            question.innerHTML = allCollection.questions[selector].question;
        }
    } else {
        for (let i = 0; i < allCollection.categories.length; i++) {
            console.log(allCollection.categories[i]);
            if (allCollection.categories[i].name == catName) {
                if (checker == false) {
                    question.innerHTML = allCollection.categories[i].questions[selector].answer;
                } else {
                    question.innerHTML = allCollection.categories[i].questions[selector].answer;
                }
            }
        }
    }
}


function selectCategory(name) {
    catName = name;
    console.log(name);
    if (catName == "all") {
        selector = Math.floor(Math.random() * allCollection.questions.length);
        question.innerHTML = allCollection[selector].question;
    } else {
        for (let i = 0; i < allCollection.categories.length; i++) {
            if (allCollection.categories[i].name == catName) {
                selector = Math.floor(Math.random() * allCollection.categories[i].questions.length);
                question.innerHTML = allCollection.categories[i].questions[selector].question;
            }
        }
    }
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
    knownCounter.innerHTML = `<h2>Current Subject: ${formalCatName}</h2>\n<p>You have marked ${knownList.length} questions as known out of ${allCollection.questions.length}</p>`;
}


let knownList = [];
function isKnown() {
    if (catName == "all") {
        allCollection.questions[selector].iKnowThis = true;
        knownList.push(allCollection.questions[selector]);
    } else {
        for (let i = 0; i < allCollection.categories.length; i++) {
            if (allCollection.categories[i].name == catName) {
                allCollection.categories[i].questions[selector].iKnowThis = true;
                knownList.push(allCollection.categories[i].questions[selector]);
            }
        }
    }

    if (knownList.length > 0) {
        linkToKnownList.innerHTML = `<button id="link-to-known-list" onclick = "makeList()"><a href="reset.html">View Known</a></button>`
        resetSpace.innerHTML = `<button id="reset-space" onclick="resetAll()">Reset List</button>`
        knownCounter.innerHTML = `<h2>Current Subject: ${formalCatName}</h2>\n<p>You have marked ${knownList.length} questions as known out of ${allCollection.questions.length}</p>`;
    }

}

function resetAll() {
    knownList.forEach(item => {
        item.iKnowThis = false;
    });
    knownList = [];
    knownCounter.innerHTML = `<h2>Current Subject: ${formalCatName}</h2>\n<p>You have marked ${knownList.length} questions as known out of ${allCollection.questions.length}</p>`;
}

function makeList() {
    localStorage.setItem("knownList", JSON.stringify(knownList));
}

function makeAnswerButton(checker) {
    if (checker) {
        flipAnswer.innerHTML = `<button id="show-answer-btn" onclick="showAnswer()">Show Answer</button>`
    } else {
        flipAnswer.innerHTML = `<button id="show-answer-btn" onclick="showAnswer()">Show Question</button>`
    }
}

if (catName == "all") {
    formalCatName = "All";
} else if (catName == "java") {
    formalCatName = "Java"
} else if (catName == "web") {
    formalCatName = "Web";
} else if (catName == "http") {
    formalCatName = "HTTP Requests";
} else if (catName == "database") {
    formatCatName = "Database"
}

knownCounter.innerHTML = `<h2>Current Subject: ${formalCatName}</h2>\n<p>You have marked ${knownList.length} questions as known out of ${allCollection.questions.length}</p>`;

// User can add a question (maybe able to do this without a database and it would just be saved temporarily until we add back end down the road)

//TODO: User needs to be able to reset questions back to unknown

//TODO: Link known list to new page for individual reset



