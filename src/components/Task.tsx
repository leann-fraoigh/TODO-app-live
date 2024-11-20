import { SetStateAction } from 'react';
import type { Task } from '../interfaces';

interface Props {
  task: Task;
  setTasks: React.Dispatch<SetStateAction<{ text: string; id: number; }[]>>
};

export function Task ({task, setTasks}: Props) {
  const handleClick = () => {
    setTasks((prevTasks) => prevTasks.filter((item) => item.id !== task.id));
  };

  return (
    <li className="todo-list__task todo-list-task">{task.text}
      <button onClick={handleClick} className='todo-list-task__delete-button'>
        <span className='sr-only'>Delete task</span>
      </button>
    </li>
  )
}