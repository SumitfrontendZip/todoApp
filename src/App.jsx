import { useReducer } from 'react'
import './App.css'
import { AddTodo } from './Components/AddTodo/AddTodo'
import { TodoList } from './Components/TodoList/TodoList'
import TodoContext from './TodoContext/TodoContext'
import todoReducer from './TodoReducer/todoReducer'
import TodoDispatchContext from './TodoContext/TodoDispatchContext'
function App() {

  const [list, dispatch] = useReducer(todoReducer, [])
  return (
    <TodoContext.Provider value={{ list }}>
      <TodoDispatchContext.Provider value={{dispatch}}>
      <AddTodo />
      <TodoList />
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  )
}

export default App
