import { remove, done } from "./todoSlice";
import { useSelector, useDispatch } from "react-redux";
import "./ListItem.css";

export default function ListItem(props) {
  //const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <li className={props.status == true ? "checked" : null}>
      <input type='checkbox' onClick={() => dispatch(done(props.id))} />
      <span>&nbsp;&nbsp;</span>
      <span className={props.status == true ? "checked description" : "description"}>
        {props.name}
      </span>
      <span>&nbsp;&nbsp;</span>
      <span className='delete' onClick={() => dispatch(remove(props.id))}>
        X
      </span>
    </li>
  );
}
