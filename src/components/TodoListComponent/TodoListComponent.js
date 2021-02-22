// import { useEffect } from 'react';
import './TodoListComponent.scss';
import TodoComponent from '../TodoComponent/TodoComponent';
import { useEffect, useState } from 'react';

import { fetchTodos, deleteTodo } from '../../ajax';

export default function TodoListComponent(props) {
  const [deletedTodo, setDeletedTodo] = useState('');
  const [todoList, setTodoList] = useState();

  useEffect(() => {
    getTodods();
  }, [props.newTodo]);

  const getTodods = async () => {
    let response = await fetchTodos();
    setTodoList(response.todos);
  }

  const handleDelete = async (todoId) => {
    let data = await deleteTodo(todoId);
    setDeletedTodo(data.deletedId);
    setTimeout(() => {
      getTodods();
    }, 150);
  }

  return(
    <div className="todo-wrapper">
      {todoList ? todoList.map((item, index) => {
        return(
          <TodoComponent
            newTodo={props.newTodo === item._id}
            deletedTodo={deletedTodo === item._id}
            key={index}
            todo={item.todo}
            timeStamp={item.timeStamp}
            id={item._id}
            handleDelete={handleDelete}
          ></TodoComponent>
        );
      }) : 'Loading...'}
    </div>
  );
}