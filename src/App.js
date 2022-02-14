import ToDOlist from "./Components/ToDoList/ToDoList";
import Header from './Components/Header/Header';
import Completed from './Components/Completed/Completed';
import CreateToDo from "./Components/CreateToDo/CreateToDo";
import { ToDoItems } from "./Components/ToDoItems/ToDoItems";
import { useState } from "react";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from "./Redux/store";

function App() {
  const [toDoItems,setToDoItems] = useState(ToDoItems);

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header/>
          <Switch>
              <Route exact path="/">
                    <ToDOlist/>
              </Route>
              <Route exact path="/new">
                    <div className="container">
                    <CreateToDo/>
                    </div>
              </Route>
              <Route exact path="/completed">
                    <Completed/>
              </Route>
          </Switch>        
        </div>
      </Router>
    </Provider>
  );
}

export default App;
