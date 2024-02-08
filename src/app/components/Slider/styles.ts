import { HELVETICA, TUNGSTEN } from '@/app/styles/base/fonts'
import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100dvh;
  height: 100vh;
  overflow: hidden;
  overscroll-behavior-y: none;
  position: relative;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  ${HELVETICA.style}
`

export const Title = styled.h2`
  position: absolute;
  top: var(--p-sm);
  left: var(--p-sm);
  z-index: 1;
  ${TUNGSTEN.style}
  font-size: 16px;
  line-height: 1;
  letter-spacing: 0.08em;
`
