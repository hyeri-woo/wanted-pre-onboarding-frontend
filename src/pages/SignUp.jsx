import React, { useState } from 'react';
import { H1Style, ContainerStyle } from '../styles/CommonStyle';
import Form from '../components/Form';
import { useSelector } from 'react-redux/es/hooks/useSelector';

export default function SignUp() {
  const email = useSelector((state) => state.account.email);
  const password = useSelector((state) => state.account.password);

  console.log(email, password);

  return (
    <ContainerStyle>
      <H1Style>SIGN UP</H1Style>
      <Form btnText="회원가입" onSubmit="" />
    </ContainerStyle>
  );
}
