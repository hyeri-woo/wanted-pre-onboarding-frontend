import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../Common/Button';
import { UpdateTodoAPI } from '../../api/TodoAPI';

const TodoItemStyle = styled.li`
  display: flex;
  justify-content: space-between;
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
  const { id, checked } = props;
  const [isCheck, setIsCheck] = useState(checked);

  const handleCheckChange = async (e) => {
    setIsCheck(e.target.checked);
    const data = await UpdateTodoAPI(
      localStorage.getItem('token'),
      id,
      e.target.checked,
      e.target.nextElementSibling.innerText,
    );
  };

  return (
    <TodoItemStyle id={id}>
      <label>
        <input type="checkbox" checked={isCheck} onChange={handleCheckChange} />
        <span>{props.children}</span>
      </label>
      <div className="btn-wrapper">
        <Button
          text="수정"
          width="60px"
          padding="5px"
          dataTestId="modify-button"
        />
        <Button
          text="삭제"
          width="60px"
          padding="5px"
          dataTestId="delete-button"
        />
      </div>
    </TodoItemStyle>
  );
}
