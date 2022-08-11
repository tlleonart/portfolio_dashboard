import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import TodoComponent from "../pure/Todo";
import "../../styles/todoscontainer.scss";
import { useGetTodosQuery } from "../../store/api";

const TodosContainer = () => {
  const {
    data: todos = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTodosQuery();

  let content;

  if (todos.length === 0) {
    content = (
      <tr className="no-todos-message">
        <td className="no-todos-message-td">
          No hay tareas en este momemento...
        </td>
      </tr>
    );
  } else {
    content = todos.map((t) => {
      return <TodoComponent todo={t} key={t.id} />;
    });
  }

  return (
    <table className="todoscontainer">
      <thead className="todoscontainer__thead">
        <tr className="todoscontainer__thead__tr">
          <th scope="col" className="todoscontainer__thead__tr__tarea">
            Tarea
          </th>
          <th scope="col" className="todoscontainer__thead__tr__descripcion">
            Descripción
          </th>
          <th scope="col" className="todoscontainer__thead__tr__prioridad">
            Prioridad
          </th>
          <th scope="col" className="todoscontainer__thead__tr__accion">
            Acción
          </th>
        </tr>
      </thead>
      <tbody className="todoscontainer__tbody">{content}</tbody>
    </table>
  );
};

TodosContainer.propTypes = {};

export default TodosContainer;
