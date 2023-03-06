import React from 'react';
import './App.css';

import { FormTask } from './components/Form';
import { TaskList } from './components/TaskList';

function App() {
  return (
    <div className="App">
      {/* <FormTask /> */}
      <TaskList />
    </div>
  );
}

export default App;
