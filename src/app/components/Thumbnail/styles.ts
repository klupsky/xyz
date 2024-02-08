import styled, { css } from 'styled-components'
import { TWrapperProps } from './types'

export const Wrapper = styled.div<TWrapperProps>`
  position: absolute;
  overflow: hidden;
  aspect-ratio: 4/5;
  width: 248px;
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
