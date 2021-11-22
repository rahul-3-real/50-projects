const todoList = () => {
  // Variables
  const form = document.querySelector("form");
  const input = document.querySelector(".input");
  const container = document.querySelector(".container");

  const todos = JSON.parse(localStorage.getItem("todos"));

  // Functions
  const updateLS = () => {
    list = document.querySelectorAll("li");
    const todos = [];
    list.forEach((item) => {
      todos.push({
        text: item.innerText,
        completed: item.classList.contains("completed"),
      });
    });
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (todo) => {
    let todoText = input.value;
    if (todo) {
      todoText = todo.text;
    }

    if (todoText) {
      const item = document.createElement("li");
      if (todo && todo.completed) {
        item.classList.add("completed");
      }
      item.innerText = todoText;
      item.addEventListener("click", () => {
        item.classList.toggle("completed");
        updateLS();
      });
      item.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        item.remove();
        updateLS();
      });
      container.appendChild(item);
      input.value = "";
      updateLS();
    }
  };

  // Events
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    addTodo();
  });

  if (todos) {
    todos.forEach((todo) => addTodo(todo));
  }
};

todoList();
