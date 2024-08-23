
export function Task({task, onDelete}){
    return(
        <div>
            <p>{task}</p>
            <button onClick={onDelete}>-</button>
        </div>
    )
}