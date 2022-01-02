import React, { createContext, useContext, useState } from 'react';

// // # tipando os dados
// interface TodoTask {
//   task: string;
//   isCompleted: boolean;
// }

// // # tipadno o contexto
// type ContextType = {
//   todos: TodoTask;
//   setTodos: React.Dispatch<React.SetStateAction<TodoTask>>;
// };

// // # valor inicial
// const defaultValue = {
//   todos: {
//     task: 'string',
//     isCompleted: false,
//   },
//   setTodos: () => {},
// };

// const TaskContext = createContext<ContextType>(defaultValue.todos);

// const TaskProvide: React.FC = ({ children }) => {
//   const [todos, setTodos] = useState<TodoTask[]>([
//     {
//       task: 'Complete online JavaScript course',
//       isCompleted: true,
//     },
//     {
//       task: 'Jog around the park 3x',
//       isCompleted: false,
//     },
//   ]);

//   return (
//     <TaskContext.Provider>
//       {children}
//     </TaskProvider.Provider>
//   )
// };

// const TaskConsumer = () => useContext(TaskContext);

// export { TaskContext, TaskProvide, TaskConsumer };

type UserType = {
  name: string;
  lastName: string;
  email: string;
};

type PropsUserContext = {
  state: UserType;
  setState: React.Dispatch<React.SetStateAction<UserType>>;
};

const DEFAULT_VALUE = {
  state: {
    name: '',
    lastName: '',
    email: '',
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setState: () => {},
};

const UserContext = createContext<PropsUserContext>(DEFAULT_VALUE);
const Provider = UserContext.Provider;

const UserContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  return <Provider value={{ state, setState }}>{children}</Provider>;
};

const UserConsumer = () => useContext(UserContext);

export { UserContext, UserContextProvider, UserConsumer };
