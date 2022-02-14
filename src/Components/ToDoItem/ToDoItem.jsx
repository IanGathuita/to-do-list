import store from "../../Redux/store";
import { useSelector,useDispatch } from "react-redux";
import { deleteTodo } from "../../Redux/Actions/todosAction";

export default function ToDoItem(){
    // const toDoItems = props.toDoItems;
    // const deleteToDo = props.deleteToDo;

    //A hook to access the redux store's state.
    const toDoItems = useSelector(state => state.toDos);
    const dispatch = useDispatch();

    function editToDo(){
        console.log("clicked edit");
        const nameInput = document.querySelector("#name-input");
        const descriptionInput = document.querySelector("#description-input");
        const dueDateInput = document.querySelector('#dueDate-input');
        const name = document.querySelector("#name");
        const description = document.querySelector("#description");
        const dueDate = document.querySelector('#dueDate');
        const actions = document.querySelector('.actions');
        const submit = document.querySelector('#submit');
        nameInput.style.display = 'block';
        descriptionInput.style.display = 'block';
        dueDateInput.style.display = 'block';
        actions.style.display = 'none';
        submit.style.display = 'block';
    }
    function markAsComplete(completeId){
        //If element is loaded
        if(document.getElementById(completeId)){
            document.getElementById(completeId).style.backgroundColor = '#ff6666';
        }
    }


     return toDoItems.length > 0 ?    
        <>
            {
                toDoItems.map((toDo) => {
                    let completeId = `" # ${toDo.id} "`;
                    console.log(completeId);
                    return(
                        <div className ='container card {to}' key={toDo.id} id={toDo.id}>
                            <h2 id="name" >{toDo.id}. {toDo.name}</h2>
                            <input id="name-input" className="input" type="text" placeholder="New heading" ></input>
                            <p id="description">{toDo.description}</p>
                            <input id="description-input" className="input"  type="text" placeholder="New description" ></input>
                            <p id='dueDate'>Must be done before: {toDo.dueDate}</p>
                            <input id="dueDate-input" className="input"  type="text" placeholder="New date" ></input>
                            <input id="submit" className="input"  type="submit"></input>
                            <div className="actions">
                                <span title="edit to do" className="material-icons-outlined edit" onClick={() => {editToDo()}}>edit</span>
                                
                                <span title="mark as complete" className="material-icons-outlined complete" onClick={() => {markAsComplete(toDo.id)}}>task_alt</span>
                                <span title="delete to do" className="material-icons-outlined delete" onClick={()=> {dispatch(deleteTodo(toDo.id))}} >delete_outline</span> 
                                {/* onClick={()=>{deleteToDo(toDo.id);console.log('deleted')}} */}
                            </div>                            
                        </div>
                    )
                    
                })

            }

        </>
        :
        <div className ='container' >
            <h2>No items to display</h2>
            <p>Please add some new to-dos so that they can be displayed here.</p>
        </div>

    

}