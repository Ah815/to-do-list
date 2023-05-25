document.addEventListener("DOMContentLoaded", function() {
    var addButton = document.getElementById("add-button");
    var taskInput = document.getElementById("task-input");
    var taskList = document.getElementById("task-list");
  
    addButton.addEventListener("click", function() {
      var taskText = taskInput.value;
      if (taskText !== "") {
        var taskItem = document.createElement("li");
        taskItem.className = "task-item";
  
        var taskTextElement = document.createElement("span");
        taskTextElement.className = "task-text";
        taskTextElement.textContent = taskText;
  
        var deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
          taskItem.remove();
        });
  
        taskItem.appendChild(taskTextElement);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
  
        taskInput.value = "";
      }
    });
  });
  