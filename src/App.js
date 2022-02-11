import "./App";

import { Todo } from "./features/todos/Todo";

function App() {
  return (
    <div className='App'>
      <h1 className='title'>ToDo</h1>
      <Todo />
    </div>
  );
}

export default App;
