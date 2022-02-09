import { remove } from "./todoSlice";
import { useSelector, useDispatch } from "react-redux";

export default function ListItem(props) {
  //const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <li>
      {props.name} <span onClick={() => dispatch(remove())}>X</span>
    </li>
  );
}
