import React, { createContext, useContext, useEffect, useState } from 'react';

type TaskType = {
  task: string;
  isCompleted: boolean;
};

type PropsTaskContext = {
  todos: TaskType[];
  // eslint-disable-next-line no-unused-vars
  addTodo: (newTodo: TaskType) => void;
};

// @ salvar localStorage
// const localHistoric = JSON.parse(localStorage.getItem('historic')) || [];

// localStorage.setItem(
//   'historic',
//   JSON.stringify([...localHistoric, support[0]]),
// );

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
    localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
  };

  useEffect(() => {
    const hadTodos = localStorage.getItem('todos');
    if (hadTodos) {
      const localHistoric = JSON.parse(hadTodos);
      setTodos(localHistoric);
    }
  }, []);

  return (
    <TaskContext.Provider value={{ todos, addTodo }}>
      {children}
    </TaskContext.Provider>
  );
};

const TaskConsumer = (): PropsTaskContext => useContext(TaskContext);

export { TaskContext, TaskProvider, TaskConsumer };
