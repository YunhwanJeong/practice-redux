import { createStore } from 'redux';

const form = document.getElementById("todoForm");
const input = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");

const ADD_LIST = "ADD_LIST";
const DELETE_LIST = "DELETE_LIST";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_LIST:
      return [...state, { text: action.text, id: action.id }];
    case DELETE_LIST:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);

const paintToDo = () => {
  const toDos = store.getState();
  todoList.innerHTML = "";
  toDos.forEach(toDo => {
    const li = document.createElement("li");
    li.innerText = toDo.text;
    todoList.appendChild(li);
  });
};

store.subscribe(paintToDo);

const handleTodoSubmit = event => {
  event.preventDefault();
  const toDo = input.value;
  input.value = "";
  store.dispatch({
    type: ADD_LIST,
    text: toDo,
    id: Date.now()
  });
};

form.addEventListener("submit", handleTodoSubmit);