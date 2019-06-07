import React from "react";
import Todo from "./containers/Todo";
import "./App.css";
import FormTodo from "./containers/FormTodo";
function App() {
  return (
    <div className="App">
      <Todo />
      <FormTodo />
    </div>
  );
}

export default App;
