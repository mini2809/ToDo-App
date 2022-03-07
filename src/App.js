import './App.css';
import  Input  from "./inputToDo.js";
import Display from "./displayTodo.js";
import { useState } from "react";


function App() {

  let [todos, addTodo ] = useState(
    [
      {
          "id":1,
          "description":"Take Bath",
      },
      {
          "id":2,
          "description":"Frontend Interviews Prep",
      },
      {
          "id":3,
          "description":"Watch Netflix",
      },
      {
          "id":4,
          "description":"Play Badminton",
      }
    ]
  )
  
  return (
    <div className="App">
      <div className="heading">My TODO-App</div>
        <Input />
        <Display todos={todos}/>
    </div>
  );
}

export default App;
