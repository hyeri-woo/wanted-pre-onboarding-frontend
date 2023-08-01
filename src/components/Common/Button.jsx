import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  width: 100%;
  border-radius: 15px;
  background: var(--color-white30);
  padding: 13px;
  &:hover {
    background: var(--color-white70);
    color: var(--color-blue);
  }
`;

export default function Button(props) {
  const { text, onBtnClick } = props;
  return <ButtonStyle onClick={onBtnClick}>{text}</ButtonStyle>;
}
