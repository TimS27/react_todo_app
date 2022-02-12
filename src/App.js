import "./App";
import Example from "./features/charts/chartCounter.js";
import { Todo } from "./features/todos/Todo";
import { useSelector } from "react-redux";

function App() {
  const cumulatedCounter = useSelector((state) => state.todo.cumulatedCounter);
  console.log(cumulatedCounter);
  return (
    <div className='all'>
      <table>
        <tbody>
          <tr>
            <td>
              <div className='App'>
                <Todo />
              </div>
            </td>
            <td>
              <div className='chartCounter'>
                <Example data={cumulatedCounter} />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
