import React, { useState } from "react";
import "../assets/todo.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

export const Todo = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      task: value,
      description: newDescription,
    });
    setValue("");
    setNewDescription("");
  };

  return (
    <>
      <div className="todo">My Todo List</div>
      <form onSubmit={handleSubmit}>
        <div className="input">
          <input
            type="text"
            className="todoname"
            value={value}
            placeholder="Todo Name"
            onChange={(e) => setValue(e.target.value)}
          />
          <input
            type="text"
            className="todo-desc"
            value={newDescription}
            placeholder="Todo Description"
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <Button id="btn" className="btn btn-success ms-5" type="submit">
            Add Task
          </Button>
        </div>
      </form>
      <h1 className="mytodoheading">My Todos</h1>
    </>
  );
};
