import "./displayTodo.css";



function DisplayToDo(props){
    return(
        <div className="todos">
            <div className="subheading">My Todos</div>
            <ul>
                {props.todos.map((todo)=>(
                    <li >
                        <div>
                            <div id={todo.id} className="description">{todo.description}</div>
                            <div id="cross"> x </div>
                        </div>
                        
                    </li>
                 ))}
                </ul>
        </div>
    )
}
export default DisplayToDo;