import './CreateTodoComponent.scss';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { addTodo } from '../../ajax';

export default function CreateTodoComponent(props) {
  const [newTodo, setNewTodo] = useState('');
  const [todoDate, setTodoDate] = useState(new Date());
  const [calendarShown, setCalendarShown] = useState(false);

  const handleDatePicked = (e) => {
    setTodoDate(e);
    setCalendarShown(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = {
      todo: newTodo,
      timeStamp: todoDate.getTime(),
      done: false
    }
    let data = await addTodo(postData);
    props.setNewTodo(data.addedId);
  }


  return(
    <div className="add-todo-form-wrapper">
      <form className="add-todo-form" action="/">
        <input
          onChange={e => setNewTodo(e.target.value)}
          value={newTodo} 
          type="text"
        />
        <input 
          readOnly 
          value={`${todoDate.getDate()}/${todoDate.getMonth() + 1}/${todoDate.getFullYear()}`} 
          onClick={() => setCalendarShown(!calendarShown)} 
          type="text"
        />
        { calendarShown &&
          <div className="calendar-wrapper">
            <Calendar onChange={(e) => handleDatePicked(e)}></Calendar>
          </div>
        }
        <button className="submit-btn" onClick={(e) => handleSubmit(e)}>submit</button>
      </form>
    </div>
  );
}