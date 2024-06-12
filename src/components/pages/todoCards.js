import React from "react";
import "../assets/todo.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

export const TodoCards = ({ task, deleteTodo, editTodo }) => {
  return (
    <div className="cards">
      <Card style={{ width: "18rem" }}>
        <Card.Body className="Card-Body">
          <Card.Title className="cardtitle">
            <h2>Name: {task.task}</h2>
          </Card.Title>
          <Card.Text className="cardtext">
            <h5>Description: {task.description}</h5>
            <select className={`form-select`}>
              <option value="default">Status</option>
              <option value="completed" className="bg-success" id="completed">
                Completed
              </option>
              <option value="not-completed" className="bg-danger">
                Not-Complete
              </option>
            </select>
          </Card.Text>
          <Button variant="primary" onClick={() => editTodo(task.id)}>
            Edit Task
          </Button>
          <Button variant="danger" onClick={() => deleteTodo(task.id)}>
            Delete Task
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
