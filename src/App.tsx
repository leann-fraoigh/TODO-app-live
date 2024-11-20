import './assets/css/index.css';
import { useState } from 'react';
import { List } from './components/List';
import { Form } from './components/Form';

function App() {
  const initialTasks = [{text: 'Item1', id: 1}, {text: 'Item2', id: 2}];
  const [tasks, setTasks] = useState(initialTasks);

  return (
    <>
      <h1>TODO list</h1>
      <Form setTasks={setTasks}/>
      <List tasks={tasks} setTasks={setTasks}/>
    </>
  )
}

export default App
