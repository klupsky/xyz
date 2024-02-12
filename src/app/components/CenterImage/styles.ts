import { DEVICE } from '@/app/styles/base/breakpoints'
import { TUNGSTEN } from '@/app/styles/base/fonts'
import { motion } from 'framer-motion'
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

export const BackgroundTitle = styled(motion.h1)`
  position: absolute;
  z-index: 1;
  width: 11ch;
  max-width: calc(100vw - 2 * var(--p-sm));

  ${TUNGSTEN.style}
  ${DEVICE.tablet} {
    max-width: 860px;
  }
  color: transparent;
  -webkit-text-stroke: 1px var(--c-white);
`

export const ImageOuterWrapper = styled(motion.div)`
  overflow: hidden;
  position: absolute;
  z-index: 3;
  border-radius: 10px;
  border: 1px solid var(--c-black);
  height: var(--thumbnail-height-lg);
  width: var(--thumbnail-width-lg);

  ${DEVICE.tablet} {
    height: var(--centerImage-height);
    width: var(--centerImage-width);
  }
`

export const ImageWrapper = styled.img`
  overflow: hidden;
  position: relative;
  height: 100%;
  object-fit: cover;
`

export const TopTitle = styled(ImageOuterWrapper)`
  z-index: 4;
  border: none;
  pointer-events: none;
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
    left: 50%;
    max-width: 860px;
  }
`
