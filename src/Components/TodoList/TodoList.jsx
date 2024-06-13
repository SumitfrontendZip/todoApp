import { useContext } from "react"
import { Todo } from "../Todo/Todo"
import TodoContext from "../../TodoContext/TodoContext"
import TodoDispatchContext from "../../TodoContext/TodoDispatchContext"

export const TodoList = () => {
    const { list } = useContext(TodoContext)
    const { dispatch } = useContext(TodoDispatchContext)

    const onFinished = (todo, isFinished) => {
        console.log(isFinished);
        dispatch({ type: 'finish_todo', payload: { todo, isFinished: isFinished } })
    }

    const onEdit = (todo, todoText) => {
        console.log(todoText);
        dispatch({ type: 'edit_todo', payload: { todoText: todoText, todo: todo } })
    }

    const onDelete = (todo) => {
        dispatch({ type: 'delete_todo', payload: { todo } })
    }

    return (
        <div>
            {list.length > 0 &&
                list.map((todo) =>
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        todoData={todo.todoData}
                        changeFinished={(isFinished) => {
                            onFinished(todo, isFinished)
                            console.log(isFinished);
                        }
                        }
                        onDelete={() => onDelete(todo)}
                        onEdit={(todoText) => onEdit(todo, todoText)}
                    />
                )
            }
        </div>
    )
}