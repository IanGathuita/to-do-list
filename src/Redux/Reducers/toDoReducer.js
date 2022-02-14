import {ADD_TODO,DELETE_TODO} from "../types";
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
        default: return state;
    }

}