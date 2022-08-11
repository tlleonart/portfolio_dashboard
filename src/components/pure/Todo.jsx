import React from "react";
import PropTypes from "prop-types";
import { Todo } from "../../models/todo.class";
import "../../styles/todo.scss";
import { LEVELS } from "../../models/levels.enum";
import { useDeleteTodoMutation, useUpdateTodoMutation } from "../../store/api";

const TodoComponent = ({ todo }) => {
  const [deleteTodo] = useDeleteTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();

  const todoLevelBadge = () => {
    switch (todo.level) {
      case LEVELS.NORMAL:
        return (
          <span className="todo__level__span badge bg-primary">
            {todo.level}
          </span>
        );
      case LEVELS.URGENT:
        return (
          <span className="todo__level__span badge bg-warning">
            {todo.level}
          </span>
        );
      case LEVELS.BLOCKING:
        return (
          <span className="todo__level__span badge bg-danger">
            {todo.level}
          </span>
        );
      default:
        break;
    }
  };

  const handleCompleted = async (todo) => {
    let updatedTodo = {
      id: todo.id,
      name: todo.name,
      description: todo.description,
      completed: !todo.completed,
      level: todo.level,
    };
    await updateTodo(updatedTodo);
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
  };

  const todoCompletedIcon = () => {
    if (todo.completed) {
      return (
        <i
          onClick={() => handleCompleted(todo)}
          className="bi-toggle-on todo-action"
          style={{ color: "green", fontSize: 20 }}
        ></i>
      );
    } else {
      return (
        <i
          onClick={() => handleCompleted(todo)}
          className="bi-toggle-off todo-action"
          style={{ color: "grey" }}
        ></i>
      );
    }
  };

  return (
    <tr className="todo">
      <th className="todo__name">
        <span className="todo__name__span">{todo.name}</span>
      </th>
      <td className="todo__description">
        <span className="todo__description__span">{todo.description}</span>
      </td>
      <td className="todo__level">{todoLevelBadge()}</td>
      <td className="todo__state">
        {todoCompletedIcon()}{" "}
        <i
          className="bi-trash task-action"
          style={{ color: "tomato", cursor: "pointer" }}
          onClick={() => handleDelete(todo.id)}
        ></i>
      </td>
    </tr>
  );
};

Todo.propTypes = {
  todo: PropTypes.instanceOf(Todo).isRequired,
  complete: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default TodoComponent;
