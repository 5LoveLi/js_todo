import React from 'react';
import { useState } from 'react';

import { Task } from './Task';

export function TaskList(props: any) {
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


  return (
    <div>
      {tasks.map(({ id, name, status }) => (<Task status={status} name={name} id={id} onChange={}/>))}
    </div>
  )
}