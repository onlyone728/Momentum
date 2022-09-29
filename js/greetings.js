// const calculator = {
//     add: function(a, b) {
//         return a + b;
//     },
//     minus: function(a, b) {
//         return a - b;
//     },
//     multi: function(a, b) {
//         return a * b;
//     },
//     divide: function(a, b) {
//         return a / b;
//     },
//     power: function(a, b) {
//         return a ** b;
//     }
// }
// calculator.add(4, 523);
// calculator.minus(34, 3);
// calculator.multi(654, 123);
// calculator.divide(654, 45);
// calculator.power(2, 4);

// const age = parseInt(prompt("How old are you?"));

// if(isNaN(age) || age < 0) {
//     console.log("Please write a real positive number.");
// } else if(age < 18) {
//     console.log("You are too young.");
// } else if(age >= 18 && age <= 50) {
//     console.log("You can drink.");
// } else if(age > 50 && age <= 80) {
//     console.log("You should exercise");
// } else if (age === 100) {
//     console.log("wow you are wise");
// } else if (age > 80) {
//     console.log("You can do whatever you want.");
// } 

// document.title = "hi!";

// const title = document.getElementById("title");

// title.innerText = "Got you!";

// console.log(title.className);

// const title = document.querySelector(".hello h1");
// console.log(title); 
// title.innerText = "Hello!";

// title.style.color = "blue";


// function handleMouseEnter() {
//     title.innerText = "Mouse is here!";
// }

// function handleMouseLeave() {
//     title.innerText = "Mouse is gone!";
// }

// function handleWindowResize() {
//     document.body.style.backgroundColor = "tomato";
// }

// function handleWindowCopy() {
//     alert("copier!");
// }

// function handleWindowOffLine() {
//     alert("SOS no WIFI");
// }

// function handleWindowOnLine() {
//     alert("All Good!");
// }

// function handleTitleClick() {
    // const currentColor = title.style.color;
    // let newColor;
    // if(currentColor === "blue") {
    //     newColor = "tomato";
    // } else {
    //     newColor = "blue";
    // }
    // title.style.color = newColor;
    // const clickedClass = "active";
    // if(title.classList.contains(clickedClass)) {
    //     title.classList.remove(clickedClass);
    // } else {
    //     title.classList.add(clickedClass);
    // }
    // title.classList.toggle("active");
// }

// title.addEventListener("click", handleTitleClick);
// title.onclick = handleTitleClick;
// title.addEventListener("mouseenter", handleMouseEnter);
// title.addEventListener("mouseleave", handleMouseLeave);

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffLine);
// window.addEventListener("online", handleWindowOnLine);

const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginBtnClick() {
    // console.log("hello " + loginInput.value);
    // console.log("click!!");
    const username = loginInput.value;
    if(username === "") {
        alert("Please write your name.");
    } else if (username.length > 15) {
        alert("Your name is too long.");
    }
}

// loginButton.addEventListener("click", onLoginBtnClick);

function onLoginSubmit(e) {
    e.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem("username", username);
    paintGreetings();
}

function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello! ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);


if(savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greeting
    paintGreetings();
}

// function handleLinkClick(e) {
//     e.preventDefault();
//     alert("Click!");
//     console.log(e);
// }

// link.addEventListener("click", handleLinkClick);

