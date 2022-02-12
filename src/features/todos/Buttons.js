import { useDispatch } from "react-redux";
import { add, addRandom } from "./todoSlice";

export default function Buttons() {
  const dispatch = useDispatch();

  return (
    <div>
      <button aria-label='Add Todo' onClick={() => dispatch(add())}>
        Add
      </button>
      <button className='random' aria-label='Add Random Todo' onClick={() => dispatch(addRandom())}>
        Add Random
      </button>
    </div>
  );
}
