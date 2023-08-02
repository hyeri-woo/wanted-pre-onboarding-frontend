import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { H1Style, ContainerStyle } from '../styles/CommonStyle';
import TodoList from '../components/Todo/TodoList';
import TodoForm from '../components/Todo/TodoForm';
import TodoNav from '../components/Todo/TodoNav';
import { GetTodoAPI } from '../api/TodoAPI';

const Container = styled(ContainerStyle)`
  position: relative;
  max-width: 600px;
  padding-bottom: 80px;
  min-height: 315px;
`;

export default function Todo() {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await GetTodoAPI(localStorage.getItem('token'));
      setTodo(data);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <H1Style>TO DO</H1Style>
      <TodoNav />
      <TodoList todo={todo} setTodo={setTodo} />
      <TodoForm setTodo={setTodo} />
    </Container>
  );
}
