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

  export { printTodos };