import { DEVICE } from '@/app/styles/base/breakpoints'
import styled, { css } from 'styled-components'
import { TWrapperProps } from './types'

export const Wrapper = styled.div<TWrapperProps>`
  position: absolute;
  overflow: hidden;
  width: var(--thumbnail-width-m);
  height: var(--thumbnail-height-m);
  border-radius: 10px;
  border: 1px solid var(--c-black);
  z-index: 2;

  ${(p) =>
    p.direction == 'isPrev'
      ? css`
          bottom: var(--p-sm);
          left: var(--p-sm);
        `
      : css`
          top: var(--p-sm);
          right: var(--p-sm);
        `};

  ${DEVICE.tablet} {
    width: var(--thumbnail-width-t);
    height: var(--thumbnail-height-t);
  }
`
