import API from './config';

const fetchTodos = () => {
  return fetch(`${API.todoRoute}/todos/get`)
  .then(res => res.json())
  .catch(error => console.log(error));
}

const deleteTodo = (todoId) => {
  return fetch(`${API.todoRoute}/todos/delete/${todoId}`, {
    method: 'delete',
  })
  .then(res => res.json())
  .catch(error => console.log(error));
}

const addTodo = (postData) => {
  return fetch(`${API.todoRoute}/todos/add`, {
    method: 'post',
    headers: {
      "Content-Type": 'application/json'
    },
    body: JSON.stringify(postData)
  })
  .then(res => res.json())
  .catch(error => console.log(error));
}

export { fetchTodos, deleteTodo, addTodo };