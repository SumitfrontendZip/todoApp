import { useContext } from "react"
import { Todo } from "../Todo/Todo"
import TodoContext from "../../TodoContext/TodoContext"

export const TodoList = () => {
    const {list , setList} = useContext(TodoContext)
    console.log(list);
    return (
        <div>
            {list.length > 0 &&
                list.map((todo) =>
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        todoData={todo.todoData}
                        changeFinished={(isFinished) => {
                            const updateList = list.map((t) => {
                                if (t.id === todo.id) {
                                    todo.finished = isFinished
                                }
                                return t;
                            })
                            setList(updateList)
                        }}
                    />
                )
            }
        </div>
    )
}