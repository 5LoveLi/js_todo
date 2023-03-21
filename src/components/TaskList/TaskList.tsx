import { useEffect, useState } from 'react';
import { TaskData } from '../../type/Task.types';
import { Footer } from '../Footer/Footer';
import { FormTask } from '../Form/Form';
import { Task } from '../Task/Task';




export const TaskList = (props: any) => {
  const [tasks, setTasks] = useState([
    {
      id: 'alksdjf',
      name: 'work',
      status: true,
    },
    {
      id: 'asdf',
      name: 'hi',
      status: false,
    }
  ])
  const [viewTask, setViewTask] = useState(tasks);
  const [filter, setFilter] = useState<string>()

  const createTask = (task: TaskData) => {
    setTasks(previousState => ([...previousState, task]))
  }

  const updateTask = (task: TaskData) => {
    setTasks(previousState => {
      return previousState.map(t => (t.id === task.id ? task : t))
    }
    )
  }

  const deleteTask = (task: TaskData) => {
    setTasks(previousState => {
      return previousState.filter(t => t.id !== task.id)
    })
  }


  useEffect(() => {
    if (filter === 'all') {
      setViewTask(tasks)
    } else if (filter === 'completed') {
      setViewTask(tasks.filter(t => t.status === true))
    } else if (filter === 'active') {
      setViewTask(tasks.filter(t => t.status === false))
    } else {
      setViewTask(tasks)
    }
  }, [tasks, filter])


  return (
    <div>
      <FormTask onCreate={createTask} />
      {viewTask.map(t => <Task task={t} onChange={updateTask} key={t.id} onClick={deleteTask} />)}
      <Footer onFilterTasks={setFilter} />
    </div>
  )
}