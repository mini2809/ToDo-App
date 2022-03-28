import './App.css';
import { useState } from "react";

function App() {

    let [todos, setTodo ] = useState("");
    let[todoId , setId] = useState(0);
    let [todoList, setList] = useState([]);

  return (
    <div className="App">
      <div className="heading">My TODO-App</div>
      <div>
            <div className="input-container">
                <input type="text" placeholder="Whats on your List? Add it !" className="input" id="input" value={todos} onChange={(e)=>setTodo(e.target.value)}></input>
            </div>
            <button className="submit" onClick={()=> {
              setTodo("");
              setId(todoId+1);
              if(todos!="")
                setList([...todoList,{"id":todoId,"description":todos}]);
            }}>Add Task</button>
        </div>
        <div className="todos">
        {
          todoList.length > 0 ? (
            <div>
              <div className="subheading">My Todos</div>
              <ul>
              {todoList.map((todo)=>(
                  <li key={todo.id}>
                      <div className='todoItems'>
                          <div id={todo.id} className="description">{todo.description}</div>
                          <div id={"cross"+ todo.id} className="cross" onClick={()=>
                            HandleDeleteTodo(todo.id,todoList,setList)
                          }> x </div>
                      </div>
                      
                  </li>
                ))}
            </ul>
        </div>
          ) 
          : (<div className="subheading">Going Good No left Over Task!</div>)
        }
           
        </div>
    </div>
  );
}
function HandleDeleteTodo(deleteId ,todoList,setList){
  let newList=[];
  todoList.forEach(td => {
    if(td.id != deleteId)
      newList.push(td);
  });
  setList(newList);
}

export default App;
