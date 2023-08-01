import React from 'react';
import styled from 'styled-components';
import { H1Style, ContainerStyle } from '../styles/CommonStyle';
import TodoList from '../components/Todo/TodoList';
import TodoForm from '../components/Todo/TodoForm';

const Container = styled(ContainerStyle)`
  position: relative;
  max-width: 600px;
  padding-bottom: 80px;
`;

export default function Todo() {
  return (
    <Container>
      <H1Style>TO DO</H1Style>
      <TodoList />
      <TodoForm />
    </Container>
  );
}
