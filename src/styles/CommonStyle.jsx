import styled from 'styled-components';

const ContainerStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 450px;
  border-radius: 15px;
  border: 1px solid var(--color-white70);
  background: var(--color-white20);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;
`;

export { ContainerStyle };
