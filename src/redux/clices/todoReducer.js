import { createSlice } from "@reduxjs/toolkit";

let nextTodoId = 1;

const todoListSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [{ id: nextTodoId++, text: 'play mobile game' }],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ id: nextTodoId++, text: action.payload });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoListSlice.actions;

export default todoListSlice.reducer;