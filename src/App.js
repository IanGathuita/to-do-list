import ToDOlist from "./Components/ToDoList/ToDoList";
import Header from './Components/Header/Header';
import Completed from './Components/Completed/Completed';
import CreateToDo from "./Components/CreateToDo/CreateToDo";
import { ToDoItems } from "./Components/ToDoItems/ToDoItems";
import { useState } from "react";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  const [toDoItems,setToDoItems] = useState(ToDoItems);
  

  const addToDo = (newToDo) => {
    let lastId;

    if(toDoItems.length > 0){
      lastId = toDoItems[toDoItems.length - 1].id;
    }
    else{
      lastId = 0;
    }
    newToDo.id = ++lastId;
    // const newToDos = [...toDoItems, newToDo];
    const newToDos = toDoItems;
    newToDos.push(newToDo);
    console.log("all",newToDos);
    setToDoItems(newToDos);
    console.log(toDoItems[toDoItems.length-1]);    
  }

  const deleteToDo = (toDoId) => {
    const toDos = toDoItems;
    const updatedTodos = toDos.filter((toDo)=> {
      
      if (toDo.id === toDoId){
        console.log(toDo.id, " ",toDoId);
        return false;
      }
      else{
        return true;
      }      
    });
    setToDoItems(updatedTodos);
    console.log(updatedTodos);
    
  }

  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
            <Route exact path="/">
                  <ToDOlist toDoItems = {toDoItems} deleteToDo = {deleteToDo}/>
            </Route>
            <Route exact path="/new">
                  <div className="container">
                  <CreateToDo toDoItems = {toDoItems} addToDo = {addToDo}/>
                  </div>
            </Route>
            <Route exact path="/completed">
                  <Completed/>
            </Route>
        </Switch>        
      </div>
    </Router>
  );
}

export default App;
