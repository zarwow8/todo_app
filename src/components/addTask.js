import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "./form.css";
const AddFormTask = ({ add }) => {
  return (
    <Formik
      initialValues={{ title: "", desc: "" }}
      validate={values => {
        let errors = {};

        if (!values.title) {
          errors.title = "Заполните поле";
        }
        if (!values.desc) {
          errors.desc = "Заполните поле";
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        add({ title: values.title, desc: values.desc });
        setSubmitting(false);
        resetForm();
      }}
    >
      <Form className="form">
        <Field className="field" type="text" name="title" />
        <ErrorMessage name="title" component="div" />
        <Field className="field" type="text" name="desc" />
        <ErrorMessage name="desc" component="div" />

        <button type="submit">Добавить задачу</button>
      </Form>
    </Formik>
  );
};

export default AddFormTask;
