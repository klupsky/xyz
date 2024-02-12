import { motion } from 'framer-motion'
import styled from 'styled-components'
import { DEVICE } from '../../styles/base/breakpoints'
import { HELVETICA } from '../../styles/base/fonts'

export const Wrapper = styled.div`
  position: absolute;
  width: fit-content;
  right: var(--p-sm);
  bottom: var(--p-sm);

  ${DEVICE.laptop} {
    bottom: 95px;
    width: var(--thumbnail-width);
  }
`
export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--p-sm);

  ${DEVICE.tablet} {
    width: 107px;
  }
`

export const CreditWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
`
export const DateWrapper = styled(motion.div)`
  text-align: right;
`

export const Cta = styled(motion.button)`
  border-radius: 24px;
  background-color: var(--c-white);
  padding: var(--p-xs);
  ${HELVETICA.style}
  font-weight: 700;
  font-weight: bold;
  color: var(--c-black);
  letter-spacing: 0.08em;
  text-align: center;
  width: 100%;
  z-index: 6;
  ${DEVICE.tablet} {
    padding: var(--p-xs) var(--p-sm);
  }
`
