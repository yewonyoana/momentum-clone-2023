const loginScreen = document.querySelector("#login");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const frontPage = document.querySelector("#front-page");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
	event.preventDefault();
	loginScreen.classList.add(HIDDEN_CLASSNAME);
	const usernameTheUserWrote = loginInput.value;
	localStorage.setItem(USERNAME_KEY, usernameTheUserWrote);
	paintGreetings(usernameTheUserWrote);
	frontPage.classList.remove(HIDDEN_CLASSNAME);
}

function paintGreetings(username) {
	greeting.innerText = `おかえり, ${username} さん`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
	//show form
	loginScreen.classList.remove(HIDDEN_CLASSNAME);
	loginScreen.addEventListener("submit", onLoginSubmit);
} else {
	//show greetings
	paintGreetings(savedUsername);
	frontPage.classList.remove(HIDDEN_CLASSNAME);
}
