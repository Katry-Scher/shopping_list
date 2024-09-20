// Saudação de acordo com o horário
document.addEventListener('DOMContentLoaded', function() {
    function getGreeting() {
        const now = new Date();
        const hours = now.getHours();
        const username = 'Lorenzo'; 

        if (hours < 12) {
            return `Good Morning, ${username}`;
        } else if (hours < 18) {
            return `Good Afternoon, ${username}`;
        } else {
            return `Good Evening, ${username}`;
        }
    }

    const greetingElement = document.getElementById('greeting');
    
    if (greetingElement) {
        greetingElement.textContent = getGreeting();
    } else {
        console.log("Elemento de saudação não encontrado");
    }
});

// Funções para o "to-do list"
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function AddTask() {
    if (inputBox.value === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You must write something!',
            confirmButtonText: 'OK'
        });
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
