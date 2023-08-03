import React from 'react';
import styled from 'styled-components';
import Button from './Common/Button';
import Input from './Common/Input';
import useEmail from '../hook/useEmail';
import usePassword from '../hook/usePassword';

const FormStyle = styled.form`
  padding: 30px;
  text-align: center;
  button {
    margin-top: 15px;
  }
`;

export default function Form(props) {
  const { isJoin, btnText, onSubmit, email, setEmail, password, setPassword } = props;
  const [onEmailChange, emailWarning, isValidEmail] = useEmail(setEmail);
  const [onPasswordChange, passwordWarning, isValidPw] =
    usePassword(setPassword);

  return (
    <FormStyle onSubmit={onSubmit}>
      <Input
        value={email}
        onChange={onEmailChange}
        type="email"
        id="input-email"
        placeholder="Email"
        labelText="이메일을 입력해주세요."
        dataTestId="email-input"
        warning={emailWarning}
      />
      <Input
        value={password}
        onChange={onPasswordChange}
        type="password"
        id="input-pw"
        placeholder="Password"
        labelText="비밀번호를 입력해주세요."
        dataTestId="password-input"
        warning={passwordWarning}
      />
      <Button
        type="submit"
        text={btnText}
        dataTestId={isJoin ? 'signup-button' : 'signin-button'}
        disabled={!(isValidEmail && isValidPw)}
      />
    </FormStyle>
  );
}
