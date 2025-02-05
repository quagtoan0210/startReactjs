import TodoNew from './components/todo/TodoNew.jsx';
import TodoData from './components/todo/TodoData.jsx';
import reactLogo from './assets/react.svg';
import './components/todo/todo.css';
import { useState } from 'react';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import { Outlet } from 'react-router-dom';
const App = () => {
  const [todoList, SetTodoList] = useState([]);
  const addNewTodo = (name) => {
    const newTodo = {
      id: todoList.length + 1,
      name: name,
    }
    SetTodoList([...todoList, newTodo]);
  }
  const deleteTodo = (id)=>{
    const newTodo = todoList.filter(item=>item.id !== id);
    SetTodoList(newTodo);
  }
  return (
    <>
    <Header />
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      {todoList.length > 0 ?
        <TodoData
          todoList={todoList}
          deleteTodo={deleteTodo}
        />
        :
        <div className='todo-image'>
          <img src={reactLogo} className='logo' />
        </div>
      }
      {/* {todoList.length > 0 && <TodoData
        todoList={todoList}
      />}

      {todoList.length === 0 && <div className='todo-image'>
        <img src={reactLogo} className='logo' />
      </div>} */}
    </div>
    <Outlet/>
    <Footer />
    </>
  )
}

export default App
