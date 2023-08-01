import React from 'react';
import styled from 'styled-components';
import { ContainerStyle } from '../styles/CommonStyle';
import Button from '../components/Common/Button';
import Input from '../components/Common/Input';

const Container = styled(ContainerStyle)`
  h1 {
    font-weight: 400;
    text-align: center;
    width: 100%;
    padding: 15px 15px 13px;
    font-size: 1.5rem;
    background: var(--color-white20);
  }
  form {
    padding: 30px;
    text-align: center;
  }
  button {
    margin-top: 15px;
  }
`;

export default function SignUp() {
  return (
    <Container>
      <h1>SIGN UP</h1>
      <form>
        <Input
          type="email"
          id="input-email"
          placeholder="Email"
          labelText="아이디로 사용할 이메일을 입력해주세요."
          dataTestId="email-input"
          // warning="이메일!"
        />
        <Input
          type="password"
          id="input-pw"
          placeholder="Password"
          labelText="비밀번호를 입력해주세요."
          dataTestId="password-input"
          // warning="이메일!"
        />
        <Button type="submit" text="회원가입" dataTestId="signup-button" />
      </form>
    </Container>
  );
}
