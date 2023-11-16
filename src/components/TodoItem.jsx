

function TodoItem({ id, title, removeTodo }) {
    return(
        <li>
            <label>{id} {title}</label>
            <span onClick={() => removeTodo(id)} style={{color: 'red', cursor: 'pointer'}}> x</span>
           
        </li>
    )
}

export default TodoItem