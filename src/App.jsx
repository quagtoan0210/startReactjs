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
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew />
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
