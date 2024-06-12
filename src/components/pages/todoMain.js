import React, { useState } from "react";
import { TodoCards } from "./todoCards";
import { Todo } from "./todo";
import { v4 as uuidv4 } from "uuid";
import { Todo1 } from "./todo1";

export const TodoMain = () => {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState(null);

  const addTodo = ({ task, description }) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task, description, completed: false, isEditing: false },
    ]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleEditTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
    setCurrentTodo(todos.find((todo) => todo.id === id));
  };

  const editTodo = (updatedTodo) => {
    setTodos(
      todos.map((todo) =>
        todo.id === updatedTodo.id ? { ...updatedTodo, isEditing: false } : todo
      )
    );
    setCurrentTodo(null);
  };

  return (
    <div>
      <Todo addTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <Todo1 key={todo.id} currentTodo={currentTodo} editTodo={editTodo} />
        ) : (
          <TodoCards
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={toggleEditTodo}
          />
        )
      )}
    </div>
  );
};
