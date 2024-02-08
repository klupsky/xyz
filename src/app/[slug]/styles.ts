import styled from 'styled-components'

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
