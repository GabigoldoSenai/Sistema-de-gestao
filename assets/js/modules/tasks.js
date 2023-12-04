const btnAdd = document.getElementById('addTask')

btnAdd.addEventListener('click', () => {
    const listTasks = document.querySelector('.task-list')
    const inputTask = document.getElementById('nameTask').value
    const newCard = document.createElement('div')

    if(inputTask == "") {
        inputTask.style.outlineColor = 'red';
    } else {
        newCard.className = 'card-task';
        newCard.textContent += inputTask;
    }

    listTasks.appendChild(newCard)
})