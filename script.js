function wave() {
const robot = document.getElementById("robot");
robot.classList.add("wave-animation");

setTimeout(function () {
    robot.classList.remove("wave-animation");
}, 2000);

}

function happy() {
const robot = document.getElementById("robot");
robot.classList.add("happy-animation");

speak("I am very happy!");

setTimeout(function () {
    robot.classList.remove("happy-animation");
}, 2000);

}

function dance() {
const robot = document.getElementById("robot");
robot.classList.add("dance-animation");

speak("Let's dance!");

setTimeout(function () {
    robot.classList.remove("dance-animation");
}, 3000);

}

function think() {
const robot = document.getElementById("robot");
robot.classList.add("think-animation");

speak("Hmm... Let me think.");

setTimeout(function () {
    robot.classList.remove("think-animation");
}, 2000);

}

function batteryLow() {
alert("🔋 Robo Battery is Low!");
}
function speak(text) {

const speech = new SpeechSynthesisUtterance(text);

speech.lang = "en-IN";
speech.rate = 1;
speech.pitch = 1.1;

window.speechSynthesis.speak(speech);

}
function sendMessage() {

let input = document.getElementById("user-input");
let display = document.getElementById("chat-display");

let message = input.value.trim();

if (message === "") {
    return;
}

display.innerHTML += `<p>👤 You: ${message}</p>`;

let text = message.toLowerCase();

let reply = "";
if (
    text.includes("hello") ||
    text.includes("hi") ||
    text.includes("hey")
) {
    reply = "🤖 Robo: Hello! 👋 How are you?";
}

else if (
    text.includes("how are you") ||
    text.includes("how r u")
) {
    reply = "🤖 Robo: I am doing great! 😄 How can I help you?";
}

else if (
    text.includes("your name") ||
    text.includes("what is your name") ||
    text.includes("who are you")
) {
    reply = "🤖 Robo: My name is Robo! 🤖 I am your virtual robot assistant.";
}
else if (
    text.includes("what is data science") ||
    text.includes("define data science") ||
    text.includes("data science")
) {
    reply =
        "🤖 Robo: Data Science is the process of collecting, cleaning, analyzing and interpreting data to find useful information and make better decisions. It uses Python, statistics, machine learning and data visualization.";
}
else if (
    text.includes("what is ai") ||
    text.includes("what is artificial intelligence") ||
    text.includes("define artificial intelligence")
) {
    reply =
        "🤖 Robo: Artificial Intelligence, or AI, is a technology that allows computers to perform tasks that normally need human intelligence, such as learning, reasoning, understanding language and recognizing images.";
}
else if (
    text.includes("what is machine learning") ||
    text.includes("define machine learning")
) {
    reply =
        "🤖 Robo: Machine Learning is a part of Artificial Intelligence. It allows computers to learn patterns from data and make predictions or decisions without being explicitly programmed for every task.";
}
else if (
    text.includes("what is deep learning") ||
    text.includes("define deep learning")
) {
    reply =
        "🤖 Robo: Deep Learning is a branch of Machine Learning that uses artificial neural networks with many layers. It is commonly used for image recognition, speech recognition and natural language processing.";
}
else if (
    text.includes("what is python") ||
    text.includes("python")
) {
    reply =
        "🤖 Robo: Python is a popular high-level programming language. It is easy to learn and widely used in Artificial Intelligence, Data Science, Web Development and Automation.";
}
else if (
    text.includes("what is java") ||
    text.includes("java programming")
) {
    reply =
        "🤖 Robo: Java is a popular object-oriented programming language. It is widely used for application development, web applications, enterprise software and Android development.";
}
else if (
    text.includes("what is big data") ||
    text.includes("define big data")
) {
    reply =
        "🤖 Robo: Big Data refers to very large and complex amounts of data that traditional tools cannot easily process. Big Data is commonly described using Volume, Velocity, Variety, Veracity and Value.";
}
else if (
    text.includes("what is sql") ||
    text.includes("define sql")
) {
    reply =
        "🤖 Robo: SQL stands for Structured Query Language. It is used to store, retrieve, update and manage data in relational databases.";
}
else if (
    text.includes("what is database") ||
    text.includes("define database")
) {
    reply =
        "🤖 Robo: A database is an organized collection of data that can be easily stored, accessed, managed and updated.";
}
else if (
    text.includes("what is html") ||
    text.includes("define html")
) {
    reply =
        "🤖 Robo: HTML stands for HyperText Markup Language. It is used to create and structure the content of web pages.";
}
else if (
    text.includes("what is css") ||
    text.includes("define css")
) {
    reply =
        "🤖 Robo: CSS stands for Cascading Style Sheets. It is used to design and style web pages, including colors, fonts, layouts and animations.";
}
else if (
    text.includes("what is javascript") ||
    text.includes("what is js")
) {
    reply =
        "🤖 Robo: JavaScript is a programming language used to make web pages interactive. It can handle buttons, animations, forms, chat systems and many other features.";
}
else if (
    text.includes("what is iot") ||
    text.includes("internet of things")
) {
    reply =
        "🤖 Robo: IoT stands for Internet of Things. It connects physical devices to the internet so they can collect, exchange and use data.";
}
else if (
    text.includes("what is chatgpt")
) {
    reply =
        "🤖 Robo: ChatGPT is an AI system designed to understand and generate human-like text. It can help with questions, explanations, writing, learning and many other tasks.";
}
else if (
    text.includes("what is hackathon") ||
    text.includes("hackathon")
) {
    reply =
        "🤖 Robo: A hackathon is an event where people work together for a limited time to create a solution, application or prototype for a problem.";
}
else if (
    text.includes("what is robot") ||
    text.includes("robot")
) {
    reply =
        "🤖 Robo: A robot is a machine that can perform tasks automatically or with human control. Robots can be used in industries, healthcare, education and many other areas.";
}
else if (
    text.includes("thank") ||
    text.includes("thanks")
) {
    reply =
        "🤖 Robo: You're welcome! 😊";
}
else if (
    text.includes("bye") ||
    text.includes("goodbye")
) {
    reply =
        "🤖 Robo: Bye! 👋 Have a nice day!";
}
else if (
    text.includes("dance") ||
    text.includes("dancing")
) {
    reply =
        "🤖 Robo: Yes! 🎵 Let's dance!";

    dance();
}
else if (
    text.includes("wave")
) {
    reply =
        "🤖 Robo: Hello! 👋";

    wave();
}
else if (
    text.includes("help") ||
    text.includes("what can you do")
) {
    reply =
        "🤖 Robo: I can answer basic questions about AI, Data Science, Machine Learning, Python, Java, Big Data, SQL, HTML, CSS and JavaScript. I can also dance, wave, think and talk!";
}
else {
    reply =
        "🤖 Robo: I don't know that yet 🤔. Try asking me about AI, Data Science, Machine Learning, Python, Java, Big Data or SQL.";
}


display.innerHTML += `<p>${reply}</p>`;

speak(reply.replace("🤖 Robo: ", ""));

input.value = "";

display.scrollTop = display.scrollHeight;

}
function startVoice() {

const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

if (!SpeechRecognition) {

    alert("Sorry! Voice input is not supported in this browser.");

    return;
}

const recognition = new SpeechRecognition();

recognition.lang = "en-IN";

recognition.start();

recognition.onresult = function (event) {

    const text =
        event.results[0][0].transcript;

    document.getElementById("user-input").value = text;

    sendMessage();
};

recognition.onerror = function () {

    alert("🎤 Please allow microphone access and try again.");
};

}