import { useState } from 'react'
import './App.css'
import { AddTodo } from './Components/AddTodo/AddTodo'
import { TodoList } from './Components/TodoList/TodoList'
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [list, setList] = useState([
    { id: 1, todoData: 'todo 1', finished: false },
    { id: 2, todoData: 'todo 2', finished: false }
  ])



  return (
    <>
      <AddTodo updateList={(todo) => setList([...todo, { id: uuidv4(), todoData: todo, finished: false }])} />
      <TodoList list={list} />
    </>
  )
}

export default App
