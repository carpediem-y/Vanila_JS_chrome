const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const username =  document.querySelector("#userinfo span");
const btnYoutube = document.querySelector("#btn-youtube");
const btnGoogle = document.querySelector("#btn-google");
const btnNetflix = document.querySelector("#btn-netflix");
const TODOS_KEY = "todos";

let toDos = [];

function getUsername(){
    const getUsername = localStorage.getItem("username");
    username.innerText = `${getUsername}`;
}


function paintToDo (newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;

    const button = document.createElement("button");
    button.innerText = "❌";

    //button style
    button.style.borderRadius = "10%";
    button.style.margin = "10px";
    button.style.padding = "5px";

    button.addEventListener("click", deleteTodo);
    
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function deleteTodo(event) {
    const li = event.target.parentElement;    
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


function handleToDoSubmit(event) {
    event.preventDefault();

    const newTodo = toDoInput.value;
    toDoInput.value = "";

    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };

    if (toDos.length > 6) {
        alert('최대 7개까지 입력 가능합니다!');
        return;
    } else {
        toDos.push(newTodoObj);
        paintToDo(newTodoObj);
        saveToDos();
    }
}

toDoForm.addEventListener("submit", handleToDoSubmit);
getUsername();

const savedToDos  = localStorage.getItem(TODOS_KEY);

//console.log(savedToDos)
if (saveToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    if(parsedToDos) {
        toDos = parsedToDos;
        parsedToDos.forEach(paintToDo);
    }
}

function btnYoutubeOnClick (event) {
    event.preventDefault();
    window.location.href = "https://www.youtube.com"
}

function btnNetflixOnClick (event) {
    event.preventDefault();
    window.location.href = "https://www.netflix.com"
}

function btnGoogleOnClick (event) {
    event.preventDefault();
    window.location.href = "https://www.google.com"
}

btnYoutube.addEventListener("click", btnYoutubeOnClick);
btnNetflix.addEventListener("click", btnNetflixOnClick);
btnGoogle.addEventListener("click", btnGoogleOnClick);
