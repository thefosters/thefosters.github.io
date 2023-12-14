document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    var taskList = document.getElementById("taskList");
    var taskItem = document.createElement("li");
    taskItem.className = "taskItem";
    taskItem.innerHTML = `
    <span>${taskText}</span>
    <button class="deleteButton" onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(taskItem);
    saveTaskToLocalStorage(taskText);

    taskInput.value = "";
    }

    function deleteTask(button) {
        var taskItem = button.parentElement;
        var taskText = taskItem.querySelector("span").innerText;
        taskItem.remove();
        removeTaskFromLocalStorage(taskText);
    }

    function saveTaskToLocalStorage(task) {
        var tasks = getTasksFromLocalStorage();
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

        function removeTaskFromLocalStorage(task) {
            var tasks = getTasksFromLocalStorage();
            var index = tasks.indexOf(task);
            if (index !== -1) {
                tasks.splice(index, 1);
                localStorage.setItem("tasks", JSON.stringify(tasks));
            }
        }

        function getTasksFromLocalStorage() {
            return JSON.parse(localStorage.getItem("tasks")) || [];
        }

        function loadTasks() {
            var tasks = getTasksFromLocalStorage();
            var taskList = document.getElementById("taskList");

            tasks.forEach(function (taskText) {
                var taskItem = document.createElement("li");
                taskItem.className = "taskItem";
                taskItem.innerHTML = `
                    <span>${taskText}</span>
                    <button class="deleteButton" onclick="deleteTask(this)">Delete</button>
                `;
                taskList.appendChild(taskItem);
            });
        }