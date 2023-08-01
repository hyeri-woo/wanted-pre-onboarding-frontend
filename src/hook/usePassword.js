import { useState } from 'react';
import { useDispatch } from 'react-redux';
import accountSlice from '../redux/accountSlice';

export default function usePassword() {
  const dispatch = useDispatch();
  const [warning, setWarning] = useState('');
  const [isValid, setIsValid] = useState(false);

  function handlePasswordChange(e) {
    dispatch(accountSlice.actions.setPassword(e.target.value));
    if (e.target.value.length < 8) {
      setWarning('비밀번호는 8자 이상이여야 합니다.');
      setIsValid(false);
    } else {
      setWarning('');
      setIsValid(true);
    }
  }

  return [handlePasswordChange, warning, isValid];
}
