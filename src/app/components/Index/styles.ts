import { motion } from 'framer-motion'
import styled from 'styled-components'
import { DEVICE } from '../../styles/base/breakpoints'
import { TIndexDotProps } from './types'

export const Wrapper = styled(motion.div)`
  width: fit-content;
  display: flex;
  align-items: center;
  color: var(--c-white);
  gap: 22px;
  position: absolute;
  z-index: 3;
  left: 50%;
  top: 90%;
  transform: translate(-50%, -50%);
  ${DEVICE.tablet} {
    top: 76%;
  }
`

export const IndexDotsWrapper = styled.div`
  display: flex;
  gap: var(--p-xs);
`

export const IndexDot = styled.div<TIndexDotProps>`
  width: 5px;
  height: var(--p-xs);
  gap: var(--p-xs);
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border-radius: 2px;
  border: 1px solid var(--c-white);
  transition: all 0.3s ease-in-out;
  padding: 0;
  ${(p) => p.$isactive && `background-color: var(--c-white);`}
`
