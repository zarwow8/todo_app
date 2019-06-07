import React from "react";
import AddFormTask from "../components/addTask";
import { addTask } from "../actions/addTask";
import { connect } from "react-redux";

const FormTodo = ({ addTask }) => {
  return (
    <>
      <AddFormTask add={addTask} />
    </>
  );
};

export default connect(
  null,
  { addTask }
)(FormTodo);
