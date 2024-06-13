import { v4 as uuidv4 } from 'uuid';

const todoReducer = (state, action) => {
    if (action.type === 'add_todo') {
        let todoText = action.payload.todoText;
        return [...state, { id: uuidv4(), todoData: todoText, finished: false }]
    } else if (action.type === 'edit_todo') {
        let todo = action.payload.todo
        let todoText = action.payload.todoText;
        console.log(todo);
        console.log(todoText);
        const updatedList = state.map((t) => {
            if (t.id === todo.id) {
                todo.todoData = todoText
            }
            return t;
        });
        return updatedList
    } else if (action.type === 'delete_todo') {
        let todo = action.payload.todo
        const updatedList = state.filter((t) => t.id !== todo.id)
        return updatedList
    } else if (action.type === 'finish_todo') {
        let todo = action.payload.todo
        let isFinished = action.payload.isFinished
        const updateList = state.map((t) => {
            if (t.id === todo.id) {
                todo.finished = isFinished
            }
            return t;
        })
        return updateList
    }else{
        return state;
    }
}

export default todoReducer