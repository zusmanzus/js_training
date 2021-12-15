(function() {
    // create and return app title
    function createAppTitle(title) {
      let appTitle = document.createElement('h2');
      appTitle.innerHTML = title;
      return appTitle;
    }
  
    // create and return todo form
    function createTodoItemForm() {
      let form = document.createElement('form');
      let input = document.createElement('input');
      let buttonWrapper = document.createElement('div');
      let button = document.createElement('button');
  
      form.classList.add('input-group', 'mb-3');
      input.classList.add('form-control');
      input.placeholder = 'Введите название нового дельца';
      buttonWrapper.classList.add('input-group-append');
      button.classList.add('btn', 'btn-primary');
      button.textContent = 'Добавить дельце';
  
      buttonWrapper.append(button);
      form.append(input);
      form.append(buttonWrapper);
  
      return {
        form,
        input,
        button,
      };
    }
  
    // create and return elements list
    function createTodoList() {
      let list = document.createElement('ul');
      list.classList.add('list-group');
      return list;
    }
  
    document.addEventListener('DOMContentLoaded', function() {
      let container = document.getElementById('todo-app');
  
      let todoAppTitle = createAppTitle('Список дел');
      let todoItemForm = createTodoItemForm();
      let todoList = createTodoList();
  
      container.append(todoAppTitle);
      container.append(todoItemForm.form);
      container.append(todoList);
    })
  })();
  
  