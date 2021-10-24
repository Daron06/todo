let addTaskBtn = document.querySelector('#btn');
let inpText = document.querySelector('#inp');
let tasksWrapper = document.querySelector('.tasks');

// fetch('https://617563c608834f0017c70bcb.mockapi.io/api/todo/tasks')
//   .then((response) => response.json())
//   .then((commits) => console.log(commits));

let tasks = [];
showTasks();

addTaskBtn.addEventListener('click', () => {
  let task = {
    text: inpText.value,
    completed: false,
  };

  if (inpText.value === '') {
    return;
  }

  fetch('https://617563c608834f0017c70bcb.mockapi.io/api/todo/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(task),
  }).then(() => showTasks());
});

function showTasks() {
  tasksWrapper.innerHTML = '';
  // if (tasks.length === 0) {
  //   tasksWrapper.innerHTML = `<p>Ваш список задач пуст</p> `;
  // }

  fetch('https://617563c608834f0017c70bcb.mockapi.io/api/todo/tasks')
    .then((response) => response.json())
    .then((commits) => {
      tasks = [...commits];
      commits.forEach((item, i) => {
        tasksWrapper.innerHTML += `
        <div class="task ${item.completed ? 'task-completed' : ''}">
          <div>${item.text}</div>
          <div class="btns">
            <input class="checkbox" id='${item.id}' type="checkbox" ${
          item.completed && 'checked'
        } />
            <img
            id='${item.id}'
              class="delete-btn"
              src="https://img.icons8.com/office/16/000000/delete-sign.png"
            />
          </div>
        </div>
        `;
      });
      console.log(tasks);
    });
  inpText.value = '';
  // localStorage.setItem('tasks', JSON.stringify(tasks));
}

tasksWrapper.addEventListener('click', (e) => {
  if (e.target.type === 'checkbox') {
    let task = {
      ...tasks.find((element) => element.id === e.target.id),
      completed: !tasks.find((element) => element.id === e.target.id).completed,
    };
    fetch(`https://617563c608834f0017c70bcb.mockapi.io/api/todo/tasks/${e.target.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(task),
    }).then(() => showTasks());
  } else if (e.target.classList[0] === 'delete-btn') {
    fetch(`https://617563c608834f0017c70bcb.mockapi.io/api/todo/tasks/${e.target.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    }).then(() => showTasks());

    // tasks.splice(e.target.id.split('-')[0], 1);
  }
});
