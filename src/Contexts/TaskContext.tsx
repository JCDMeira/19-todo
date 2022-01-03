import React, { createContext, useContext, useState } from 'react';

type TaskType = {
  task: string;
  isCompleted: boolean;
};

type PropsTaskContext = {
  todos: TaskType[];
  setTodos: React.Dispatch<React.SetStateAction<TaskType[]>>;
};

const DEFAULT_VALUE = {
  todos: [
    {
      task: 'hello this is my todo App',
      isCompleted: true,
    },
  ],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTodos: () => {},
};

const TaskContext = createContext<PropsTaskContext>(DEFAULT_VALUE);

const TaskProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = useState(DEFAULT_VALUE.todos);

  return (
    <TaskContext.Provider value={{ todos, setTodos }}>
      {children}
    </TaskContext.Provider>
  );
};

const TaskConsumer = (): PropsTaskContext => useContext(TaskContext);

export { TaskContext, TaskProvider, TaskConsumer };
