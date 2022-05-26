import { log } from './utils';
import './todo.css';
import { printTodos } from './print-todos';
import { init as initForm } from './form';

const todos = [
    { title: 'HTML', isDone: true },
    { title: 'JS', isDone: true },
    { title: 'React', isDone: true },
  ];

const deleteTodo = () => {
    console.log('delete');
    //todos에서 index번째 todo 삭제
    todos.splice(index, 1);
    print();
}

const toggleTodo = () => {
    console.log('toggle');
    //index에 맞는 todo isDone 반전?
    todos[index].isDone = !todos[index].isDone
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

initForm(todos)
print();
