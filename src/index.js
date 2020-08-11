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
      return state.filter(toDo => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

const handleDeleteTodo = event => {
  const id = event.target.parentNode.id;
  store.dispatch({
    type: DELETE_LIST,
    id,
  });
};

const paintToDo = () => {
  const toDos = store.getState();
  todoList.innerHTML = "";
  toDos.forEach(toDo => {
    const li = document.createElement("li");
    li.id = toDo.id;
    li.innerText = toDo.text;
    todoList.appendChild(li);

    const button = document.createElement("button");
    button.innerText = "del";
    button.addEventListener("click", handleDeleteTodo);
    li.appendChild(button);
  });
};

store.subscribe(paintToDo);

const handleAddTodo = event => {
  event.preventDefault();
  const toDo = input.value;
  input.value = "";
  store.dispatch({
    type: ADD_LIST,
    text: toDo,
    id: Date.now().toString()
  });
};

form.addEventListener("submit", handleAddTodo);