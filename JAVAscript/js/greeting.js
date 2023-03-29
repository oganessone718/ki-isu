const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("Input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("h1#greeting");



function onLoginSubmit(event){
  const userName = loginInput.value;
  event.preventDefault();
  localStorage.setItem("username",userName);
  loginForm.classList.add("hidden");
  greeting.innerText = `Hello ${userName}`;
  greeting.classList.remove("hidden");
}

const savedUserName = localStorage.getItem("username");

if(savedUserName === null){
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", onLoginSubmit);
}
else{
  greeting.innerText = `Hello ${savedUserName}`;
  greeting.classList.remove("hidden");
}

