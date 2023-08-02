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
  const { btnText, onSubmit } = props;
  const [onEmailChange, emailWarning, isValidEmail] = useEmail();
  const [onPasswordChange, passwordWarning, isValidPw] = usePassword();

  return (
    <FormStyle onSubmit={onSubmit}>
      <Input
        onChange={onEmailChange}
        type="email"
        id="input-email"
        placeholder="Email"
        labelText="이메일을 입력해주세요."
        dataTestId="email-input"
        warning={emailWarning}
      />
      <Input
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
