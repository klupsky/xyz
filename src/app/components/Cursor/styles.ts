import { DEVICE } from '@/app/styles/base/breakpoints'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: none;

  ${DEVICE.tablet} {
    display: block;
  }
`

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
