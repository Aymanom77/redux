// AddTodo.js
import React, { useState } from 'react';

const AddTodo = ({ onAdd }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') { // Vérifier si newTodo n'est pas vide
      onAdd(newTodo);
      setNewTodo('');
    }
  };

  return (
    <div>
      <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={handleAddTodo}>Ajouter</button>
    </div>
  );
};

export default AddTodo;

