import React, { useState } from 'react';
import styled from 'styled-components';
import TodoView from './TodoView';
import TodoEdit from './TodoEdit';
import { UpdateTodoAPI } from '../../../api/TodoAPI';

const TodoItemStyle = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  word-break: break-all;
  input {
    margin-right: 10px;
  }
  .btn-wrapper {
    flex-shrink: 0;
    margin-left: 10px;
  }
  .btn-wrapper button {
    margin-left: 5px;
  }
`;

export default function TodoItem(props) {
  const { todo, id, isCompleted, setTodo } = props;
  const [mode, setMode] = useState('view');
  const [isCheck, setIsCheck] = useState(isCompleted);

  const onCheckChange = async (e) => {
    setIsCheck(e.target.checked);
    const data = await UpdateTodoAPI(
      localStorage.getItem('token'),
      id,
      e.target.checked,
      e.target.nextElementSibling.innerText,
    );
  };

  return (
    <TodoItemStyle>
      {mode === 'view' ? (
        <TodoView
          text={todo}
          id={id}
          checked={isCheck}
          setTodo={setTodo}
          setMode={setMode}
          onCheckChange={onCheckChange}
        />
      ) : (
        <TodoEdit
          text={todo}
          id={id}
          checked={isCheck}
          setTodo={setTodo}
          setMode={setMode}
          onCheckChange={onCheckChange}
        />
      )}
    </TodoItemStyle>
  );
}
