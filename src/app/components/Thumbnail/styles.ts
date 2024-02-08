import styled, { css } from 'styled-components'
import { TWrapperProps } from './types'

export const Wrapper = styled.div<TWrapperProps>`
  position: absolute;
  overflow: hidden;

  width: 248px;
  height: 330px;
  border-radius: 10px;
  border: 1px solid var(--c-black);
  z-index: 2;

  ${(p) =>
    p.direction == 'isPrev'
      ? css`
          bottom: 16px;
          left: 16px;
        `
      : css`
          top: 16px;
          right: 16px;
        `};
`
