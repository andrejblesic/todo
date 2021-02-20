import { useEffect, useState } from 'react';
import './App.scss';

import ThemeContext from './context/ThemeContext';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import TodoListComponent from './components/TodoListComponent/TodoListComponent';
import CreateTodoComponent from './components/CreateTodoComponent/CreateTodoComponent';

function App() {
  const themeHook = useState('test');
  const [newTodo, setNewTodo] = useState();

  useEffect(() => {
    setTimeout(() => {
      setNewTodo('');
    }, 200);
  }, [newTodo]);

  return (
    <ThemeContext.Provider value={themeHook}>
      <div className="App">
        <HeaderComponent></HeaderComponent>
        <CreateTodoComponent 
          setNewTodo={setNewTodo}
        ></CreateTodoComponent>
        <TodoListComponent
          newTodo={newTodo}
        ></TodoListComponent>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
