import React from 'react';
import { H1Style, ContainerStyle } from '../styles/CommonStyle';
import Form from '../components/Form';

export default function SignIn() {
  return (
    <ContainerStyle>
      <H1Style>SIGN IN</H1Style>
      <Form btnText="로그인" emailWarning="" pwWarning="" />
    </ContainerStyle>
  );
}
