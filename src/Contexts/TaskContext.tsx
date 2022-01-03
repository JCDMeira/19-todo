import React, { createContext, useContext, useState } from 'react';

type TaskType = {
  task: string;
  isCompleted: string;
};

type PropsUserContext = {
  todos: TaskType[];
  setTodos: React.Dispatch<React.SetStateAction<TaskType[]>>;
};

const DEFAULT_VALUE = {
  todos: [
    {
      task: '',
      isCompleted: '',
    },
  ],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTodos: () => {},
};

const TaskContext = createContext<PropsUserContext>(DEFAULT_VALUE);

const TaskContextProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = useState(DEFAULT_VALUE.todos);

  return (
    <TaskContext.Provider value={{ todos, setTodos }}>
      {children}
    </TaskContext.Provider>
  );
};

const TaskConsumer = () => useContext(TaskContext);

export { TaskContext, TaskContextProvider, TaskConsumer };
