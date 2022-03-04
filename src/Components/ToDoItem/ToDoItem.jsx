import store from "../../Redux/store";
import { useSelector,useDispatch } from "react-redux";
import { deleteTodo } from "../../Redux/Actions/todosAction";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import { editToDo } from "../../Redux/Actions/todosAction";

export default function ToDoItem(){
    //A hook to access the redux store's state.
    const toDoItems = useSelector(state => state.toDos);
    const dispatch = useDispatch();

    function handleDoubleClick(e, toDo) {
        let id = e.target.id;
        let key = toDo.id;
        switch (id) {
            case "name": e.target.contentEditable = "true";
                e.target.focus();
                e.target.addEventListener('focusout', () => {
                    let toUpdate = { id: key, property: "name", newValue: e.target.innerText };

                    console.log(toUpdate.id, toUpdate.myProperty, toUpdate.newValue);
                    dispatch(editToDo(toUpdate));
                    e.target.contentEditable = "false";
                });
                break;

            case "description": e.target.contentEditable = "true";
                e.target.focus();
                
                e.target.addEventListener('focusout', () => {
                    let toUpdate = { id: key, property: "description", newValue: e.target.innerText };

                    console.log(toUpdate.id, toUpdate.myProperty, toUpdate.newValue);
                    dispatch(editToDo(toUpdate));
                    e.target.contentEditable = "false";
                });;
                break;
            case "dueDate": e.target.contentEditable = "true";
            e.target.focus();
            
            e.target.addEventListener('focusout', () => {
                let toUpdate = { id: key, property: "dueDate", newValue: e.target.innerText };

                console.log(toUpdate.id, toUpdate.myProperty, toUpdate.newValue);
                dispatch(editToDo(toUpdate));
                e.target.contentEditable = "false";
            });;
            break;;
        }
    }

    //page we are in
    const [pageNumber,setPageNumber] = useState(0);
    const todosPerPage = 3;
    const todosVisitedSoFar = pageNumber * todosPerPage;

    const displayToDos = toDoItems.slice(todosVisitedSoFar, todosVisitedSoFar + todosPerPage)
    .map((toDo) => {
        let completeId = `" # ${toDo.id} "`;
        console.log(completeId);
        return(
            <div className ='container card {to}' key={toDo.id} id={toDo.id}>
                <span><h2>{toDo.id + ". "}</h2></span>
                <span><h2 id="name" onDoubleClick={(e) => handleDoubleClick(e, toDo)}>{toDo.name}</h2></span>
                <p id="description" onDoubleClick={(e) => handleDoubleClick(e, toDo)}>{toDo.description}</p>
                <span>Must be done before:</span>
                <span id='dueDate' onDoubleClick={(e) => handleDoubleClick(e, toDo)}> {toDo.dueDate}</span>
                <input id="dueDate-input" className="input"  type="text" placeholder="New date" ></input>
                <div className="actions">
                    {/* <span title="edit to do" className="material-icons-outlined edit" onClick={() => {editToDo()}}>edit</span> */}
                    
                    <span title="mark as complete" className="material-icons-outlined complete" onClick={() => {markAsComplete(toDo.id)}}>task_alt</span>
                    <span title="delete to do" className="material-icons-outlined delete" onClick={()=> {dispatch(deleteTodo(toDo.id))}} >delete_outline</span> 
                    {/* onClick={()=>{deleteToDo(toDo.id);console.log('deleted')}*/}
                </div>                            
            </div>
        )
        
    });

    
    function markAsComplete(completeId){
        //If element is loaded
        if(document.getElementById(completeId)){
            document.getElementById(completeId).style.backgroundColor = '#ff6666';
        }
    }

    //ceiling because items may not fit fully into pages. Last page will not be full.
    const pageCount = Math.ceil(toDoItems.length/todosPerPage);
    const changePage = ({selected}) => {
        setPageNumber(selected);
    }

    return toDoItems.length > 0 ?    
        <>
            {
                displayToDos

            }
            <ReactPaginate
            previousLabel = {"Previous"}
            nextLabel = {"Next"}
            pageCount = {pageCount}
            onPageChange = {changePage}
            containerClassName = {"pagination-btns container"}
            previousLinkClassName = {"previous-btn"}
            nextLinkClassName = {"next-btn"}
            disabledClassName = {"pagination-disabled"}
            activeClassName = {"pagination-active"}

            />

        </>
        :
        <div className ='container' >
            <h2>No items to display</h2>
            <p>Please add some new to-dos so that they can be displayed here.</p>
        </div>

    

}