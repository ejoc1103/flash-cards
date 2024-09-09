let javaCollection = [
    { id: 0, iKnowThis: false, question: "What is Polymorphism?", answer: "Definition: Allows objects to be treated as instances of their parent class, but with overridden behaviors. It can be achieved through method overriding (runtime) and method overloading (compile-time). Example: A parent class Animal has a method speak(). The child classes Dog and Cat override this method to provide different behaviors. Importance: Enables flexibility and reusability in code, allowing for cleaner, more maintainable systems." },
    { id: 1, iKnowThis: false, question: "What is Encapsulation?", answer: "Definition: Hides the internal state of an object and restricts access to it through public methods. Example: A class BankAccount has private variables balance and public methods deposit() and withdraw() to modify the balance. Importance: Protects the integrity of the data by preventing unauthorized access or modification." },
    { id: 2, iKnowThis: false, question: "What is Inheritance?", answer: "Definition: Allows one class to inherit properties and behavior (methods) from another class. Example: A class Vehicle can be a parent to Car and Bike, where both share common attributes like speed but also have their own unique methods. Importance: Promotes code reuse and establishes a natural hierarchy, reducing redundancy." },
    { id: 3, iKnowThis: false, question: "What is the relationship between a class and an object?", answer: "A class is a blueprint that defines the properties and methods, while an object is an instance of that class. Example: If 'Car' is a class, 'myCar = new Car()' is an object (instance) of that class." },
    { id: 4, iKnowThis: false, question: "What is the difference between overriding and overloading a method?", answer: "Overriding is redefining a method in a subclass, while overloading is defining multiple methods with the same name but different parameters. Example: Overriding toString() in a subclass; overloading print() to accept different argument types." },
    { id: 5, iKnowThis: false, question: "What is the difference between an abstract class and an interface?", answer: "An abstract class can contain both abstract methods and concrete methods, while an interface can only contain abstract methods (until Java 8). Abstract classes are used when you have shared behavior, while interfaces define a contract for behavior." }];

let databaseCollection = [
    { id: 0, iKnowThis: false, question: "What is the difference between a primary key and a foreign key?", answer: "A primary key uniquely identifies records in a table. A foreign key is a field in one table that refers to the primary key in another table, creating a relationship between the two tables." },
    { id: 1, iKnowThis: false, question: "Give an example of using inheritance in a project.", answer: "In a project with a superclass Shape, subclasses like Circle, Rectangle, and Triangle inherit common attributes (e.g., color, area) but implement their own method for calculating area." }];

let webCollection = [
    { id: 0, iKnowThis: false, question: "What is MVC?", answer: "MVC stands for Model-View-Controller. Model represents the data, View is what the user sees, and Controller handles input from the user and updates the Model and View accordingly." },
    { id: 1, iKnowThis: false, question: "Why is HTTP stateless?", answer: "HTTP is stateless because each request is independent. The server doesn't retain any information about previous requests unless additional mechanisms (e.g., cookies) are used." },
    { id: 2, iKnowThis: false, question: "What is the difference between HTTP and HTTPS?", answer: "HTTP is unencrypted, while HTTPS is encrypted using SSL/TLS to secure communication." },
    { id: 3, iKnowThis: false, question: "What is the difference between POST and GET?", answer: "GET retrieves data from the server, while POST sends data to the server to create or update resources. GET sends parameters in the URL, whereas POST sends them in the request body." },
    { id: 4, iKnowThis: false, question: "What is a block-level element?", answer: "A block-level element in HTML starts on a new line and takes up the full width available. Example: <div>, <p>, and <h1> are block-level elements." },
    { id: 5, iKnowThis: false, question: "What is the difference between HTML, CSS, and JavaScript?", answer: "HTML provides the structure of a webpage, CSS controls the appearance (styles), and JavaScript enables interactive behavior on the page." },
    { id: 6, iKnowThis: false, question: "What happens when a browser requests a web page?", answer: "The browser sends an HTTP request to the server, which processes the request and sends back an HTTP response containing the HTML, CSS, and JavaScript files to display the webpage." }];

let networkingCollection = [
    { id: 0, iKnowThis: false, question: "What is a top-level domain?", answer: "A top-level domain (TLD) is the highest level in the Domain Name System (DNS), such as .com, .org, or .net." },
    { id: 1, iKnowThis: false, question: "What is DNS?", answer: "DNS stands for Domain Name System. It translates human-readable domain names (like www.example.com) into IP addresses that computers use to identify each other." },
    { id: 2, iKnowThis: false, question: "What is the difference between POST and PUT?", answer: "POST is used to create a resource, while PUT is used to update an existing resource or create it if it does not exist." },
    { id: 3, iKnowThis: false, question: "What is Client/Server?", answer: "A client requests services or resources from a server. The server processes the request and sends back the requested resource or information." },
    { id: 4, iKnowThis: false, question: "What is Serialization?", answer: "Serialization is the process of converting an object into a stream of bytes for storage or transmission. Deserialization is the reverse process." }];

let httpRequestCollection = [
    { id: 0, iKnowThis: false, question: "What is the Message Body?", answer: "The message body contains the actual data being transmitted in an HTTP request or response. In a POST request, for example, the message body might contain form data." },
    { id: 1, iKnowThis: false, question: "Can a GET request have a Message Body?", answer: "Technically yes, but it is not recommended or common practice since GET is meant for retrieving data and should not modify resources on the server." },
    { id: 2, iKnowThis: false, question: "What is the Query String?", answer: "The query string is part of a URL that contains data in key-value pairs, typically after the `?`. Example: `?name=John&age=30`." },
    { id: 3, iKnowThis: false, question: "What is a request header?", answer: "A request header provides additional information about the HTTP request, such as authentication tokens, content type, and user-agent." }];

let miscCollection = [
    { id: 0, iKnowThis: false, question: "What is the most interesting program you've worked on?", answer: "This is a subjective question based on personal experience. Example: 'I worked on a project that involved integrating a third-party API for weather forecasting into a mobile app.'" },
    { id: 1, iKnowThis: false, question: "How do you validate that your code works as expected?", answer: "I validate my code through unit tests, integration tests, and manual testing. I also use debugging tools and logs to ensure that the code functions as expected." }];

let allLength = javaCollection.length + databaseCollection.length + webCollection.length + networkingCollection.length + httpRequestCollection.length + miscCollection.length;
let allCollection = [];
let catName = "all";

for (let i = 0; i < allLength; i++) {
    if (i < javaCollection.length) {
        allCollection[i] = {
            id: i,
            question: javaCollection[i].question,
            answer: javaCollection[i].answer
        }
    } else if (i < javaCollection.length + databaseCollection.length) {
        let count = 0;
        allCollection[i] = {
            id: i,
            question: databaseCollection[count].question,
            answer: databaseCollection[count].answer
        }
        count++;
    } else if (i < javaCollection.length + databaseCollection.length + webCollection.length) {
        let count = 0;
        allCollection[i] = {
            id: i,
            question: webCollection[count].question,
            answer: webCollection[count].answer
        }
        count++;
    } else if (i < javaCollection.length + databaseCollection.length + webCollection.length + networkingCollection.length) {
        let count = 0;
        allCollection[i] = {
            id: i,
            question: networkingCollection[count].question,
            answer: networkingCollection[count].answer
        }
        count++;
    } else if (i < javaCollection.length + databaseCollection.length + webCollection.length + networkingCollection.length + httpRequestCollection.length) {
        let count = 0;
        allCollection[i] = {
            id: i,
            question: httpRequestCollection[count].question,
            answer: httpRequestCollection[count].answer
        }
        count++;
    } else if (i < javaCollection.length + databaseCollection.length + webCollection.length + networkingCollection.length + miscCollection.length) {
        let count = 0;
        allCollection[i] = {
            id: i,
            question: miscCollection[count].question,
            answer: miscCollection[count].answer
        }
        count++;
    }
}


let categorySelector = -1;

const question = document.getElementById('question');
const category = document.getElementById("category");
const iKnowThis = document.getElementById("answer-space");
const resetSpace = document.getElementById("known-list-link");
const linkToKnownList = document.getElementById("reset-space");
const makeKnownList = document.getElementById("reset-list")


let selector = Math.floor(Math.random() * allCollection.length);

if (allCollection[selector].iKnowThis) {
    while (allCollection[selector].iKnowThis) {
        console.log("Am I triggered")
        selector = Math.floor(Math.random() * allCollection.length);
        question.innerHTML = allCollection[selector].question;
    }
} else {
    question.innerHTML = allCollection[selector].question;
}

function nextQuestion() {
    iKnowThis.innerHTML = ``;
    if (catName == "java") {
        selector = Math.floor(Math.random() * javaCollection.length);
        while (javaCollection[selector].iKnowThis == true) {
            selector = Math.floor(Math.random() * javaCollection.length);
        }
        question.innerHTML = javaCollection[selector].question;
    }
    else if (catName == "database") {
        selector = Math.floor(Math.random() * databaseCollection.length);
        while (databaseCollection[selector].iKnowThis == true) {
            selector = Math.floor(Math.random() * databaseCollection.length);
        }
        question.innerHTML = databaseCollection[selector].question;
    }
    else if (catName == "web") {
        selector = Math.floor(Math.random() * webCollection.length);
        while (webCollection[selector].iKnowThis == true) {
            selector = Math.floor(Math.random() * webCollection.length);
        }
        question.innerHTML = webCollection[selector].question;
    }
    else if (catName == "networking") {
        selector = Math.floor(Math.random() * networkingCollection.length);
        while (networkingCollection[selector].iKnowThis == true) {
            selector = Math.floor(Math.random() * networkingCollection.length);
        }
        question.innerHTML = networkingCollection[selector].question;
    }
    else if (catName == "http") {
        selector = Math.floor(Math.random() * httpRequestCollection.length);
        while (httpRequestCollection[selector].iKnowThis == true) {
            selector = Math.floor(Math.random() * httpRequestCollection.length);
        }
        question.innerHTML = httpRequestCollection[selector].question;
    } else {
        selector = Math.floor(Math.random() * allCollection.length);
        while (allCollection[selector].iKnowThis == true) {
            selector = Math.floor(Math.random() * allCollection.length);
        }
        question.innerHTML = allCollection[selector].question;

    }

}

function showAnswer() {
    iKnowThis.innerHTML = `<button id="i-know-this" onclick="isKnown()">I Know This</button>`
    if (catName == "java") {
        question.innerHTML = javaCollection[selector].answer;
    }
    else if (catName == "database") {
        question.innerHTML = databaseCollection[selector].answer;
    }
    else if (catName == "web") {
        question.innerHTML = webCollection[selector].answer;
    }
    else if (catName == "networking") {
        question.innerHTML = networkingCollection[selector].answer;
    }
    else if (catName == "http") {
        question.innerHTML = httpRequestCollection[selector].answer;
    } else {
        question.innerHTML = allCollection[selector].answer;

    }

}


function selectCategory(name) {
    catName = name;
    console.log(name);
    if (name == "java") {
        selector = Math.floor(Math.random() * javaCollection.length);
        question.innerHTML = javaCollection[selector].question;
    }
    else if (name == "database") {
        selector = Math.floor(Math.random() * databaseCollection.length);
        question.innerHTML = databaseCollection[selector].question;
    }
    else if (name == "web") {
        selector = Math.floor(Math.random() * webCollection.length);
        question.innerHTML = webCollection[selector].question;
    }
    else if (name == "networking") {
        selector = Math.floor(Math.random() * networkingCollection.length);
        question.innerHTML = networkingCollection[selector].question;
    }
    else if (name == "http") {
        selector = Math.floor(Math.random() * httpRequestCollection.length);
        question.innerHTML = httpRequestCollection[selector].question;
    }
    else {
        selector = Math.floor(Math.random() * allCollection.length);
        question.innerHTML = allCollection[selector].question;
    }

}
let knownList = [];
function isKnown() {
    if (catName == "java") {
        javaCollection[selector].iKnowThis = true;
        knownList.push(javaCollection[selector]);
    }
    else if (catName == "database") {
        databaseCollection[selector].iKnowThis = true;
        knownList.push(databaseCollection[selector]);
    }
    else if (catName == "web") {
        webCollection[selector].iKnowThis = true;
        knownList.push(webCollection[selector]);
    }
    else if (catName == "networking") {
        networkingCollection[selector].iKnowThis = true;
        knownList.push(networkingCollection[selector]);
    }
    else if (catName == "http") {
        httpRequestCollection[selector].iKnowThis = true;
        knownList.push(httpRequestCollection[selector]);
    } else {
        allCollection[selector].iKnowThis = true;
        knownList.push(allCollection[selector]);
    }
    if (knownList.length > 0){
        linkToKnownList.innerHTML = `<button id="link-to-known-list" onclick = "makeList()"><a href="reset.html">View Known</a></button>`
        resetSpace.innerHTML = `<button id="reset-space" onclick="resetAll()">Reset List</button>`
    }
  
}
function resetAll(){
    for(let i = 0; i< knownList.length; i++){
        knownList[i].iKnowThis = false;
    }
}

function makeList(){
    for(let i = 0; i< knownList.length; i++){
        console.log(knownList[i].question)
        makeKnownList.innerHTML=`<p>${knownList[i].question}</p>`;
    }
}

{/* <a href="reset.html">View Known</a> */}
// User can add a question (maybe able to do this without a database and it would just be saved temporarily until we add back end down the road)

//TODO: User needs to be able to reset questions back to unknown

//TODO: Link known list to new page for individual reset



