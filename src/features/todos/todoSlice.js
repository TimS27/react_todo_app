import { createSlice } from "@reduxjs/toolkit";
//import axios from 'axios';

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [{ id: 1, name: "beginning", status: false }],
  },

  reducers: {
    // Redux Toolkit allows to write "mutating" logic in reducers without actually mutating.

    add: (state) => {
      if (state.todos.length === 0) {
        state.todos.push({
          id: 1,
          name: "test",
          status: false,
        });
      } else {
        state.todos.push({
          id: state.todos[state.todos.length - 1].id + 1, //id of pushed todo obj is previous id + 1
          name: "test",
          status: false,
        });
      }
    },
    addRandom: (state) => {
      state.todos.push({
        id: state.todos[state.todos.length - 1].id + 1,
        name: "random",
        status: false,
      });
    },
    remove: (state, id) => {
      //find index of todo object that will be deleted in todos array
      let ids = [];
      for (let i = 0; i < state.todos.length; i++) {
        ids += state.todos[i].id;
      }
      //delete object with correct id
      state.todos.splice(ids.indexOf(id.payload), 1);
      console.log(id.payload);
    },
    done: (state, id) => {
      //find index of todo object that will be deleted in todos array
      let ids = [];
      for (let i = 0; i < state.todos.length; i++) {
        ids += state.todos[i].id;
      }
      //change status property of object with correct id
      state.todos[ids.indexOf(id.payload)].status = !state.todos[ids.indexOf(id.payload)].status;
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, addRandom, remove, done } = todoSlice.actions;

export default todoSlice.reducer;
