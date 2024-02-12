import { DEVICE } from '@/app/styles/base/breakpoints'
import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'
import { TWrapperProps } from './types'

export const Wrapper = styled(motion.button)<TWrapperProps>`
  position: absolute;
  overflow: hidden;
  width: var(--thumbnail-width-sm);
  height: var(--thumbnail-height-sm);
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

  ${DEVICE.laptopM} {
    width: var(--thumbnail-width-lg);
    height: var(--thumbnail-height-lg);
  }
`

export const ImageWrapper = styled(motion.img)`
  overflow: hidden;
  position: relative;
  height: 100%;
  object-fit: cover;
`
