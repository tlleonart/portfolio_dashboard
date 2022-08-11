import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Todo } from "../../../models/todo.class";
import { LEVELS } from "../../../models/levels.enum";
import "../../../styles/todoform.scss";
import { useAddTodoMutation, useGetTodosQuery } from "../../../store/api";

const TodoForm = () => {
  let todo = new Todo();

  const initialValues = {
    name: "",
    description: "",
    completed: false,
    level: LEVELS.NORMAL,
  };

  const todoSchema = Yup.object().shape({
    name: Yup.string().required(
      "Es necesario agregar un título para la tarea."
    ),
    description: Yup.string().required(
      "Es necesario agregar una descripción para la tarea."
    ),
    completed: Yup.bool(),
    level: Yup.string().oneOf(
      [LEVELS.NORMAL, LEVELS.URGENT, LEVELS.BLOCKING],
      "Se debe seleccionar una prioridad."
    ),
  });

  const [addTodo] = useAddTodoMutation();

  const { refetch } = useGetTodosQuery();

  const addHandler = async (todo, { resetForm }) => {
    resetForm();
    await addTodo(todo);
  };

  return (
    <div className="todoform">
      <h4 className="todoform__title">Agregar nueva tarea.</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={todoSchema}
        onSubmit={addHandler}
      >
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => (
          <Form className="todoform__form">
            <div className="form-left">
              <div className="container 1">
                <Field
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Ingresar tarea..."
                  className="todoform__name"
                />
                {errors.name && touched.name && (
                  <ErrorMessage name="name" component="p"></ErrorMessage>
                )}
              </div>
              <div className="container2">
                <Field
                  id="description"
                  type="text"
                  name="description"
                  placeholder="Describir tarea..."
                  className="todoform__description"
                />
                {errors.description && touched.description && (
                  <ErrorMessage name="description" component="p"></ErrorMessage>
                )}
              </div>
              <select
                id="level"
                name="level"
                onChange={handleChange}
                value={values.position}
                className="todoform__select"
              >
                <option value={LEVELS.NORMAL}>Normal</option>
                <option value={LEVELS.URGENT}>Urgente</option>
                <option value={LEVELS.BLOCKING}>Bloqueante</option>
              </select>
            </div>
            <button className="todoform__btn" type="submit">
              AGREGAR
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TodoForm;
