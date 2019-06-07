import React from "react";
import "./task.css";

const Task = ({ taskItem, deleteTask }) => {
  return (
    <li>
      <h1>{taskItem.title}</h1>
      <p>{taskItem.desc}</p>
      <button onClick={() => deleteTask(taskItem.id)}>Удалить</button>
    </li>
  );
};

export default Task;
