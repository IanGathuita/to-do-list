import ToDoItem from "../ToDoItem/ToDoItem";


import React from "react";

export default function ToDoList(props){

const deleteToDo = props.deleteToDo;
const toDoItems = props.toDoItems;  
    
return(
    <div>            
        <ToDoItem toDoItems={toDoItems} deleteToDo={deleteToDo} />
    </div>
);   
}

