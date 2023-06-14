// Get the necessary elements
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Initialize an empty array to store the todo items
let todos = [];

// Function to render the todo list
function renderTodos() {
    // Clear the todo list
    todoList.innerHTML = '';

    // Loop through the todos array and create todo items
    todos.forEach(function(todo, index) {
        // Create the todo item container
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');

        // Create the todo text element
        const todoText = document.createElement('span');
        todoText.textContent = todo;

        // Create the delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');

        // Add event listener to delete the todo item
        deleteButton.addEventListener('click', function() {
            todos.splice(index, 1);
            renderTodos();
        });

        // Append the todo text and delete button to the todo item container
        todoItem.appendChild(todoText);
        todoItem.appendChild(deleteButton);

        // Append the todo item to the todo list
        todoList.appendChild(todoItem);
    });
}

// Event listener for the form submission
form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the todo value from the input field
    const todo = input.value.trim();

    // Add the todo to the array if it's not empty
    if (todo !== '') {
        todos.push(todo);
        renderTodos();

        // Clear the input field
        input.value = '';
    }
});
