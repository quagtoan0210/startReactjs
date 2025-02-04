import { useState } from "react";

const TodoNew = (props) => {
    //useState hook
    const [valueInput,setValueInput] = useState("");
    const { addNewTodo } = props;
    // addNewTodo("quangtoan");
    const handleClick = () => {
        console.log(valueInput);
        
    }
    const handleOnchange = (name) => {
        setValueInput(name);
    }
    return (
        <div className="todo-new">
            <input type="text" onChange={(e) => handleOnchange(e.target.value)} />
            <button style={{ cursor: "pointer" }} onClick={handleClick}>Add</button>
            <div>
                my text input is = {valueInput}
            </div>
        </div>
    )
}
export default TodoNew