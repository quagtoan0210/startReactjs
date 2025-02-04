import TodoNew from './components/todo/TodoNew.jsx';
import TodoData from './components/todo/TodoData.jsx';
import reactLogo from './assets/react.svg';
import './components/todo/todo.css';
import { useState } from 'react';
const App = () => {
  const [todoList,SetTodoList]= useState([
    {id: 1, name: 'Quang Toan'},
    {id: 2, name: 'Phuong Nhat'},
    {id: 3, name: 'Nguyen Thanh'},
  ]);
  const name = "quangtoan";
  const age = 25;
  const object = {
    address: "thoan",
    country: "vietnam",
  }
  const addNewTodo = (name) => {
    alert(`Please call ${name}`)
  }
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData
        name={name}
        age={age}
        object={object}
        todoList={todoList}
      />
      <div className='todo-image'>
        <img src={reactLogo} className='logo' />
      </div>
    </div>
  )
}

export default App
