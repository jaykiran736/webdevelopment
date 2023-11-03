
const todoForm = document.querySelector('form');

// Get the list element
const todoList = document.querySelector('ul');

// Get the saved tasks from local storage
let savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Render the saved tasks
savedTasks.forEach(task => {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const button = document.createElement('button');
  span.textContent = task;
  button.textContent = 'Delete';
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
});

// Add an event listener for the form submission
todoForm.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the user's input
  const task = todoForm.elements[0].value;

  // Add the task to the list
  const li = document.createElement('li');
  const span = document.createElement('span');
  const button = document.createElement('button');
  span.textContent = task;
  button.textContent = 'Delete';
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);

  // Save the tasks to local storage
  savedTasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(savedTasks));

  // Clear the input field
  todoForm.reset();
});

// Add an event listener for the delete button
todoList.addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
    const li = event.target.parentNode;
    const span = li.querySelector('span');
    const task = span.textContent;

    // Remove the task from the list
    todoList.removeChild(li);

    // Remove the task from local storage
    savedTasks = savedTasks.filter(t => t !== task);
    localStorage.setItem('tasks', JSON.stringify(savedTasks));
  }
});
