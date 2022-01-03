import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TaskProvider } from './Contexts/TaskContext';

ReactDOM.render(
  <React.StrictMode>
    <TaskProvider>
      <App />
    </TaskProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
