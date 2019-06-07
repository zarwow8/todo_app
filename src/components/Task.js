import React from "react";

const Task = ({ taskItem, deleteTask }) => {
  return (
    <li>
      <h1>{taskItem.title}</h1>
      <p>{taskItem.desc}</p>
      <button onClick={() => deleteTask(taskItem.id)}>DEL</button>
    </li>
  );
};

export default Task;
