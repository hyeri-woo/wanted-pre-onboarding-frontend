import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListStyle = styled.ul`
  max-height: 500px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 30px;
`;

export default function TodoList() {
  return (
    <TodoListStyle>
      <TodoItem checked>todo1</TodoItem>
      <TodoItem checked>todo1</TodoItem>
      <TodoItem checked>todo1</TodoItem>
      <TodoItem checked>todo1</TodoItem>
      <TodoItem checked>todo1</TodoItem>
    </TodoListStyle>
  );
}
