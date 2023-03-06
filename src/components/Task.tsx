import { TaskData } from '../type/Task.types';
import './Task.css';

interface ITaskProps {
  task: TaskData,
  onChange: (task: TaskData) => void,
  onClick: (task: TaskData) => void,
}



export const Task = ({ task, onChange, onClick }: ITaskProps) => {
  const { id, name, status } = task;

  const toggleChecked = () => {
    onChange({
      ...task,
      status: !task.status
    })
  }

  const deleteTask = () => {
    onClick({
      ...task
    })
  }

  return (<>
    <div>
      <input type='checkbox' id={id} checked={status} onChange={toggleChecked} />{name}<button onClick={deleteTask} />
    </div>
  </>
  )
}