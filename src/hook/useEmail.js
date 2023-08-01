import { useState } from 'react';

export default function useEmail(setIsValid) {
  const [email, setEmail] = useState('');
  const [warning, setWarning] = useState('');

  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]*\.[A-Za-z]{2,3}$/;

  function handleEmailChange(e) {
    setEmail(e.target.value);
    if (e.target.value.match(emailRegEx) === null) {
      setWarning('이메일 형식이 맞지 않습니다.');
      setIsValid(false);
    } else {
      setWarning('');
      setIsValid(true);
    }
  }

  return [email, handleEmailChange, warning];
}
