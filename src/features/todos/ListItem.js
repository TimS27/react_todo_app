import { remove, done } from "./todoSlice";
import { useDispatch } from "react-redux";
import "./ListItem.scss";

export default function ListItem(props) {
  const dispatch = useDispatch();

  return (
    <li className={props.status === true ? "checked" : null}>
      <input type='checkbox' onClick={() => dispatch(done(props.id))} />
      <span>&nbsp;&nbsp;</span>
      <span className={props.status === true ? "checked description" : "description"}>
        {props.name}
      </span>
      <span>&nbsp;&nbsp;</span>
      <span className='delete' onClick={() => dispatch(remove(props.id))}>
        <svg
          width='10'
          height='10'
          viewBox='0 0 50 50'
          overflow='visible'
          stroke='red'
          strokeWidth='10'
          strokeLinecap='round'
        >
          <line x2='50' y2='50' />
          <line x1='50' y2='50' />
        </svg>
      </span>
    </li>
  );
}
