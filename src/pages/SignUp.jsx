import React from 'react';
import { H1Style, ContainerStyle } from '../styles/CommonStyle';
import Form from '../components/Form';

export default function SignUp() {
  return (
    <ContainerStyle>
      <H1Style>SIGN UP</H1Style>
      <Form btnText="회원가입" emailWarning="" pwWarning="" />
    </ContainerStyle>
  );
}