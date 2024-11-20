import { ChangeEvent, SetStateAction } from 'react';
import type { Task } from '../interfaces';

interface Props {
  task: Task;
  setTasks: React.Dispatch<SetStateAction<Task[]>>
};

export function Task ({task, setTasks}: Props) {
  const handleButtonClick = () => {
    setTasks((prevTasks) => prevTasks.filter((item) => item.id !== task.id));
  };

  const handleInputChange = (event: ChangeEvent) => {
    const { checked } = event.target as HTMLInputElement;
    setTasks((prevTasks) => prevTasks.map((item) => item.id === task.id ? { ...item, isComplete: checked } : item));
  };

  return (
    <li className={`todo-list__task todo-list-task ${task.isComplete ? 'todo-list-task--checked' : ''}`}>
        <input type="checkbox" id={task.id} name="scales" checked={task.isComplete} onChange={handleInputChange} />
        <label htmlFor={task.id}>{task.text}</label>
      <button onClick={handleButtonClick} className='todo-list-task__delete-button'>
        <span className='sr-only'>Delete task</span>
      </button>
    </li>
  )
}