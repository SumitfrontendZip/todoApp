import { useState } from "react"

export const AddTodo = ({ updateList }) => {
    const [inputText, setInputText] = useState('')
    return (
        <div>
            <input
                type="text"
                placeholder="Add your Next Todo"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />
            <button onClick={() => {
                updateList(inputText)
                setInputText('')
            }}>Add</button>
        </div>
    )
}
