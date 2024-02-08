import styled from 'styled-components'
import { TIndexDotProps } from './types'

export const Wrapper = styled.div`
  width: fit-content;
  display: flex;
  color: var(--c-white);
  gap: 22px;
`

export const IndexDotsWrapper = styled.div`
  display: flex;
  gap: 8px;
`

export const IndexDot = styled.div<TIndexDotProps>`
  width: 5px;
  height: 8px;
  border-radius: 2px;
  border: 1px solid var(--c-white);
  transition: all 0.3s ease-in-out;

  ${(p) => p.$isactive && `background-color: var(--c-white);`}
`
