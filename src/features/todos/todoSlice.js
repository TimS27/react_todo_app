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

//update cumulatedCounter for chartCounter
function updateCumulatedCounter(cumulatedCounterArr) {
  if (cumulatedCounterArr === []) {
    cumulatedCounterArr.push({
      cumumaltedCount: 1,
      up: true,
    });
  } else {
    cumulatedCounterArr.push({
      cumulatedCount: cumulatedCounterArr[cumulatedCounterArr.length - 1].cumulatedCount + 1,
      up: true,
    });
  }
}

//############################
//#### slice with reducer ####
//############################

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    input: "",
    todos: [{ id: 1, name: "Sample Task", status: false }],
    counter: { open: 1, completed: 0 },
    cumulatedCounter: [{ cumulatedCount: 1, up: true }],
  },

  reducers: {
    // Redux Toolkit allows to write "mutating" logic in reducers without actually mutating.

    updateInput: (state, input) => {
      state.input = input.payload;
    },

    add: (state) => {
      if (state.input !== "") {
        addTodo(state.todos, state.input);
        state.counter.open++;
        state.input = "";

        //update cumulatedCounter for chartCounter
        updateCumulatedCounter(state.cumulatedCounter);
      }
    },

    addRandom: (state) => {
      addTodo(state.todos, "random");
      state.counter.open++;

      //update cumulatedCounter for chartCounter
      updateCumulatedCounter(state.cumulatedCounter);
    },

    remove: (state, id) => {
      let ids = idsArray(state.todos);

      //change counter data depending on new task status
      if (state.todos[ids.indexOf(id.payload)].status === false) {
        state.counter.open--;
      }

      //delete object with correct id
      state.todos.splice(ids.indexOf(id.payload), 1);

      //update cumulatedCounter for chartCounter
      if (state.cumulatedCounter !== []) {
        state.cumulatedCounter.push({
          cumulatedCount:
            state.cumulatedCounter[state.cumulatedCounter.length - 1].cumulatedCount - 1,
          up: false,
        });
      }
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
export const { add, addRandom, remove, done, updateInput } = todoSlice.actions;

export default todoSlice.reducer;
