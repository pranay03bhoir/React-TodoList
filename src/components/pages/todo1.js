import React, { useState, useEffect } from "react";
import "../assets/todo.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

export const Todo1 = ({ currentTodo, editTodo }) => {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (currentTodo) {
      setValue(currentTodo.task);
      setDescription(currentTodo.description);
    }
  }, [currentTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTodo = {
      ...currentTodo,
      task: value,
      description: description,
    };
    editTodo && editTodo(updatedTodo);
    setValue("");
    setDescription("");
  };

  return (
    <>
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
            value={description}
            placeholder="Todo Description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button id="btn" className="btn btn-success ms-5" type="submit">
            Update Task
          </Button>
        </div>
      </form>
    </>
  );
};
