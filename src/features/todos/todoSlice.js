import { createSlice } from "@reduxjs/toolkit";
//import axios from 'axios';

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    add: (state) => {
      // Redux Toolkit allows to write "mutating" logic in reducers without actually mutating.
      state.todos.push({ id: state.todos.length + 1, name: "test" });
    },
    addRandom: (state) => {
      state.todos.push({ id: state.todos.length + 1, name: "random" });
    },
    remove: (state) => {
      state.todos.pop();
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, addRandom, remove } = todoSlice.actions;

export default todoSlice.reducer;
