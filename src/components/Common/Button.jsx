import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  width: ${props => props.width || '100%'};
  border-radius: 15px;
  background: var(--color-white30);
  padding: ${props => props.padding || '13px'};
  &:hover {
    background: var(--color-white70);
    color: var(--color-blue);
  }
`;

export default function Button(props) {
  const { type, text, onBtnClick, dataTestId, width, padding } = props;
  return (
    <ButtonStyle
      type={type ? type : 'button'}
      onClick={onBtnClick}
      data-testid={dataTestId}
      width={width}
      padding={padding}
    >
      {text}
    </ButtonStyle>
  );
}
