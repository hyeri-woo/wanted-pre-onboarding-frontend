import React from 'react';
import Button from '../../Common/Button';
import { DeleteTodoAPI } from '../../../api/TodoAPI';

export default function TodoView(props) {
  const { text, id, checked, setTodo, setMode, onCheckChange } = props;
  const token = localStorage.getItem('token');

  const handleEditClick = () => {
    setMode('edit');
  };

  const handleDeleteClick = async (e) => {
    if (window.confirm('삭제하시겠습니까?')) {
      const success = await DeleteTodoAPI(token, id);
      if (success) {
        setTodo((prev) => prev.filter((item) => item.id !== id));
      }
    }
  };

  return (
    <>
      <label>
        <input type="checkbox" checked={checked} onChange={onCheckChange} />
        <span>{text}</span>
      </label>
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
