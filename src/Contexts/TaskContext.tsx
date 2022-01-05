import React, { createContext, useContext, useEffect, useState } from 'react';

type TaskType = {
  task: string;
  isCompleted: boolean;
};

type PropsTaskContext = {
  todos: TaskType[];
  // eslint-disable-next-line no-unused-vars
  addTodo: (newTodo: TaskType) => void;
  // eslint-disable-next-line no-unused-vars
  completeTodo: (e: TaskType) => void;
  // eslint-disable-next-line no-unused-vars
  removeTodo: (e: TaskType) => void;
};

const DEFAULT_VALUE = {
  todos: [
    {
      task: 'hello this is my todo App',
      isCompleted: false,
    },
  ],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  addTodo: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  completeTodo: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  removeTodo: () => {},
};

const TaskContext = createContext<PropsTaskContext>(DEFAULT_VALUE);

const TaskProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = useState(DEFAULT_VALUE.todos);

  const addTodo = (newTodo: TaskType) => {
    setTodos((todos) => [...todos, newTodo]);
    localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
  };

  const completeTodo = (e: TaskType) => {
    const todo = e;
    const restOfTodos = todos.map((value) => {
      if (value.task !== todo.task) {
        return value;
      } else {
        return value.isCompleted
          ? { task: value.task, isCompleted: false }
          : { task: value.task, isCompleted: true };
      }
    });
    setTodos(restOfTodos);
    localStorage.setItem('todos', JSON.stringify(restOfTodos));
  };

  const removeTodo = (e: TaskType) => {
    const todo = e;
    const restOfTodos = todos.filter((value) => {
      if (value.task !== todo.task) {
        return value;
      }
    });
    setTodos(restOfTodos);
    localStorage.setItem('todos', JSON.stringify(restOfTodos));
  };

  useEffect(() => {
    const hadTodos = localStorage.getItem('todos');
    if (hadTodos) {
      const localHistoric = JSON.parse(hadTodos);
      setTodos(localHistoric);
    }
  }, []);

  return (
    <TaskContext.Provider value={{ todos, addTodo, completeTodo, removeTodo }}>
      {children}
    </TaskContext.Provider>
  );
};

const TaskConsumer = (): PropsTaskContext => useContext(TaskContext);

export { TaskContext, TaskProvider, TaskConsumer };
