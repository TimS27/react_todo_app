import { useDispatch } from "react-redux";
import { updateInput } from "./todoSlice";
import "./Input.scss";

export default function Input(props) {
  const dispatch = useDispatch();

  function handleChange(event) {
    dispatch(updateInput(event.target.value));
  }

  return (
    <div>
      <input
        className='inputField'
        placeholder='What do you need to do?'
        type='search'
        value={props.value}
        onChange={handleChange}
      ></input>
    </div>
  );
}
