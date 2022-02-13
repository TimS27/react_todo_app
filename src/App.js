import "./App";
import ChartCounter from "./features/charts/chartCounter.js";
import ChartCategories from "./features/charts/chartCategories";
import { Todo } from "./features/todos/Todo";
import { useSelector } from "react-redux";
import "./features/charts/chartCategories.scss";

function App() {
  const cumulatedCounter = useSelector((state) => state.todo.cumulatedCounter);
  console.log(cumulatedCounter);
  return (
    <div className='all'>
      <table>
        <tbody>
          <tr>
            <td>
              <div className='chartCategories'>
                <h3>Your Taks by Categories</h3>
                <ChartCategories />
              </div>
            </td>
            <td>
              <div className='App'>
                <Todo />
              </div>
            </td>
            <td>
              <div className='chartCounter'>
                <h3>Your Open Task Progression</h3>
                <ChartCounter data={cumulatedCounter} />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
