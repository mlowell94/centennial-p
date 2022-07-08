const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");

const text = document.querySelector('.text');
const textC = document.querySelector('.text p');

let info = document.createElement('a');

const ansOne = document.querySelector('.a-one');
const ansTwo = document.querySelector('.a-two');
const ansThree = document.querySelector('.a-three');

const quesOne = document.querySelector('#q1');
const quesTwo = document.querySelector('#q2');
const quesThree = document.querySelector('#q3');


one.addEventListener('click', function(e) {
    if(getComputedStyle(text).left == '0px') {
        trans1();
    };
    setTimeout(function() {textC.textContent = "This was an introductory programming course taken at Western University in the Fall of 2021. \
    It was taught with Python, and introduced basic Python data types (strings, integers, dictionaries, tuples,\
    some alogrithms, and ended with covering some Object-Oriented Programming. Course syllabus can be found "; 
    info.href = 'docs/Coding Essentials.pdf';
    info.textContent = 'here';
    textC.appendChild(info);
    let lastChar = document.createElement('span');
    lastChar.textContent = '.';
    textC.appendChild(lastChar);
    trans2()}, 500);})

two.addEventListener('click', function(e) {
    if(getComputedStyle(text).left == '0px') {
        trans1();
    };
    setTimeout(function() {textC.textContent = "This was an algorithms course taken at Western University in the Spring of 2022.\
    Building off of the material covered in COMPSCI 9642, it covered more abstract data structures like stacks, queues, and deques among others, and spent time on the use cases of those data structures. \
    The course also covered the more popular sorting algorithms, and how to analyze their efficiency in terms of time and memory. Syllabus can be found ";
    info.href = 'docs/Data Structures and Algorithims.pdf';
    info.textContent = 'here';
    textC.appendChild(info);
    let lastChar = document.createElement('span');
    lastChar.textContent = '.';
    textC.appendChild(lastChar);
    trans2()}, 500);})

three.addEventListener('click', function(e) {
    if(getComputedStyle(text).left == '0px') {
        trans1();
    };
    setTimeout(function() {textC.textContent = "This is a Java course intended for those who have limited experience programming in Java.\
    I am currently taking it through Centennial at Loyalist College. It places a heavy emphasis on using Object-Oriented Programming techniques to solve problems\
    presented in the material. I am proud to say that I currently have a 98 in the course with only two projects left! Syllabus can be found ";
    info.href = 'docs/COMP8014.pdf';
    info.textContent = 'here';
    textC.appendChild(info);
    let lastChar = document.createElement('span');
    lastChar.textContent = '.';
    textC.appendChild(lastChar);
    trans2()}, 500);})

four.addEventListener('click', function(e) {
    if(getComputedStyle(text).left == '0px') {
        trans1();
    };
    setTimeout(function() {textC.textContent = "This was a 4 hour HTML/CSS crash course on Udemy that helped me make my first\
    website. It covers very basic HTML/CSS and the common technologies used to write them. The page for the course is "
    info.href = 'https://www.udemy.com/course/step-by-step-html-and-css-for-absolute-beginners/';
    info.textContent = 'here';
    textC.appendChild(info);
    let lastChar = document.createElement('span');
    lastChar.textContent = '.';
    textC.appendChild(lastChar);
    trans2()}, 500);})

five.addEventListener('click', function(e) {
    if(getComputedStyle(text).left == '0px') {
        trans1();
    };
    setTimeout(function() {textC.textContent = "This was a 20 hour SQL course on Udemy that used MySQL to teach SQL.\
    It taught basic SQL syntax, aggregate functions, how to write complex queries, and joins. Additionally, the final sections\
    taught how to build a system integrating a MySQL database using Express and NodeJS with real-world data. The page for the course is "
    info.href = 'https://www.udemy.com/course/the-ultimate-mysql-bootcamp-go-from-sql-beginner-to-expert/';
    info.textContent = 'here';
    textC.appendChild(info);
    let lastChar = document.createElement('span');
    lastChar.textContent = '.';
    textC.appendChild(lastChar);
    trans2()}, 500);})

six.addEventListener('click', function(e) {
    if(getComputedStyle(text).left == '0px') {
        trans1();
    };
    setTimeout(function() {textC.textContent = "This was an 8 hour class on how to optimize software planning though teaching multiple\
    frameworks. It covers the software development lifecycle from start to finish and frequently has the learner apply what they're learned in real world scenarios. The page for the course is \
    ";
    info.href = 'https://www.udemy.com/course/software-engineering-101/';
    info.textContent = 'here';
    textC.appendChild(info);
    let lastChar = document.createElement('span');
    lastChar.textContent = '.';
    textC.appendChild(lastChar);
    trans2()}, 500);})

seven.addEventListener('click', function(e) {
    if(getComputedStyle(text).left == '0px') {
        trans1();
    };
    setTimeout(function() {textC.textContent = "This was an 80hr Java course that I purchased because it went more in depth on topics where I felt I required\
    additional explanation. It's incredibly comprehensive and has a huge number of problem sets for the learner to work through, which has been spectacular for getting extra practice in. The page for the course is ";
    info.href = 'https://www.udemy.com/course/java-the-complete-java-developer-course/';
    info.textContent = 'here';
    textC.appendChild(info);
    let lastChar = document.createElement('span');
    lastChar.textContent = '.';
    textC.appendChild(lastChar);
    trans2()}, 500);})


eight.addEventListener('click', function(e) {
    if(getComputedStyle(text).left == '0px') {
        trans1();
    };
    setTimeout(function() {textC.textContent = "This is the single most important resource I've used in the past year. The Odin Project is a free course for learning web development that is open source and \
    supported by many web developers. Many of the projects I have listed above were made for The Odin Project. The resources that have been contributed and curated are incredibly well put together,\
    making my first steps into this field easier than they otherwise would have been. I am currently 25% through their JavaScript path where they teach\
    advanced HTML/CSS techniques on top of more complex JavaScript. Their homepage is "
    info.href = 'https://www.theodinproject.com/';
    info.textContent = 'here';
    textC.appendChild(info);
    let lastChar = document.createElement('span');
    lastChar.textContent = '.';
    textC.appendChild(lastChar);
    trans2()}, 500);})

quesOne.addEventListener('change', function(e) {
    if (quesOne.checked) {
        open(ansOne);
    } else {
        close(ansOne);
    }
})

quesTwo.addEventListener('change', function(e) {
    if (quesTwo.checked) {
        open(ansTwo);
    } else {
        close(ansTwo);
    }
})

quesThree.addEventListener('change', function(e) {
    if (quesThree.checked) {
        open(ansThree);
    } else {
        close(ansThree);
    }
})

function trans1() {
    text.setAttribute('id', 'trans1');
}

function trans2() {
    text.setAttribute('id', 'trans2');
}

function open(answer) {
    answer.setAttribute('id', 'open');
}

function close(answer) {
    answer.setAttribute('id', 'close');
}