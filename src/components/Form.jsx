import React, { useState } from 'react';
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
  const { btnText, onSignUpSubmit } = props;
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPw, setIsValidPw] = useState(false);
  const [email, onEmailChange, emailWarning] = useEmail(setIsValidEmail);
  const [password, onPasswordChange, passwordWarning] =
    usePassword(setIsValidPw);

  return (
    <FormStyle onSumbit={onSignUpSubmit}>
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
        dataTestId="signup-button"
        disabled={!(isValidEmail && isValidPw)}
      />
    </FormStyle>
  );
}
