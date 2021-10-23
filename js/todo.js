let addTaskBtn = document.querySelector('#btn');
let inpText = document.querySelector('#inp');
let tasksWrapper = document.querySelector('.tasks');

let tasks = localStorage.tasks ? JSON.parse(localStorage.getItem('tasks')) : [];
!!tasks.length && showTasks();

addTaskBtn.addEventListener('click', () => {
  let task = {
    text: inpText.value,
    checked: false,
  };

  tasks.push(task);
  showTasks();
});

function showTasks() {
  tasksWrapper.innerHTML = '';

  tasks.forEach((item, i) => {
    tasksWrapper.innerHTML += `
      <div class="task ${item.checked ? 'task-completed' : ''}">
        <div>${item.text}</div>
        <div class="btns">
          <input class="checkbox" id='${i}' type="checkbox" ${item.checked && 'checked'} />
          <img
          id='${i}delete'
            class="delete-btn"
            src="https://img.icons8.com/office/16/000000/delete-sign.png"
          />
        </div>
      </div>
      `;
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

tasksWrapper.addEventListener('click', (e) => {
  if (e.target.type === 'checkbox') {
    tasks[e.target.id].checked = !tasks[e.target.id].checked;
    showTasks();
  } else if (e.target.classList[0] === 'delete-btn') {
    tasks.splice(e.target.id[0], 1);
    showTasks();
  }
});
