import React from 'react';
import styled from 'styled-components';
import Input from '../Common/Input';

const TodoFormStyle = styled.form`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 30px 30px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .input-wrapper {
    width: 90%;
  }
`;

const ButtonStyle = styled.button`
  padding: 10px 15px;
  border-radius: 15px;
  &:hover {
    background: var(--color-white20);
  }
`;

// inputId, labelText, warning, placeholder, dataTestId;

export default function TodoForm() {
  return (
    <TodoFormStyle>
      <div className="input-wrapper">
        <Input
          inputId="input-todoadd"
          labelText="일정을 추가해주세요"
          placeholder="To do"
          dataTestId="new-todo-input"
          warning=""
        />
      </div>
      <ButtonStyle type="submit" data-testid="new-todo-add-button">
        추가
      </ButtonStyle>
    </TodoFormStyle>
  );
}
