import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  padding: 10px 15px;
  border-radius: 15px;
  &:not(:disabled):hover {
    background: var(--color-white20);
  }
  &:disabled {
    cursor: initial;
  } 
`;

export default function ClearButton(props) {
  const { type, text, onBtnClick, dataTestId, width, padding, disabled } = props;
  
  return (
    <ButtonStyle
      type={type ? type : 'button'}
      onClick={onBtnClick}
      data-testid={dataTestId}
      width={width}
      padding={padding}
      disabled={disabled}
    >
      {text}
    </ButtonStyle>
  );
}
