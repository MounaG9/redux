import "./App.css";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteTodo,
  completeTodo,
  
  addTodo,
} from "./redux/actions/todoActions";

function App() {
  const [task, setTask] = useState("");
  const todos = useSelector(state => state.todoReducer);
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="App">
      <input
        type="text"
        placeholder="add task..."
        onChange={(e) => setTask(e.target.value)}
      />
      {console.log(setTask)}
      <button onClick={() => dispatch(addTodo(task))}>ADD TASK</button>
      <button onClick={() => setFilter("all")}>all</button>
      <button onClick={() => setFilter("done")}>done</button>
      <button onClick={() => setFilter("undone")}>undone</button>
      {filter === "all"
        ? todos.map((el) => (
            <div>
              <h2>{el.title}</h2>
              <button onClick={() => dispatch(deleteTodo(el.id))}>
                DELETE
              </button>
              <button onClick={() => dispatch(completeTodo(el.id))}>
                {el.complete ? "done" : "undone"}
              </button>
            </div>
          ))
        : filter === "done"
        ? todos
            .filter((el) => el.complete === "true")
            .map((el) => (
              <div>
                <h2>{el.title}</h2>
                <button onClick={() => dispatch(deleteTodo(el.id))}>
                  DELETE
                </button>
                <button onClick={() => dispatch(completeTodo(el.id))}>
                  {el.complete ? "done" : "undone"}
                </button>
              </div>
            ))
        : filter === "undone"
        ? todos
            .filter((el) => el.complete === "false")
            .map((el) => (
              <div>
                <h2>{el.title}</h2>
                <button onClick={() => dispatch(deleteTodo(el.id))}>
                  DELETE
                </button>
                <button onClick={() => dispatch(completeTodo(el.id))}>
                  {el.complete ? "done" : "undone"}
                </button>
              </div>
            ))
        : null}
    </div>
  );
}

export default App;
