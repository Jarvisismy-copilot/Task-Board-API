// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) ||[];
let nextId = JSON.parse(localStorage.getItem("nextId")) ||0;

// Todo: create a function to generate a unique task id
function generateTaskId() {
nextId++
localStorage.setItem("nextId", nextId)
return nextId
}

// Todo: create a function to create a task card
function createTaskCard(task) {

}

// Next Up // add rendering + dragable.... //
// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
    console.log("Hi")
    let date= $("#date-name").val()
    let title= $("#title-name").val()
    let description= $("#description").val()

    let card={id:generateTaskId(),date,title,description,status:"to-do"}
    taskList.push(card)
    localStorage.setItem("tasks",JSON.stringify(card))
    $("#date-name").val("")
    $("#title-name").val("")
    $("#description").val("")
    renderTaskList()
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

$("#secondSubmit").on("click", function(){
    handleAddTask()

})

});


