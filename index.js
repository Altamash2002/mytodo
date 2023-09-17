var task = document.getElementById('task');
var taskForm = document.getElementById('taskForm');
var container = document.getElementById('container');

// Retrieve tasks from local storage if available
var savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to update local storage with current tasks
function updateLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(savedTasks));
}

var taskName = "";
task.addEventListener('change', (e) => {
    taskName = e.target.value;
});

taskForm.addEventListener('submit', () => {
    if(taskName.trim().length > 0){
        var childTask = document.createElement('div');
        var closeBtn = document.createElement('button');
        closeBtn.classList.add("closeBtn");
        closeBtn.classList.add("btn-close");

        childTask.innerHTML = taskName;
        childTask.classList.add('childTask');
        childTask.appendChild(closeBtn);
        container.appendChild(childTask);
        savedTasks.push(taskName);
        updateLocalStorage(); 
    }
});

container.addEventListener('click', (e) => {
    if (e.target.classList.contains('closeBtn')) {
        e.target.parentElement.remove()
        var taskIndex = savedTasks.indexOf(e.target.parentElement.innerText);
        if (taskIndex !== -1) {
            savedTasks.splice(taskIndex, 1);
            updateLocalStorage(); // Update local storage
        }
    }
});

// Display saved tasks on page load
savedTasks.forEach(function(task) {
    if(task.trim().length > 0){
        var childTask = document.createElement('div');
        var closeBtn = document.createElement('button');
        closeBtn.classList.add("closeBtn");
        closeBtn.classList.add("btn-close");

        childTask.innerHTML = task;
        childTask.classList.add('childTask');
        childTask.appendChild(closeBtn);
        container.appendChild(childTask);
    }
});
