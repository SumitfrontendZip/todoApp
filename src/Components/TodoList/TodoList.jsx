import { useContext } from "react"
import { Todo } from "../Todo/Todo"
import TodoContext from "../../TodoContext/TodoContext"

export const TodoList = () => {
    const { list, setList } = useContext(TodoContext)

    const onFinished = (todo, isFinished) => {
        const updateList = list.map((t) => {
            if (t.id === todo.id) {
                todo.finished = isFinished
            }
            return t;
        })
        setList(updateList)
    }

    const onEdit = (todoText, todo) => {
        const updatedList = list.map((t) => {
            if (t.id === todo.id) {
                todo.todoData = todoText
            }
            return t;
        });
        setList(updatedList)
    }

    const onDelete = (todo) => {
        const updatedList = list.filter((t) => t.id !== todo.id)
        setList(updatedList)
    }
    
    console.log(list);
    return (
        <div>
            {list.length > 0 &&
                list.map((todo) =>
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        todoData={todo.todoData}
                        changeFinished={(isFinished) => onFinished(todo, isFinished)}
                        onDelete={() => onDelete(todo)}
                        onEdit={onEdit}
                    />
                )
            }
        </div>
    )
}