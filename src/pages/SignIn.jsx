import React from 'react';
import { H1Style, ContainerStyle } from '../styles/CommonStyle';
import Form from '../components/Form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SignInAPI from '../api/SignInAPI';

export default function SignIn() {
  const navigate = useNavigate();
  const email = useSelector((state) => state.account.email);
  const password = useSelector((state) => state.account.password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await SignInAPI(email, password);
    if (success) {
      alert('로그인에 성공했습니다. 서비스를 자유롭게 이용해주세요!');
      navigate('/todo');
    } else {
      alert('로그인에 실패하였습니다. 다시 시도해주세요!');
    }
  };
  return (
    <ContainerStyle>
      <H1Style>SIGN IN</H1Style>
      <Form btnText="로그인" onSubmit={handleSubmit} />
    </ContainerStyle>
  );
}
