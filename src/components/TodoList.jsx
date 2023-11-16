import TodoItem from "./TodoItem"



function TodoList({ todos, removeTodo }) {
    
    return(
        <ul>
           {todos.map(todo => (
            <TodoItem key={Math.floor(Math.random() * 999)} {...todo} removeTodo={removeTodo}/>
           ))}
        </ul>
    )
}

export default TodoList