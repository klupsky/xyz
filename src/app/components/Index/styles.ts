import styled from 'styled-components'
import { TIndexDotProps } from './types'

export const Wrapper = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  color: var(--c-white);
  gap: 22px;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const IndexDotsWrapper = styled.div`
  display: flex;
  gap: 8px;
`

export const IndexDot = styled.div<TIndexDotProps>`
  width: 5px;
  height: 8px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border-radius: 2px;
  border: 1px solid var(--c-white);
  transition: all 0.3s ease-in-out;
  padding: 0;
  ${(p) => p.$isactive && `background-color: var(--c-white);`}
`
