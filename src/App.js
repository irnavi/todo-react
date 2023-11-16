import { useEffect, useState } from 'react';
import './App.css';
import TodoList from "./components/TodoList"


function App() {
  const [title, setTitle] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const newTodos = localStorage.getItem("keyTodos");

    newTodos &&
    setTodos(JSON.parse(newTodos))
  },[])

  function handleChange(event) {
    setTitle(event.target.value)
  }

  function addTodo() {
    title &&
    setTodos([
      ...todos,
      {id: Math.floor(Math.random() * 99),
      title}
    ])
    setTitle('')

  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  useEffect(() => {
    localStorage.setItem('keyTodos', JSON.stringify(todos))
  },[todos])
  


  return (
    <div >
      <h1>Todo app</h1>
          <input 
              type="text" 
              value={title} 
              onChange={(event) => handleChange(event)}/>
          <button onClick={addTodo}>Add todo</button>
          <TodoList todos={todos} removeTodo={removeTodo}/>
            
    </div>
  );
}

export default App;
