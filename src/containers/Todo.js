import React from "react";
import Task from "../components/Task";

const Todo = () => {
  const tasks = [
    {
      id: 1,
      title: "Lorem ipsum",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit"
    },
    {
      id: 2,
      title: "Lorem ipsum",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit"
    },
    {
      id: 3,
      title: "Lorem ipsum",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit"
    },
    {
      id: 4,
      title: "Lorem ipsum",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit"
    },
    {
      id: 5,
      title: "Lorem ipsum",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit"
    }
  ];

  return (
    <ul>
      {tasks.map(item => (
        <Task key={item.id} taskItem={item} />
      ))}
    </ul>
  );
};

export default Todo;
