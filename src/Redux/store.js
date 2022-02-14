import {createStore} from "redux";
import toDoReducer from "./Reducers/toDoReducer";

const store = createStore( toDoReducer );
export default store;