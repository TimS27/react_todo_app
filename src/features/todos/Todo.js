import { useSelector } from "react-redux";
import Buttons from "./Buttons.js";
import List from "./List";
import Counter from "./Counter";
import Input from "./Input";
import "./Todo.scss";

export function Todo() {
  const todos = useSelector((state) => state.todo.todos);
  const input = useSelector((state) => state.todo.input);
  console.log(todos);

  return (
    <div>
      <h1 className='title'>ToDo</h1>
      <Input value={input} />
      <Buttons />
      <Counter />
      <List />
    </div>
  );
}
