const TodoNew = (props) => {
    const { addNewTodo } = props;
    // addNewTodo("quangtoan");
    const handleClick = () => {
        alert("click me");
    }
    const handleOnchange = (name) => {
        console.log(name);

    }
    return (
        <div className="todo-new">
            <input type="text" onChange={(e) => handleOnchange(e.target.value)} />
            <button style={{ cursor: "pointer" }} onClick={handleClick}>Add</button>
        </div>
    )
}
export default TodoNew