
export const CREATE_TODO = "CREATE_TODO";

export const DELETE_TODO = "DELETE_TODO";

export const UPDATE_TODO = "UPDATE_TODO";



export const createTodo = (text) => ({
  type: CREATE_TODO,
  payload: { text, isCompleted: false },
});

export const deleteTodo = (text) => ({
  type: DELETE_TODO,
  payload: { text },
});

export const updateTodo = (text) => ({
  type: UPDATE_TODO,
  payload: { text},
});
