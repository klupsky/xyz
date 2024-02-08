import styled from 'styled-components'
import { HELVETICA, TUNGSTEN } from '../styles/base/fonts'

export const ErrorWrapper = styled.div`
  position: relative;
  padding: var(--p-sm);
`

export const ErrorTitle = styled.h1`
  ${TUNGSTEN.style}
  font-size: 16px;
  line-height: 1;
  letter-spacing: 0.08em;
  text-align: left;
  padding-bottom: var(--p-xs);
`

export const ErrorMessage = styled.h1`
  ${HELVETICA.style}
`

export const Wrapper = styled.div`
  height: 100dvh;
  height: 100vh;
  overflow: hidden;
  overscroll-behavior-y: none;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ImageWrapper = styled.div`
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  border: 1px solid var(--c-black);
  margin: var(--p-sm);
  height: calc(100vh - 2 * var(--p-sm));
  aspect-ratio: 4/5;
  z-index: 2;
`
