import { createSlice } from "@reduxjs/toolkit";
//import axios from 'axios';

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    add: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers without actually mutating.
      state.todos.push("test");
    },
    addRandom: (state) => {
      state.todos.push("Random");
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, addRandom } = todoSlice.actions;

export default todoSlice.reducer;
