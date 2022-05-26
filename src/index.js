import { log } from './utils';
import './todo.css';

const todos = [
    { title: 'HTML', isDone: true },
    { title: 'JS', isDone: true },
    { title: 'React', isDone: true },
  ];

const $form = document.querySelector('.new-task');
const $input = document.querySelector('.new-task > input');
const $todos = document.querySelector('#todos');

const printTodos = () => {
  const html = todos.map((todo) => {
    return `
		<li data-index="${index}>
			<button class="delete">×</button>
			<input type="checkbox" class="toggle-checked" />
			<span class="text">${todo.title}</span>
		</li>
		`;
  });

  $todos.innerHTML = `<ul>${html.join('')}</ul>`;
};

const checkTodo = (event) => {
    event.preventDefault();
    console.log($input.value);

    const todo = {title: $input.value, isDone: false};
    todos.push({todo});
    console.log(todos)

    //input 초기화
    $input.value = '';

    //todos 출력
    printTodos();
};

const deleteTodo = () => {
    console.log('delete');
    //todos에서 index번째 todo 삭제
    todos.splice(index, 1);
    printTodos();
}

const toggleTodo = () => {
    console.log('toggle');
}

$form.addEventListener('submit', checkTodo)

document.body.addEventListener('click', (event) => {
    const index = parseInt(event.target.parentNode.dataSet.index);
    if(event.target.className === "delete") {
        deleteTodo(index)
    } else if(event.target.className === "toggle-checked") {
        toggleTodo(index)
    }
})

printTodos();
