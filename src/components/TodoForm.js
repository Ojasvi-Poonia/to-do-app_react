import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault(); //used to stop making the page to reload
    addTodo(value);
    setValue("");
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        value={value}
        placeholder="What is the Task for Today"
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="todo-btn" type="submit">
        Add Task
      </button>
    </form>
  );
}

export default TodoForm;
