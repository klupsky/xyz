import styled, { css } from 'styled-components'
import { TWrapperProps } from './types'

export const Wrapper = styled.div<TWrapperProps>`
  position: absolute;

  ${(p) =>
    p.direction == 'isPrev'
      ? css`
          top: 16px;
          left: 16px;
        `
      : css`
          bottom: 16px;
          right: 16px;
        `}
`
