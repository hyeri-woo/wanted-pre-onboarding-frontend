import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { HeaderStyle, ContainerStyle } from '../styles/CommonStyle';
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
  const [filter, setFilter] = useState('전체');
  const [filterTodo, setFilterTodo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetTodoAPI();
      setTodo(data);
      setFilterTodo(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (filter === '전체') {
      setFilterTodo(todo);
    } else if (filter === '완료') {
      setFilterTodo(todo.filter((item) => item.isCompleted));
    } else if (filter === '미완') {
      setFilterTodo(todo.filter((item) => !item.isCompleted));
    }
  }, [filter, todo]);

  return (
    <Container>
      <HeaderStyle>
        <h1>TO DO</h1>
      </HeaderStyle>
      <TodoNav filter={filter} setFilter={setFilter} />
      <TodoList todo={filterTodo} setTodo={setTodo} />
      <TodoForm setTodo={setTodo} />
    </Container>
  );
}
