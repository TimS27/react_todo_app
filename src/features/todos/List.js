//import React from "react";
//import { remove } from "./todoSlice";
import { useSelector } from "react-redux";
import ListItem from "./ListItem";

export default function List() {
  const todos = useSelector((state) => state.todo.todos);
  //const dispatch = useDispatch();

  const listItems = todos.map((todo) => (
    <ListItem key={todo.id} name={todo.name} />
  ));

  return <ul>{listItems}</ul>;
}
