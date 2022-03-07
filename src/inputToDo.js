import "./inputToDo.css";
import {useState} from "react";

function Input(){
    let [todos, setTodo ] = useState("");
    let [todoList , setList] = useState({});
   return(
        <div>
            <div className="input-container">
                <label for="input" className="label">Enter Task:</label>
                <input type="text" placeholder="Whats on your List? Add it !" className="input" id="input" value={todos} onChange={(e)=>setTodo(e.target.value)}></input>
            </div>
            <button className="submit" onClick={()=>setList({"description":"coco"})}>Add Task</button>
        </div>
    )
}
export default Input;