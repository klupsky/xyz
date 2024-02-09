import { DEVICE } from '@/app/styles/base/breakpoints'
import styled, { css } from 'styled-components'
import { TWrapperProps } from './types'

export const Wrapper = styled.button<TWrapperProps>`
  position: absolute;
  overflow: hidden;
  width: var(--thumbnail-width-sm);
  height: var(--thumbnail-height-sm);
  border-radius: 10px;
  border: 1px solid var(--c-black);
  z-index: 0;

  ${(p) =>
    p.direction == 'Previous'
      ? css`
          bottom: var(--p-sm);
          left: var(--p-sm);
        `
      : css`
          top: var(--p-sm);
          right: var(--p-sm);
        `};

  ${DEVICE.laptopM} {
    width: var(--thumbnail-width-lg);
    height: var(--thumbnail-height-lg);
  }
`
