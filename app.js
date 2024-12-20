const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
//const loginButton = document.querySelector("#login-form button");
const link = document.querySelector("a");

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    console.log(username);
}

function handleLinkClick(){
    alert("clicked!!");
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click",handleLinkClick);