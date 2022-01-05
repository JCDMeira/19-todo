import React, { createContext, useContext, useState } from 'react';

type TaskType = {
  task: string;
  isCompleted: boolean;
};

type PropsTaskContext = {
  todos: TaskType[];
  // eslint-disable-next-line no-unused-vars
  addTodo: (newTodo: TaskType) => void;
};
// type PropsTaskContext = {
//   todos: TaskType[];
//   setTodos: React.Dispatch<React.SetStateAction<TaskType[]>>;
// };

const DEFAULT_VALUE = {
  todos: [
    {
      task: 'hello this is my todo App',
      isCompleted: true,
    },
  ],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  addTodo: () => {},
};

const TaskContext = createContext<PropsTaskContext>(DEFAULT_VALUE);

const TaskProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = useState(DEFAULT_VALUE.todos);

  const addTodo = (newTodo: TaskType) => {
    setTodos((todos) => [...todos, newTodo]);
  };

  return (
    <TaskContext.Provider value={{ todos, addTodo }}>
      {children}
    </TaskContext.Provider>
  );
};

const TaskConsumer = (): PropsTaskContext => useContext(TaskContext);

export { TaskContext, TaskProvider, TaskConsumer };
