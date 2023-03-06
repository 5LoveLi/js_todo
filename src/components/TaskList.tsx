import { useState } from 'react';
import { TaskData } from '../type/Task.types';
import { Footer } from './Footer';
import { FormTask } from './Form';

import { Task } from './Task';


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

  const filter = (status: boolean) => {
    console.log('hi')
    setTasks(previousState => {
      return previousState.filter(t => t.status === status)
    })
  }

  return (
    <div>
      <FormTask onCreate={createTask} />
      {tasks.map((t) => (<Task task={t} onChange={updateTask} key={t.id} onClick={deleteTask} />))}
      <Footer onClick={filter} />
    </div>
  )
}