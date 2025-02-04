const TodoData = (props) => {
    const { name, age, object,todoList } = props;
    console.log(props);

    return (
        <div className="todo-data">
            <div>My name is: {name}</div>
            <div>Watching Youtube</div>
            <div>
                {JSON.stringify(todoList)}
            </div>
        </div>
    )
}
export default TodoData