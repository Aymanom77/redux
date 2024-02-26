// TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, filter, onToggle }) => {
  const filteredTodos = filter === 'done' ? todos.filter(todo => todo.isDone) : todos.filter(todo => !todo.isDone);

  return (
    <div>
      {filteredTodos.map(todo => (
        <Todo key={todo.id} {...todo} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default TodoList;