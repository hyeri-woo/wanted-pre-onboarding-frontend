import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListStyle = styled.ul`
  max-height: 500px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 20px 30px;
  clear: both;
  p {
    width: 100%;
    text-align: center;
    padding: 30px;
  }
`;

export default function TodoList(props) {
  const { todo, setTodo } = props;
  return (
    <TodoListStyle>
      {todo.length === 0 ? (
        <p>일정이 없습니다.</p>
      ) : (
        todo.map((item) => (
          <TodoItem id={item.id} checked={item.isCompleted} setTodo={setTodo}>
            {item.todo}
          </TodoItem>
        ))
      )}
    </TodoListStyle>
  );
}
