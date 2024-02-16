
    
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        li.textContent = taskInput.value;
        taskList.appendChild(li);
        taskInput.value = "";

        li.addEventListener("click", function() {
            if (li.classList.contains("completed")) {
                li.classList.remove("completed");
            } else {
                li.classList.add("completed");
            }
        });
    } else {
        alert("Please enter a task.");
    }
}

function clearCompleted() {
    var taskList = document.getElementById("taskList");
    var completedTasks = taskList.querySelectorAll(".completed");
    completedTasks.forEach(function(task) {
        task.parentNode.removeChild(task);
    });
}

function clearAll() {
    var taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
}
