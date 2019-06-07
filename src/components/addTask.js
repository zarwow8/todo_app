import React from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";

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
      <Form>
        <Field type="text" name="title" />
        <ErrorMessage name="title" component="div" />
        <Field type="text" name="desc" />
        <ErrorMessage name="desc" component="div" />

        <button type="submit">Добавить задачу</button>
      </Form>
    </Formik>
  );
};

export default AddFormTask;
