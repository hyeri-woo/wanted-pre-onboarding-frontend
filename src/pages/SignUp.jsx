import React, { useState } from 'react';
import { HeaderStyle, ContainerStyle } from '../styles/CommonStyle';
import Form from '../components/Form';
import { useNavigate } from 'react-router-dom';
import SignUpAPI from '../api/SignUpAPI';

export default function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await SignUpAPI(email, password);
    if (success) {
      alert(
        '회원가입에 성공하셨습니다! 서비스를 이용하기 위해 로그인해주세요.',
      );
      navigate('/signin');
    } else {
      alert('회원가입에 실패하였습니다. 다시 시도해주세요!');
    }
  };

  return (
    <ContainerStyle>
      <HeaderStyle>
        <h1>SIGN UP</h1>
      </HeaderStyle>
      <Form
        isJoin={true}
        btnText="회원가입"
        onSubmit={handleSubmit}
        setEmail={setEmail}
        setPassword={setPassword}
      />
    </ContainerStyle>
  );
}
