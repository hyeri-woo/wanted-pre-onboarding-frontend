import React from 'react';
import styled from 'styled-components';
import { ContainerStyle } from '../styles/CommonStyle';
import Button from '../components/Common/Button';
import { useNavigate } from 'react-router-dom';

const Container = styled(ContainerStyle)`
  padding: 30px;
  h1 {
    font-weight: bold;
    font-size: 3rem;
    text-align: center;
    margin-bottom: 12px;
  }
  p {
    margin-bottom: 23px;
    text-align: center;
  }
  button:nth-of-type(1) {
    margin-bottom: 12px;
  }
`;

export default function Home() {
  const navigate = useNavigate();
  return (
    <Container>
      <h1>wanted</h1>
      <p>원티드 todo를 더 즐겁고 편하게 이용하세요.</p>
      <Button text="로그인" onBtnClick={() => navigate('/signin')} />
      <Button text="회원가입" onBtnClick={() => navigate('/signup')} />
    </Container>
  );
}
