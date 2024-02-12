import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'
import { DEVICE } from '../../styles/base/breakpoints'
import { TWrapperProps } from './types'

export const Wrapper = styled(motion.button)<TWrapperProps>`
  position: absolute;
  overflow: hidden;
  background: transparent;
  width: var(--thumbnail-width);
  height: var(--thumbnail-height);
  border-radius: 10px;
  border: 1px solid var(--c-black);
  z-index: 2;
  padding: 0;

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
`

export const ImageWrapper = styled(motion.img)`
  overflow: hidden;
  position: relative;
  height: 100%;
  object-fit: cover;
`
