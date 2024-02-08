import { HELVETICA } from '@/app/styles/base/fonts'
import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100dvh;
  height: 100vh;
  overflow: hidden;
  overscroll-behavior-y: none;
  position: relative;
  background-color: var(--c-grey);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  ${HELVETICA.style}
`
