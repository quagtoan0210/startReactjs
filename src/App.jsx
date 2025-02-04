import TodoNew from './components/todo/TodoNew.jsx';
import TodoData from './components/todo/TodoData.jsx';
import reactLogo from './assets/react.svg';
import './components/todo/todo.css';
const App = () => {
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
      />
      <div className='todo-image'>
        <img src={reactLogo} className='logo' />
      </div>
    </div>
  )
}

export default App
