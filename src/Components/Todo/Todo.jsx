import { useState } from "react"

export const Todo = ({ todoData, isFinished, changeFinished, onDelete, onEdit }) => {
    const [finished, setFinished] = useState(isFinished)
    const [editText, setEditText] = useState(todoData)
    const [isEditing, setIsEditing] = useState(false)
    return (
        <div>
            <input type="checkbox"
                checked={finished}
                onChange={(e) => {
                    setFinished(e.target.checked)
                    changeFinished(e.target.checked)
                }} />
            {isEditing ? <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} /> : <span>{todoData}</span>}
            <button onClick={() => {
                setIsEditing(!isEditing)
                onEdit(editText)
            }}>Edit</button>
            <button onClick={onDelete}>Delete</button>
        </div>
    )
}
