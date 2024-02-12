import { motion } from 'framer-motion'
import styled from 'styled-components'
import { DEVICE } from '../../styles/base/breakpoints'
import { HELVETICA, TUNGSTEN } from '../../styles/base/fonts'

export const DesktopCursorWrapper = styled.div`
  display: none;
  ${DEVICE.tablet} {
    display: block;
  }
`

export const Wrapper = styled.div`
  height: 100dvh;
  height: 100vh;
  overflow: hidden;
  overscroll-behavior-y: none;
  position: relative;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  ${HELVETICA.style};
`

export const Title = styled(motion.h2)`
  position: absolute;
  top: var(--p-sm);
  left: var(--p-sm);

  ${TUNGSTEN.style}
  font-size: 16px;
  line-height: 1;
  letter-spacing: 0.08em;
  ${DEVICE.tablet} {
    font-size: 16px;
    line-height: 1;
  }
`
