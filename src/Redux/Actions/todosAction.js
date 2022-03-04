import {ADD_TODO,DELETE_TODO,EDIT_TODO} from "../types";
export const todosAction = (todo) => {
    return(
        {
            type: ADD_TODO,
            payload: todo
        }

    );
}

export const deleteTodo = (id) => {
    return {
      type: DELETE_TODO,
      payload: id,
    };
  };

  export function editToDo(payload){
    return {
      type:EDIT_TODO,
      id:payload.id,
      property: payload.property,
      newValue: payload.newValue
    }
}