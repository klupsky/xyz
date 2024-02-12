import { DEVICE } from '@/app/styles/base/breakpoints'
import { HELVETICA, TUNGSTEN } from '@/app/styles/base/fonts'
import styled from 'styled-components'

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

export const Title = styled.h2`
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

const LoadingCircle = styled.div`
  width: 20px;
  height: 20px;
  background-color: var(--c-white);
  border-radius: 50%;
  border: 2px solid var(--c-primary);
  animation: spin 1s linear infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
