export const Task = (props)=>{
    return(
        <div style={{backgroundColor: props.completed ? "green" : "red"}}>
            <h1>{props.taskName}</h1>
            <button onClick={() =>props.taskStatus(props.id)}>COMPLETED</button>
            <button onClick={()=> props.deleteTask(props.id)}>DELETE</button>
        </div>
    );
}