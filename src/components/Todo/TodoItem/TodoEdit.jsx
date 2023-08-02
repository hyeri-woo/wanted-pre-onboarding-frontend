import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../Common/Button';
import { UpdateTodoAPI } from '../../../api/TodoAPI';

const LabelStyle = styled.label`
  width: 80%;
  input[type='text'] {
    width: 80%;
    background: var(--color-white70);
    background: none;
    font-size: 1rem;
    border-bottom: 1px solid var(--color-white70);
  }
`;

export default function TodoEdit(props) {
  const { text, id, checked, setTodo, setMode, onCheckChange } = props;
  const token = localStorage.getItem('token');
  const [inputValue, setInputValue] = useState(text);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleEditClick = async (e) => {
    if (window.confirm('수정하시겠습니까?')) {
      const data = await UpdateTodoAPI(token, id, checked, inputValue);
      setTodo((prev) => {
        const arr = [...prev];
        arr[arr.findIndex((item) => item.id == id)].todo = inputValue;
        return arr;
      });
      setMode('view');
    }
  };

  const handleCancelClick = async (e) => {
    setMode('view');
  };

  return (
    <>
      <LabelStyle>
        <input type="checkbox" checked={checked} onChange={onCheckChange} />
        <input
          type="text"
          value={inputValue}
          data-testid="modify-input"
          onChange={handleInputChange}
        />
      </LabelStyle>
      <span className="btn-wrapper">
        <Button
          type="submit"
          text="제출"
          width="60px"
          padding="5px"
          dataTestId="submit-button"
          onBtnClick={handleEditClick}
        />
        <Button
          text="취소"
          width="60px"
          padding="5px"
          dataTestId="cancle-button"
          onBtnClick={handleCancelClick}
        />
      </span>
    </>
  );
}
