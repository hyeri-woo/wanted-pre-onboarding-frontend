import React from 'react';
import Button from '../../Common/Button';
import { CheckBoxStyle } from '../../../styles/CommonStyle';
import { DeleteTodoAPI } from '../../../api/TodoAPI';

export default function TodoView(props) {
  const { text, id, checked, setTodo, setMode, onCheckChange } = props;

  const handleEditClick = () => {
    setMode('edit');
  };

  const handleDeleteClick = async (e) => {
    const success = await DeleteTodoAPI(id);
    if (success) {
      setTodo((prev) => prev.filter((item) => item.id !== id));
    }
  };

  return (
    <>
      <CheckBoxStyle checked={checked}>
        <input type="checkbox" checked={checked} onChange={onCheckChange} />
        <span>{text}</span>
      </CheckBoxStyle>
      <span className="btn-wrapper">
        <Button
          text="수정"
          btnwidth="60px"
          btnpadding="5px"
          dataTestId="modify-button"
          onBtnClick={handleEditClick}
        />
        <Button
          text="삭제"
          btnwidth="60px"
          btnpadding="5px"
          dataTestId="delete-button"
          onBtnClick={handleDeleteClick}
        />
      </span>
    </>
  );
}
