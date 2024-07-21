// document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    const weekSelect = document.getElementById('week-select');
    const daySelect = document.getElementById('day-select');
    const taskInput = document.getElementById('task-input-field');

    const week = weekSelect.value;
    const day = daySelect.value;
    const task = taskInput.value;

    if (task.trim() === '') return;

    // Display week and day
    document.getElementById('week-header').textContent = week;
    document.getElementById('day-header').textContent = day;

    // Add task to list
    const ul = document.getElementById('tasks');
    const li = document.createElement('li');
    li.textContent = task;
    ul.appendChild(li);

    // Hide dropdowns after first task
    weekSelect.style.display = 'none';
    daySelect.style.display = 'none';

    // Create close list button if it doesn't exist
    if (!document.getElementById('close-list-btn')) {
        const closeListBtn = document.createElement('button');
        closeListBtn.id = 'close-list-btn';
        closeListBtn.textContent = 'Close List';
        closeListBtn.addEventListener('click', closeList);
        document.getElementById('task-input').appendChild(closeListBtn);
    }

    // Clear the task input field
    taskInput.value = '';
}

function closeList() {
    const week = document.getElementById('week-header').textContent;
    const day = document.getElementById('day-header').textContent;
    const tasks = document.getElementById('tasks').innerHTML;

    // Create a new div to show the completed task list
    const completedDiv = document.createElement('div');
    completedDiv.className = 'completed-task-list';
    completedDiv.innerHTML = `<h1>${week}</h1><h2>${day}</h2><ul>${tasks}</ul>`;
    document.getElementById('completed-lists').appendChild(completedDiv);

    // Clear current task list
    document.getElementById('week-header').textContent = '';
    document.getElementById('day-header').textContent = '';
    document.getElementById('tasks').innerHTML = '';

    // Remove close list button
    const closeListBtn = document.getElementById('close-list-btn');
    if (closeListBtn) {
        closeListBtn.remove();
    }

    // Show dropdowns again
    document.getElementById('week-select').style.display = 'inline';
    document.getElementById('day-select').style.display = 'inline';
}
