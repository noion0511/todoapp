import { log } from './utils';
import './todo.css';
import { printTodos } from './print-todos';

const todos = [
    { title: 'HTML', isDone: true },
    { title: 'JS', isDone: true },
    { title: 'React', isDone: true },
  ];

const $form = document.querySelector('.new-task');
const $input = document.querySelector('.new-task > input');
const $todos = document.querySelector('#todos');

const checkTodo = (event) => {
    event.preventDefault();
    console.log($input.value);

    const todo = {title: $input.value, isDone: false};
    todos.push({todo});
    console.log(todos)

    //input 초기화
    $input.value = '';

    //todos 출력
    print();
};

const deleteTodo = () => {
    console.log('delete');
    //todos에서 index번째 todo 삭제
    todos.splice(index, 1);
    print();
}

const toggleTodo = () => {
    console.log('toggle');
}

const print = () => {
    printTodos(todos);
};

$form.addEventListener('submit', checkTodo)

document.body.addEventListener('click', (event) => {
    const index = parseInt(event.target.parentNode.dataSet.index);
    if(event.target.className === "delete") {
        deleteTodo(index)
    } else if(event.target.className === "toggle-checked") {
        toggleTodo(index)
    }
})

print();
