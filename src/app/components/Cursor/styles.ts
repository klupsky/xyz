import styled from 'styled-components'

export const CircleCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-color: var(--c-white);
  z-index: 5;
  height: 2px;
  width: 2px;
`
