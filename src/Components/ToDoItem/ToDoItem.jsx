export default function ToDoItem(props){
    const toDoItems = props.toDoItems;
    const deleteToDo = props.deleteToDo;

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


     return toDoItems.length > 0 ?    
        <>
            {
                toDoItems.map((toDo) => {
                    return(
                        <div className ='container card' key={toDo.id}>
                            <h2 id="name" >{toDo.id}. {toDo.name}</h2>
                            <input id="name-input" className="input" type="text" placeholder="New heading" ></input>
                            <p id="description">{toDo.description}</p>
                            <input id="description-input" className="input"  type="text" placeholder="New description" ></input>
                            <p id='dueDate'>Must be done before: {toDo.dueDate}</p>
                            <input id="dueDate-input" className="input"  type="text" placeholder="New date" ></input>
                            <input id="submit" className="input"  type="submit"></input>
                            <div className="actions">
                                <span title="edit to do" className="material-icons-outlined edit" onClick={() => {editToDo()}}>edit</span>
                                <span title="mark as complete" className="material-icons-outlined complete">task_alt</span>
                                <span title="delete to do" className="material-icons-outlined delete" onClick={()=>{deleteToDo(toDo.id);console.log('deleted')}}>delete_outline</span>
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