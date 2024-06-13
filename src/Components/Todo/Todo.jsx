
export const Todo = ({todoData}) => {
    return (
        <div>
            <input type="checkbox"  />
            <span>{todoData}</span>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}
