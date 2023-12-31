import {useState} from 'react';
import{InputForm} from './components/InputForm';
import{Title} from './components/Title';
import{TodoList} from './components/TodoList';
import "./App.css"

function App() {
  // taskListを状態管理するためのhookにuseStateを使う
  const [taskList, setTaskList] = useState([]);

  
  return(
    <div className = "body">
      <Title />
      <InputForm taskList={taskList} setTaskList={setTaskList} />
      <TodoList taskList={taskList} setTaskList={setTaskList} />
      {/* ~~.jsx */}
    </div>
  );
}

export default App;
