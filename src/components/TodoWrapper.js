import { useState } from "react";
import React from "react";
import TodoForm from "./TodoForm";
import { Todo } from "./Todo";
import { v4 as uuidv4 } from "uuid";
uuidv4();

function TodoWrapper() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos(...todos, {
      id: uuidv4,
      task: todo,
      completed: false,
      isEditing: false,
    });
  };
  return (
    <div className="TodoWrapper">
      <TodoForm addTodo={addTodo} />
      <Todo />
    </div>
  );
}

export default TodoWrapper;
