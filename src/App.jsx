import { useState } from 'react'
import './App.css'
import { AddTodo } from './Components/AddTodo/AddTodo'
import { TodoList } from './Components/TodoList/TodoList'
import { v4 as uuidv4 } from 'uuid';
import TodoContext from './TodoContext/TodoContext'

function App() {

  const [list, setList] = useState([])

  return (
    <TodoContext.Provider value={{ list, setList }}>
      <AddTodo updateList={(todo) => setList([...list, { id: uuidv4(), todoData: todo, finished: false }])} />
      <TodoList />
    </TodoContext.Provider>
  )
}

export default App
