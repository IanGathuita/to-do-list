import {ADD_TODO,DELETE_TODO} from "../types";
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