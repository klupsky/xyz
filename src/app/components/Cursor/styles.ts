import styled from 'styled-components'

export const Position = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
  pointer-events: none;
`

export const CircleCenter = styled(Position)`
  transform: translate(calc(var(--x) - 50%), calc(var(--y) - 50%));
`

export const CircleWrapper = styled(Position)`
  transform: translate(calc(var(--x) - 50%), calc(var(--y) - 50%))
    rotateZ(-90deg);
`
