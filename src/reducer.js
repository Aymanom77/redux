// reducers.js
const initialState = {
    todos: [],
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          todos: [
            ...state.todos,
            {
              id: state.todos.length + 1,
              text: action.payload.text,
              isDone: false,
            },
          ],
        };
      case 'TOGGLE_TODO':
        return {
          todos: state.todos.map(todo =>
            todo.id === action.payload.id ? { ...todo, isDone: !todo.isDone } : todo
          ),
        };
      default:
        return state;
    }
  };
  
  export default todoReducer;