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
  completeTodo: (e: React.MouseEvent<HTMLButtonElement>) => void;
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
};

const TaskContext = createContext<PropsTaskContext>(DEFAULT_VALUE);

const TaskProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = useState(DEFAULT_VALUE.todos);

  const addTodo = (newTodo: TaskType) => {
    setTodos((todos) => [...todos, newTodo]);
    localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
  };

  const completeTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
    const todo = (e.target as HTMLInputElement).value;
    console.log('todo', todo);
    const restOfTodos = todos.map((value) => {
      if (value.task !== todo) {
        return value;
      } else {
        return { ...value, isCompleted: true };
      }
    });
    console.log('rest', restOfTodos);
    setTodos(restOfTodos);
  };

  // const removeTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   const todo = (e.target as HTMLInputElement).value;
  //   console.log('todo', todo);
  //   // const restOfTodos = todos.map((value) => {
  //   //   if (value.task !== todo) {
  //   //     return value;
  //   //   }
  //   // });
  //   // console.log(restOfTodos);
  // };

  useEffect(() => {
    const hadTodos = localStorage.getItem('todos');
    if (hadTodos) {
      const localHistoric = JSON.parse(hadTodos);
      setTodos(localHistoric);
    }
  }, []);

  return (
    <TaskContext.Provider value={{ todos, addTodo, completeTodo }}>
      {children}
    </TaskContext.Provider>
  );
};

const TaskConsumer = (): PropsTaskContext => useContext(TaskContext);

export { TaskContext, TaskProvider, TaskConsumer };
