import { createSlice } from "@reduxjs/toolkit";
//import axios from 'axios';

//returns array of ids of tasks
function idsArray(todosArr) {
  let ids = [];
  for (let i = 0; i < todosArr.length; i++) {
    ids += todosArr[i].id;
  }
  return ids;
}

function addTodo(todosArr, todoName) {
  //case: empty todos array
  if (todosArr.length === 0) {
    todosArr.push({
      id: 1,
      name: todoName,
      status: false,
    });
    //case: not empty
  } else {
    todosArr.push({
      id: todosArr[todosArr.length - 1].id + 1, //id of pushed todo obj is previous id + 1
      name: todoName,
      status: false,
    });
  }
}

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [{ id: 1, name: "Sample Task", status: false }],
    counter: { open: 1, completed: 0 },
  },

  reducers: {
    // Redux Toolkit allows to write "mutating" logic in reducers without actually mutating.

    add: (state) => {
      addTodo(state.todos, "test");
      state.counter.open++;
    },

    addRandom: (state) => {
      addTodo(state.todos, "random");
      state.counter.open++;
    },

    remove: (state, id) => {
      let ids = idsArray(state.todos);

      //change counter data depending on new task status
      if (state.todos[ids.indexOf(id.payload)].status === false) {
        state.counter.open--;
      }

      //delete object with correct id
      state.todos.splice(ids.indexOf(id.payload), 1);
    },

    done: (state, id) => {
      let ids = idsArray(state.todos);

      //change status property of object with correct id
      state.todos[ids.indexOf(id.payload)].status = !state.todos[ids.indexOf(id.payload)].status;

      //change counter data depending on new task status
      if (state.todos[ids.indexOf(id.payload)].status === true) {
        state.counter.open--;
        state.counter.completed++;
      } else {
        state.counter.open++;
        state.counter.completed--;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, addRandom, remove, done } = todoSlice.actions;

export default todoSlice.reducer;
