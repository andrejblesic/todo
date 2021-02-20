import { useEffect, useState } from 'react';
import './TodoComponent.scss';

export default function TodoComponent(props) {
  const [time, setTime] = useState({});
  
  useEffect(() => {
    const todoDate = new Date(props.timeStamp);
    const todoTime = {
      date: todoDate.getDate(),
      month: todoDate.getMonth() + 1,
      year: todoDate.getFullYear(),
      minutes: todoDate.getMinutes().toString().length === 1 ? `0${todoDate.getMinutes()}` : `${todoDate.getMinutes()}`,
      hours: todoDate.getHours().toString().length === 1 ? `0${todoDate.getHours()}` : `${todoDate.getHours()}`,
    }
    setTime(todoTime);
  }, [props]);

  return(
    <div className={`${props.deletedTodo ? 'deleted ' : ''}${props.newTodo ? 'new ' : ''}todo`}>
      <span 
        className="remove-todo"
        onClick={() => {props.handleDelete(props.id)}}
      >✖</span>
      <div className="todo-header">
        <p className="todo-text">{props.todo}</p>
      </div>
      <div className="todo-body">
        <p className="todo-time">
          {time.date}/{time.month}/{time.year}
        </p>
      </div>
    </div>
  );
}