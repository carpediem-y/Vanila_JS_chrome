const nameForm = document.querySelector("#name-form");
const nameInput = document.querySelector("input")
const flightBtn = document.querySelector("button");

function btnClick (event){
    event.preventDefault();

    const username = nameInput.value;
    localStorage.setItem("username", username);

    if (username == "") {
        alert("Please write your name");
    }
    else {
        window.location.href = "main.html?";
    }
}

flightBtn.addEventListener("click", btnClick);