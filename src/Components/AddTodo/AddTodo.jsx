import { useContext, useState } from "react"
import TodoDispatchContext from "../../TodoContext/TodoDispatchContext"

export const AddTodo = () => {
    const [inputText, setInputText] = useState('')
    const { dispatch } = useContext(TodoDispatchContext)
    return (
        <div>
            <input
                type="text"
                placeholder="Add your Next Todo"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />
            <button onClick={() => {
                dispatch({ type: 'add_todo', payload: { todoText: inputText } })
                setInputText('')
            }}>Add</button>
        </div>
    )
}
