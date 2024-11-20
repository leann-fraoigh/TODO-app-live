import { SetStateAction } from "react";
import type { Task as TaskType } from "../interfaces";
import { Task } from "./Task";

interface Props {
  tasks: TaskType[]
  setTasks: React.Dispatch<SetStateAction<{ text: string; id: number; }[]>>
}


export function List ({ tasks, setTasks }: Props) {
  return (
    <ul className="todo-list">
      {tasks.length > 0 ? (
        tasks?.map((task, index) => (
          <Task key={index} task={task} setTasks={setTasks} />
        ))
      ) : (
        <p className="todo-list__message">No tasks to display. 😴</p>
      )}
    </ul>
  );
}