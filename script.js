// script.js

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskValue = taskInput.value.trim();

    if (taskValue !== "") {
        const taskList = document.getElementById("taskList");

        // Create a new list item
        const li = document.createElement("li");
        li.textContent = taskValue;

        // Create a delete button for the task
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function () {
            taskList.removeChild(li);
        };

        // Append the delete button to the list item
        li.appendChild(deleteButton);

        // Add the new task to the list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }
}
