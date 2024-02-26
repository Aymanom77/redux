// Todo.js
import React from 'react';

const Todo = ({ id, description, isDone, onToggle }) => {
  return (
    <div>
      <input type="checkbox" checked={isDone} onChange={() => onToggle(id)} />
      <span>{description}</span>
    </div>
  );
};

export default Todo;