import React from "react";
import Task from "../components/Task";
import { connect } from "react-redux";
import { getTasks } from "../actions/getTasks";
import { deleteTask } from "../actions/deleteTask";
import "./Todo.css";

const Todo = ({ getTasks, tasks, isFetching, error, deleteTask }) => {
  const renderTemplate = () => {
    if (error) {
      return <p color="error">Во время запроса произошла ошибка</p>;
    }
    if (isFetching) {
      return <p className="loading">Загрузка...</p>;
    }

    if (tasks.length > 0) {
      return (
        <ul className="list_tasks">
          {tasks.map(item => (
            <Task key={item.id} taskItem={item} deleteTask={deleteTask} />
          ))}
        </ul>
      );
    }

    return <p>Список заданий пуст</p>;
  };

  return (
    <div className="back">
      {renderTemplate()}
      {tasks.length > 0 || <button onClick={getTasks}>Получить задания</button>}
    </div>
  );
};

export default connect(
  store => ({
    tasks: store.todo.tasks,
    isFetching: store.todo.isFetching,
    error: store.error
  }),
  { getTasks, deleteTask }
)(Todo);
