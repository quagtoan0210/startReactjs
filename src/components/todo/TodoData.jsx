const TodoData = (props) => {
    const { name, age, object } = props;
    console.log(props);

    return (
        <div className="todo-data">
            <div>My name is: {name}</div>
            <div>Learning React</div>
            <div>Watching Youtube</div>
        </div>
    )
}
export default TodoData