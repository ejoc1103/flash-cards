let javaCollection = [
    { id: 1, question: "What is Polymorphism?", answer: "Definition: Allows objects to be treated as instances of their parent class, but with overridden behaviors. It can be achieved through method overriding (runtime) and method overloading (compile-time). Example: A parent class Animal has a method speak(). The child classes Dog and Cat override this method to provide different behaviors. Importance: Enables flexibility and reusability in code, allowing for cleaner, more maintainable systems." },
    { id: 2, question: "What is Encapsulation?", answer: "Definition: Hides the internal state of an object and restricts access to it through public methods. Example: A class BankAccount has private variables balance and public methods deposit() and withdraw() to modify the balance. Importance: Protects the integrity of the data by preventing unauthorized access or modification." },
    { id: 3, question: "What is Inheritance?", answer: "Definition: Allows one class to inherit properties and behavior (methods) from another class. Example: A class Vehicle can be a parent to Car and Bike, where both share common attributes like speed but also have their own unique methods. Importance: Promotes code reuse and establishes a natural hierarchy, reducing redundancy." },
    { id: 4, question: "What is the relationship between a class and an object?", answer: "A class is a blueprint that defines the properties and methods, while an object is an instance of that class. Example: If 'Car' is a class, 'myCar = new Car()' is an object (instance) of that class." },
    { id: 5, question: "What is the difference between overriding and overloading a method?", answer: "Overriding is redefining a method in a subclass, while overloading is defining multiple methods with the same name but different parameters. Example: Overriding toString() in a subclass; overloading print() to accept different argument types." },
    { id: 6, question: "What is the difference between an abstract class and an interface?", answer: "An abstract class can contain both abstract methods and concrete methods, while an interface can only contain abstract methods (until Java 8). Abstract classes are used when you have shared behavior, while interfaces define a contract for behavior." }];

let databaseCollection = [
    { id: 1, question: "What is the difference between a primary key and a foreign key?", answer: "A primary key uniquely identifies records in a table. A foreign key is a field in one table that refers to the primary key in another table, creating a relationship between the two tables." },
    { id: 2, question: "Give an example of using inheritance in a project.", answer: "In a project with a superclass Shape, subclasses like Circle, Rectangle, and Triangle inherit common attributes (e.g., color, area) but implement their own method for calculating area." }];

let webCollection = [
    { id: 1, question: "What is MVC?", answer: "MVC stands for Model-View-Controller. Model represents the data, View is what the user sees, and Controller handles input from the user and updates the Model and View accordingly." },
    { id: 2, question: "Why is HTTP stateless?", answer: "HTTP is stateless because each request is independent. The server doesn't retain any information about previous requests unless additional mechanisms (e.g., cookies) are used." },
    { id: 3, question: "What is the difference between HTTP and HTTPS?", answer: "HTTP is unencrypted, while HTTPS is encrypted using SSL/TLS to secure communication." },
    { id: 4, question: "What is the difference between POST and GET?", answer: "GET retrieves data from the server, while POST sends data to the server to create or update resources. GET sends parameters in the URL, whereas POST sends them in the request body." },
    { id: 5, question: "What is a block-level element?", answer: "A block-level element in HTML starts on a new line and takes up the full width available. Example: <div>, <p>, and <h1> are block-level elements." },
    { id: 6, question: "What is the difference between HTML, CSS, and JavaScript?", answer: "HTML provides the structure of a webpage, CSS controls the appearance (styles), and JavaScript enables interactive behavior on the page." },
    { id: 7, question: "What is the most recent JavaScript concept or framework you've taught yourself?", answer: "This is a subjective question. Example: 'Recently, I taught myself React, which helps build reusable components in front-end applications.'" },
    { id: 8, question: "What happens when a browser requests a web page?", answer: "The browser sends an HTTP request to the server, which processes the request and sends back an HTTP response containing the HTML, CSS, and JavaScript files to display the webpage." }];

let networkingCollection = [
    { id: 1, question: "What is a top-level domain?", answer: "A top-level domain (TLD) is the highest level in the Domain Name System (DNS), such as .com, .org, or .net." },
    { id: 2, question: "What is DNS?", answer: "DNS stands for Domain Name System. It translates human-readable domain names (like www.example.com) into IP addresses that computers use to identify each other." },
    { id: 3, question: "What is the difference between POST and PUT?", answer: "POST is used to create a resource, while PUT is used to update an existing resource or create it if it does not exist." },
    { id: 4, question: "What is Client/Server?", answer: "A client requests services or resources from a server. The server processes the request and sends back the requested resource or information." },
    { id: 5, question: "What is Serialization?", answer: "Serialization is the process of converting an object into a stream of bytes for storage or transmission. Deserialization is the reverse process." }];

let httpRequestCollection = [
    { id: 1, question: "What is the Message Body?", answer: "The message body contains the actual data being transmitted in an HTTP request or response. In a POST request, for example, the message body might contain form data." },
    { id: 2, question: "Can a GET request have a Message Body?", answer: "Technically yes, but it is not recommended or common practice since GET is meant for retrieving data and should not modify resources on the server." },
    { id: 3, question: "What is the Query String?", answer: "The query string is part of a URL that contains data in key-value pairs, typically after the `?`. Example: `?name=John&age=30`." },
    { id: 4, question: "What is a request header?", answer: "A request header provides additional information about the HTTP request, such as authentication tokens, content type, and user-agent." }];

let miscCollection = [
    { id: 1, question: "What is the most interesting program you've worked on?", answer: "This is a subjective question based on personal experience. Example: 'I worked on a project that involved integrating a third-party API for weather forecasting into a mobile app.'" },
    { id: 2, question: "How do you validate that your code works as expected?", answer: "I validate my code through unit tests, integration tests, and manual testing. I also use debugging tools and logs to ensure that the code functions as expected." }];

    let allLength = javaCollection.length + databaseCollection.length + webCollection.length + networkingCollection.length +httpRequestCollection.length + miscCollection.length;
    let allCollection =[];
    for(let i = 0 ; i< 6; i++){
        allCollection[i]

    }


let categorySelector = -1;

const question = document.getElementById('question');
const category = document.getElementById("category");


let selector = Math.floor(Math.random() * javaCollection.length);

question.innerHTML = javaCollection[selector].question;
category.innerHTML =

    function nextQuestion() {
        console.log(Math.random());
        console.log(Math.random() * javaCollection.length);
        selector = Math.floor(Math.random() * javaCollection.length);
        console.log(selector);
        question.innerHTML = javaCollection[selector].question;
    }

function showAnswer() {
    question.innerHTML = javaCollection[selector].answer;
}

function selectCategory(name) {
    console.log(name);
    if (name == "java") {
        selector = Math.floor(Math.random() * javaCollection.length);
        console.log(selector)
    }
    else if (name == "database"){
        selector = Math.floor(Math.random() * databaseCollection.length);
        console.log(selector)
    }
    else if (name == "web"){
        selector = Math.floor(Math.random() * webCollection.length);
        console.log(selector)
    }
    else if (name == "networking"){
        selector = Math.floor(Math.random() * networkingCollection.length);
        console.log(selector)
    }
    else if (name == "http"){
        selector = Math.floor(Math.random() * httpRequestCollection.length);
        console.log(selector)
    }
    else {
        selector = Math.floor(Math.random() * all.length);
        console.log(all.length)
        console.log(selector)
    }


}

//TODO: user should have the option to select a category for questions
// User can select all and go through all of the question
// User can add a question (maybe able to do this without a database and it would just be saved temporarily until we add back end down the road)

// Need and option to flip the card from question to answer

//TODO: User should be able to mark a question and known so it doesn't continue to pop up



//TODO: User needs to be able to reset questions back to unknown



