import React from 'react';
import styled from 'styled-components';
import Button from './Common/Button';
import Input from './Common/Input';

const FormStyle = styled.form`
  padding: 30px;
  text-align: center;
  button {
    margin-top: 15px;
  }
`;

export default function Form(props) {
  const { btnText, emailWarning, pwWarning } = props;
  return (
    <FormStyle>
      <Input
        type="email"
        id="input-email"
        placeholder="Email"
        labelText="이메일을 입력해주세요."
        dataTestId="email-input"
        warning={emailWarning}
      />
      <Input
        type="password"
        id="input-pw"
        placeholder="Password"
        labelText="비밀번호를 입력해주세요."
        dataTestId="password-input"
        warning={pwWarning}
      />
      <Button type="submit" text={btnText} dataTestId="signup-button" />
    </FormStyle>
  );
}
