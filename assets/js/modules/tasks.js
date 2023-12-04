const btnAddTask = document.getElementById('addTask')

let idCounter = 1;

btnAddTask.addEventListener('click', () => {
    const listTasks = document.querySelector('.task-list')
    const inputTask = document.getElementById('nameTask').value
    const newTask = document.createElement('div')

    if(inputTask == "") {
        newTask.className = 'card-task';
        newTask.textContent = 'Tarefa ' + idCounter;
        idCounter++
    } else {
        newTask.className = 'card-task';
        newTask.textContent += inputTask;
    }

    listTasks.appendChild(newTask)
})