import React, { useState } from 'react';
import { HeaderStyle, ContainerStyle } from '../styles/CommonStyle';
import Form from '../components/Form';
import { useNavigate } from 'react-router-dom';
import SignInAPI from '../api/SignInAPI';

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      <HeaderStyle>
        <h1>SIGN IN</h1>
      </HeaderStyle>
      <Form
        isJoin={false}
        btnText="로그인"
        onSubmit={handleSubmit}
        setEmail={setEmail}
        setPassword={setPassword}
      />
    </ContainerStyle>
  );
}
