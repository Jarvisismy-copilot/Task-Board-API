// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) ||[];
let nextId = JSON.parse(localStorage.getItem("nextId")) ||0;


// Const variables for IDs
const taskForm = $("#taskForm");
const inputTitle = $("#formTitle");
const inputDueDate = $("#formDate");
const inputDescription = $("#formDescription");

// Function to generate a unique task id
function generateTaskId() {
nextId++
localStorage.setItem("nextId", nextId)
return nextId
}

// Function to create a task card
function createTaskCard(task) {
    const card =  $("<div>").addClass("card draggable").attr("id", task.id);
    const cardBody = $("<div>").addClass("card-body");
    const cardTitle = $("<h5>").addClass("card-title").text(title);
    const cardText = $("<p>").addClass("card-text").text(description);
    const cardDueDate = $("<p>").addClass("card-text").text('Due Date: ' + date);
    const deleteButton = $("<button>").addClass("btn btn-danger").text("Delete");
    deleteButton.click(handleDeleteTask);

    // Condition to check if task has due date 
    if (task.dueDate && task.status !== "done") {
        let taskDueDate = dayjs(task.dueDate, "YYYY-MM-DD");
        let currentDate = dayjs();

        // Else if statement to change color depending on the day and when it's due
        if (taskDueDate.isBefore(currentDate, "day")) {
            card.addClass("bg-danger text-white");
        } else if (taskDueDate.isSame(currentDate, "day")) {
            card.addClass("bg-warning text-white");
        } else if (taskDueDate.isAfter(currentDate, "day")) {
            card.addClass("bg-light text-dark");
        }
    }
    // Append elements and cardbody to card
    cardBody.append(cardTitle, cardText, cardDueDate, deleteButton);
    card.append(cardBody);

    return card;
}



// Function to render the task list and make cards draggable
function renderTaskList() {

// Clear out any existing cards (User Friendly)
$(".lane .card").remove();




}

// function to handle adding a Add consts from id tags + inputs? ? //
// function to handle adding a new task maybe an alert if left blank? 
// function to handle adding a new task //
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


