import { useSelector } from "react-redux";
import "./Counter.scss";

export default function Counter() {
  const counter = useSelector((state) => state.todo.counter);

  return (
    <div>
      <span className='open'>Open tasks: {counter.open}</span>
      <span className='completed'>Completed tasks: {counter.completed}</span>
    </div>
  );
}
