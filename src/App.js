// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;