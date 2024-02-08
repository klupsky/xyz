import { DEVICE } from '@/app/styles/base/breakpoints'
import { TUNGSTEN } from '@/app/styles/base/fonts'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const BackgroundTitle = styled.h1`
  position: absolute;
  top: 50%;
  left: 50.3%;
  transform: translate(-50%, -50%);
  z-index: 1;

  ${TUNGSTEN.style}
  ${DEVICE.tablet} {
    width: 11ch;
    max-width: 860px;
  }
  color: transparent;
  -webkit-text-stroke: 1px var(--c-white);
`

export const FrontTitle = styled.h1`
  position: absolute;
  top: 50%;
  left: 50.3%;
  transform: translate(-50%, -50%);
  z-index: 3;
  ${TUNGSTEN.style}
  ${DEVICE.tablet} {
    width: 11ch;
    max-width: 860px;
  }
`
