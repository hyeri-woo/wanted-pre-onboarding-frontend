import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  border-radius: 15px;
  background: var(--color-white30);
  &:not(:disabled):hover {
    background: var(--color-white70);
    color: var(--color-blue);
  }
  &:disabled {
    cursor: initial;
  }
`;

export default function Button(props) {
  const { type, text, onBtnClick, dataTestId, btnwidth, btnpadding, disabled } =
    props;

  const styleChange = {
    width: btnwidth || '100%',
    padding: btnpadding || '13px',
  };

  return (
    <ButtonStyle
      type={type ? type : 'button'}
      onClick={onBtnClick}
      data-testid={dataTestId}
      style={styleChange}
      disabled={disabled}
    >
      {text}
    </ButtonStyle>
  );
}
