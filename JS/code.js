let todo = document.querySelector('.todolist'); // Selecting the to-do list container
let addBtn = document.querySelector('.addBtn'); // Selecting the "Add/Enter" button
let newTodoInput = document.getElementById('newTodo'); // Selecting the input field for new to-dos

// Adding an event listener to the "Add/Enter" button
addBtn.addEventListener('click', function() {
    // Get the value of the new to-do input, trimming whitespace
    let newTodoText = newTodoInput.value.trim();

    // Check if the input is not empty
    if (newTodoText !== '') {
        // Append a new to-do item to the existing list
        todo.innerHTML += createTodoItem(newTodoText);

        // Clear the input field after adding the new to-do
        newTodoInput.value = '';
    }
});

// Function to create a new to-do item based on the input text
function createTodoItem(text) {
    return `
        <li class="todoitem">
            <input type="checkbox">
            <input type="text" value="${text}" readonly>
        </li>
    `;
}



