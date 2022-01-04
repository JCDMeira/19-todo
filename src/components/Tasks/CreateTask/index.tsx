/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { TaskConsumer } from '../../../Contexts/TaskContext';
import * as S from './styled';

interface formValuesProps {
  myTodo?: string;
}

function CreateTask(): JSX.Element {
  const { todos, setTodos } = TaskConsumer();

  const [formValues, setFormValues] = useState<formValuesProps>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('target');
    const resultTodo = { task: 'ola', isCompleted: false };

    if (formValues) {
      setFormValues({});
      setTodos([...resultTodo]);
    }
  };

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  return (
    <S.Wrapper action="#" onSubmit={(e) => handleSubmit(e)}>
      <S.Button />
      <S.Create
        placeholder="Create a new todo..."
        type="text"
        name="myTodo"
        onChange={(e) => handleChange(e)}
        value={formValues.myTodo || ''}
      />
    </S.Wrapper>
  );
}

export default CreateTask;
