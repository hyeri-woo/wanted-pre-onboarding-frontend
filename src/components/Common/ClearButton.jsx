import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  padding: 10px 15px;
  border-radius: 15px;
  &:not(:disabled):hover,
  &.on {
    background: var(--color-white20);
  }
  &:disabled {
    cursor: initial;
  }
`;

export default function ClearButton(props) {
  const { type, text, onBtnClick, dataTestId, disabled, selected } = props;

  return (
    <ButtonStyle
      type={type ? type : 'button'}
      onClick={onBtnClick}
      data-testid={dataTestId}
      disabled={disabled}
      className={selected && 'on'}
    >
      {text}
    </ButtonStyle>
  );
}
