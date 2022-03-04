import {ADD_TODO,DELETE_TODO,EDIT_TODO} from "../types";
import todosAction from "../Actions/todosAction";
const initialState = {
    toDos:[]
};
export default function toDoReducer(state = initialState,action){
    switch(action.type){
        case ADD_TODO: return {...state,toDos:[...state.toDos,action.payload]};
        case DELETE_TODO: return {...state,
            toDos: state.toDos.filter((todo) => todo.id !== action.payload)
        }
        case EDIT_TODO: return {
            ...state, toDos: state.toDos.map(toDo => {
                if (toDo.id === action.id){
                    toDo[action.property] = action.newValue;
                }
                return toDo;
            })}
        default: return state;
    }

}