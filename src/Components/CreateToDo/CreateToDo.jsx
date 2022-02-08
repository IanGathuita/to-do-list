import { useState } from "react";
import { useHistory } from "react-router-dom";
export default function CreateToDo(props){

    const addToDo = props.addToDo;
    const  toDoItems = props.toDoItems;

    const [name,setName] = useState('');
    const [description,setDescription] = useState('');
    const [dueDate,setDueDate] = useState('');
    let history = useHistory();

    

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
                    // checkInput(name,description,dueDate);
                    let newToDo = {name,description,dueDate};
                    addToDo(newToDo);
                    // console.log(toDoItems);
                    history.push("/");
                    
                }}>SUBMIT</button>
            </form>
    );
}