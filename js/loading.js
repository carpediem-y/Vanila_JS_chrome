const nameForm = document.querySelector("#name-form");
const nameInput = document.querySelector("input")
const flightBtn = document.querySelector("button");

function btnClick (event){
    event.preventDefault();

    const username = nameInput.value;
    localStorage.setItem("username", username);

    window.location.href = "index.html?";
}

flightBtn.addEventListener("click", btnClick);