import { DEVICE } from '@/app/styles/base/breakpoints'
import { HELVETICA } from '@/app/styles/base/fonts'
import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  width: var(--thumbnail-width-m);
  right: var(--p-sm);
  bottom: var(--p-sm);

  ${DEVICE.tablet} {
    bottom: 95px;
    width: var(--thumbnail-width-t);
  }
`
export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--p-sm);
  width: fit-content;
`

export const CreditWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const DateWrapper = styled.div`
  text-align: right;
`

export const Cta = styled.button`
  border-radius: 24px;
  background-color: var(--c-white);
  padding: var(--p-xs) var(--p-sm);
  ${HELVETICA.style}
  font-weight: 700;
  font-weight: bold;
  color: var(--c-black);
  letter-spacing: 0.08em;
  text-align: center;
`
