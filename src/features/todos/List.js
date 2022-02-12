import { useSelector } from "react-redux";
import ListItem from "./ListItem";

export default function List() {
  const todos = useSelector((state) => state.todo.todos);

  const listItems = todos.map((todo) => (
    <ListItem key={todo.id} id={todo.id} name={todo.name} status={todo.status} />
  ));

  return <ul>{listItems}</ul>;
}
