import { useState } from "react"

export const Todo = ({ todoData, isFinished, changeFinished }) => {
    const [finished, setFinished] = useState(isFinished)
    return (
        <div>
            <input type="checkbox"
                checked={finished}
                onChange={(e) => {
                    setFinished(e.target.checked)
                    changeFinished(e.target.checked)
                }} />
            <span>{todoData}</span>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}
