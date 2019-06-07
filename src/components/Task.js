import React from "react";

const Task = ({ taskItem }) => {
  return (
    <li>
      <h1>{taskItem.title}</h1>
      <p>{taskItem.desc}</p>
    </li>
  );
};

export default Task;
