import { CREATE_TODO, DELETE_TODO, UPDATE_TODO } from "../actions/actions-index";


export const todos = (state = [], action) => {
  switch (action.type) {
    case CREATE_TODO: {
      const newTodo = {
        text: action.payload.text,
        isCompleted: action.payload.isCompleted,
      };
      return [...state, newTodo];
    }

    case DELETE_TODO: {
      const deleteTodo = state.filter(
        (item) => item.text !== action.payload.text
      );
      return [...deleteTodo];
    }

    case UPDATE_TODO: 
      return state.map( todo => {
        
          if (todo.text === action.payload.text) {
            return { ...todo, isCompleted: !todo.isCompleted };
          }
          return todo
          
        


      }
      
      )

    default:
      return state;
  }
};
