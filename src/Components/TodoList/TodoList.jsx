import { Todo } from "../Todo/Todo"

export const TodoList = ({updateList}) => {
 
    return (
        <div>
            {list.length > 0 && list.map((todo) => <Todo key={todo.id} todoData={todo.todoData} />)}
        </div>
    )
}