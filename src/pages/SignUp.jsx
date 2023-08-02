import React from 'react';
import { H1Style, ContainerStyle } from '../styles/CommonStyle';
import Form from '../components/Form';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import accountSlice from '../redux/accountSlice';
import SignUpAPI from '../api/SignUpAPI'

export default function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useSelector((state) => state.account.email);
  const password = useSelector((state) => state.account.password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(accountSlice.actions.reset());
    const success = await SignUpAPI(email, password);
    if(success) {
      alert("회원가입에 성공하셨습니다! 서비스를 이용하기 위해 로그인해주세요.");
      navigate('/signin');
    } else {
      alert("회원가입에 실패하였습니다. 다시 시도해주세요!");
    }
  }

  return (
    <ContainerStyle>
      <H1Style>SIGN UP</H1Style>
      <Form btnText="회원가입" onSubmit={handleSubmit} />
    </ContainerStyle>
  );
}
