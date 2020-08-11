import { createStore } from 'redux';

const form = document.getElementById("todoForm");
const input = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

const addTodoList = (toDo) => {
  const li = document.createElement("li");
  li.innerText = toDo;
  todoList.appendChild(li);
};

const handleAddTodo = event => {
  event.preventDefault();
  const toDo = input.value;
  input.value = "";
  addTodoList(toDo);
};

form.addEventListener("submit", handleAddTodo);