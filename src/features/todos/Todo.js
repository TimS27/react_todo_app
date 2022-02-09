import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, addRandom } from "./todoSlice";

export function Todo() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <button aria-label='Add Todo' onClick={() => dispatch(add())}>
        Add
      </button>

      <button
        aria-label='Add Random Todo'
        onClick={() => dispatch(addRandom())}
      >
        Add Random
      </button>

      <span>{todos}</span>
    </div>
  );
}
