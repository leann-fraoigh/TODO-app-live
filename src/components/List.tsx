import { SetStateAction } from "react";
import type { Task as TaskType } from "../interfaces";
import { Task } from "./Task";

interface Props {
  tasks: TaskType[]
  setTasks: React.Dispatch<SetStateAction<TaskType[]>>
}


export function List ({ tasks, setTasks }: Props) {
  return (
    <ul className="todo-list" role="list">
      {tasks.length > 0 ? (
        tasks?.map((task, index) => (
          <Task key={index} tasks={tasks} task={task} setTasks={setTasks} />
        ))
      ) : (
        <p className="todo-list__message">No tasks to display. 😴</p>
      )}
    </ul>
  );
}