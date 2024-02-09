import { DEVICE } from '@/app/styles/base/breakpoints'
import { TUNGSTEN } from '@/app/styles/base/fonts'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: absolute;
  justify-content: center;
  align-items: center;
`

export const BackgroundTitle = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  width: 11ch;
  max-width: calc(100vw - 2 * var(--p-sm));

  ${TUNGSTEN.style}
  ${DEVICE.tablet} {
    max-width: 860px;
    left: 50.3%;
  }
  color: transparent;
  -webkit-text-stroke: 1px var(--c-white);
`

export const ImageWrapper = styled.div`
  overflow: hidden;
  position: relative;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  border-radius: 10px;
  border: 1px solid var(--c-black);
  height: var(--thumbnail-height-t);
  width: var(--thumbnail-width-t);

  ${DEVICE.tablet} {
    height: var(--centerImage-height);
    width: var(--centerImage-width);
  }
`

export const FrontTitle = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 11ch;
  max-width: calc(100vw - 2 * var(--p-sm));

  ${TUNGSTEN.style}
  ${DEVICE.tablet} {
    left: 50.6%;
    max-width: 860px;
  }
`
