# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

This is the front-end mentor's nineteen challenge. The challenge is to build the "Todo App" and make it as close to the design as possible. Building the desing with whatever you want to finish, any language, framework or tools.

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

## Screenshot

### Mobile design

<p  align="center">
  <img width="300px" src="./presentation/mobile.png" align="center"></img>
</p>
<p  align="center">
  <img width="300px" src="./presentation/mobile1.png" align="center"></img>
</p>

### Tablets design

<p  align="center"><img width="420px"  src="./presentation/i-pad.png" align="center"></img></p>
<p  align="center"><img width="420px"  src="./presentation/i-pad1.png" align="center"></img></p>

### Desktop design

<p  align="center"><img width="720px" src="./presentation/desktop.png" align="center"></img></p>
<p  align="center"><img width="720px" src="./presentation/desktop1.png" align="center"></img></p>

### result of my work

<p  align="center"><img width="1080px" src="./presentation/design-x-myWork.gif" align="center"></img></p>

### Links

- Solution URL: [My solution for this challenge](https://www.frontendmentor.io/solutions/todo-app-with-react-ts-and-styledcomponents-OG2vDyG-C)
- Live Site URL: [check the result](https://jcdmeira-todo.netlify.app)
- My figma design: [Figma](https://www.figma.com/file/rTGUE7e5Te4e4QYPkPt3JU/19-todo?node-id=0%3A1)

## My process

### Built with

- Mobile-first workflow
- typeScript
- [React](https://reactjs.org/) - JS library
- [Styled components](https://styled-components.com) - CSS in js with stiled components

### What I learned

Criação de context usando typeScript

```tsx
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
  // eslint-disable-next-line no-unused-vars
  clearCompleted: () => void;
  tagFilter: string;
  // eslint-disable-next-line no-unused-vars
  setTagFilter: (e: string) => void;
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
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  clearCompleted: () => {},
  tagFilter: 'all',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTagFilter: () => {},
};

const TaskContext = createContext<PropsTaskContext>(DEFAULT_VALUE);

const TaskProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = useState(DEFAULT_VALUE.todos);
  const [tagFilter, setTagFilter] = useState('all');

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

  const clearCompleted = () => {
    const restOfTodos = todos.filter((value) => {
      if (value.isCompleted === false) {
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
    <TaskContext.Provider
      value={{
        todos,
        addTodo,
        completeTodo,
        removeTodo,
        clearCompleted,
        tagFilter,
        setTagFilter,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

const TaskConsumer = (): PropsTaskContext => useContext(TaskContext);

export { TaskContext, TaskProvider, TaskConsumer };
```

Criação de um hook personalizado

```tsx
import { useState } from 'react';

export const useTheme = (): [string, () => void] => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  const saveSetTheme = (theme: string) => {
    localStorage.setItem('theme', theme);
    setTheme(theme);
  };

  const toggleTheme = (): void => {
    theme === 'light' ? saveSetTheme('dark') : saveSetTheme('light');
  };

  return [theme, toggleTheme];
};
```

### Useful resources

- [react tutorial](https://pt-br.reactjs.org/tutorial/tutorial.html) - This helped me structure the components and build the proposed page.
- [my figma design](https://www.figma.com/file/rTGUE7e5Te4e4QYPkPt3JU/19-todo?node-id=0%3A1) - My figma design for help anyone who wants to build this challenge.
- [CSS units conversor - px to VH/VW/REM](https://it-news.pw/pxtovh/) - CSS units conversor .
- [Converting Colors](https://convertingcolors.com) - HSL for all color systems.

## Author

- Personal Page - [Jean Carlos De Meira](https://jcdmeira.github.io)
- Frontend Mentor - [@JCDMeira](https://www.frontendmentor.io/profile/JCDMeira)
- Instagram - [@jean.meira10](https://www.instagram.com/jean.meira10/)
- GitHub - [JCDMeira](https://github.com/JCDMeira)
