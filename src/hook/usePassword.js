import { useState } from 'react';

export default function usePassword(setIsValid) {
  const [password, setPassword] = useState('');
  const [warning, setWarning] = useState('');

  function handlePasswordChange(e) {
    setPassword(e.target.value);
    if (e.target.value.length < 8) {
      setWarning('비밀번호는 8자 이상이여야 합니다.');
      setIsValid(false);
    } else {
      setWarning('');
      setIsValid(true);
    }
  }

  return [password, handlePasswordChange, warning];
}
