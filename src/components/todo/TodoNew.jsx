import { useState } from "react";

const TodoNew = (props) => {
    //useState hook
    const [valueInput,setValueInput] = useState("");
    const { addNewTodo } = props;
    // addNewTodo("quangtoan");
    const handleClick = () => {
        addNewTodo(valueInput);
        setValueInput("");
    }
    const handleOnchange = (name) => {
        setValueInput(name);
    }
    return (
        <div className="todo-new">
            <input type="text" onChange={(e) => handleOnchange(e.target.value)} value={valueInput} />
            <button style={{ cursor: "pointer" }} onClick={handleClick}>Add</button>
        </div>
    )
}
export default TodoNew