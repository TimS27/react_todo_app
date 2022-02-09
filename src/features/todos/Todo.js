import { useDispatch } from "react-redux";
import { add, addRandom } from "./todoSlice";
import List from "./List";

export function Todo() {
  //const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  //console.log(todos);
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
      <List />
    </div>
  );
}
