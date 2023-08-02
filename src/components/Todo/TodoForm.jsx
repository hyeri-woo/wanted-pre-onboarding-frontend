import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../Common/Input';
import ClearButton from '../Common/ClearButton';
import { CreateTodoAPI } from '../../api/TodoAPI';

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
  button {
    flex-shrink: 0;
  }
`;

export default function TodoForm(props) {
  const { setTodo } = props;
  const [isValid, setIsValid] = useState(false);
  const [item, setItem] = useState('');
  const [warning, setWarning] = useState('');

  const handleChange = (e) => {
    setItem(e.target.value);
    if (e.target.value === '') {
      setWarning('빈 값을 일정으로 추가할 수 없습니다.');
      setIsValid(false);
    } else {
      setWarning('');
      setIsValid(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(item);
    const data = await CreateTodoAPI(localStorage.getItem('token'), item);
    console.log(data);
    if (data) {
      setItem('');
      setIsValid(false);
      setTodo((prev) => [...prev, data]);
    }
  };

  return (
    <TodoFormStyle>
      <div className="input-wrapper">
        <Input
          value={item}
          onChange={handleChange}
          inputId="input-todoadd"
          labelText="일정을 추가해주세요"
          placeholder="To do"
          dataTestId="new-todo-input"
          warning={warning}
        />
      </div>
      <ClearButton
        text="추가"
        type="submit"
        onBtnClick={handleSubmit}
        dataTestId="new-todo-add-button"
        disabled={!isValid}
      />
    </TodoFormStyle>
  );
}
