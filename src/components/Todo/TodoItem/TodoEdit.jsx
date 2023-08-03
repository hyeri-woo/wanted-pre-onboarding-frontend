import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Button from '../../Common/Button';
import { CheckBoxStyle } from '../../../styles/CommonStyle';
import { UpdateTodoAPI } from '../../../api/TodoAPI';

const FormStyle = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LabelStyle = styled(CheckBoxStyle)`
  input[type='text'] {
    width: 100%;
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
  const editRef = useRef(null);

  useEffect(() => {
    document.addEventListener('mousedown', (e) => {
      if (editRef.current && !editRef.current.contains(e.target)) {
        setMode('view');
      }
    });
  }, [editRef]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleEditClick = async (e) => {
    e.preventDefault();
    if (window.confirm('수정하시겠습니까?')) {
      const data = await UpdateTodoAPI(token, id, checked, inputValue);
      setTodo((prev) => {
        const arr = [...prev];
        arr[arr.findIndex((item) => item.id === id)].todo = data.todo;
        return arr;
      });
      setMode('view');
    }
  };

  const handleCancelClick = async (e) => {
    setMode('view');
  };

  return (
    <FormStyle ref={editRef}>
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
          btnwidth="60px"
          btnpadding="5px"
          dataTestId="submit-button"
          onBtnClick={handleEditClick}
        />
        <Button
          text="취소"
          btnwidth="60px"
          btnpadding="5px"
          dataTestId="cancel-button"
          onBtnClick={handleCancelClick}
        />
      </span>
    </FormStyle>
  );
}
