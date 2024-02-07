import styled, { css } from 'styled-components'
import { TWrapperProps } from './types'

export const Wrapper = styled.div<TWrapperProps>`
  position: absolute;
  height: 40px;
  width: 40px;
  z-index: 1;
  cursor: pointer;

  ${({ direction }) =>
    direction === 'isPrev'
      ? css`
          top: var(--pd-sm);
          left: var(--pd-sm);
        `
      : css`
          bottom: var(--pd-sm);
          right: var(--pd-sm);
        `}
`
