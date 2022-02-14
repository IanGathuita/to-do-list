import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { todosAction } from "../../Redux/Actions/todosAction";
import { useSelector } from "react-redux";
export default function CreateToDo(){

    

    const [name,setName] = useState('');
    const [description,setDescription] = useState('');
    const [dueDate,setDueDate] = useState('');
    let history = useHistory();
    const dispatch = useDispatch();
    const toDoItems = useSelector(state => state.toDos);

    

    function checkInput(name,description,dueDate){
        let nameError = document.querySelector('#name-error');
        nameError.innerText = name.length<1 && "Name cannot be empty";

        let descriptionError = document.querySelector('#description-error');
        descriptionError.innerText = name.length<1 && "Description cannot be empty";

        let dueDateError = document.querySelector('#due-date-error');
        dueDateError.innerText = name.length<1 && "Due date cannot be empty";
                
    }


    return (      
            <form>
                <h2>Create a new entry</h2>
                <label htmlFor="name">Name</label><br></br>
                <input id="name" type="text" value={name} onChange={(e) => {
                    setName(e.target.value);
                }}></input><br></br>
                <p id="name-error" className="error"></p>

                <label htmlFor="description">Description</label><br></br>
                <input id="description" type="text" value={description} onChange={(e) => {
                    setDescription(e.target.value);
                }}></input><br></br>
                <p id="description-error" className="error"></p>

                <label htmlFor="due-date">Due date</label><br></br>
                <input id="due-date" type="text" value={dueDate} onChange={(e) => {
                    setDueDate(e.target.value);
                }}></input><br></br>
                <p id="due-date-error" className="error"></p>

                <button onClick={(e) => {
                    e.preventDefault();
                    let lastId;
                    console.log(toDoItems);

                    if(toDoItems.length > 0){
                    lastId = toDoItems[toDoItems.length - 1].id;
                    }
                    else{
                    lastId = 0;
                    }
                    let id = ++lastId;
                    // checkInput(name,description,dueDate);
                    let newToDo = {id,name,description,dueDate};


                    //deleted props: addToDo and toDoItems
                    /*addToDo(newToDo);*/
                    /*console.log(toDoItems);*/
                    dispatch(todosAction(newToDo));
                    console.log(toDoItems);
                    console.log()
                    history.push("/");
                    
                }}>SUBMIT</button>
            </form>
    );
}