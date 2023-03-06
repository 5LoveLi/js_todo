import React, { useState } from 'react';
import { TaskData } from '../type/Task.types';
// import { TaskList } from './TaskList';

interface IFormTaskProps {
  onCreate: (task: TaskData) => void;
}

export const FormTask = ({ onCreate }: IFormTaskProps) => {
  const [inputTask, setInputTask] = useState('');

  const createTask = (event: any) => {
    event.preventDefault();
    const task = {
      id: new Date().toString(),
      name: inputTask,
      status: false,
    };
    onCreate(task);
  }

  const updateInputValue = (evt: any) => {
    console.log(evt.target.value)
    setInputTask(evt.target.value);
  }

  return (
    <div>
      <form>
        <input type="text"
          value={inputTask}
          onChange={updateInputValue} />
        <input type='submit' value='Создать' onClick={createTask} />
      </form>
    </div>
  )
}