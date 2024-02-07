import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  ${(p) =>
    p.direction == 'isPrev'
      ? css`
          top: 16px;
          left: 16px;
          background-color: red;
        `
      : css`
          bottom: 16px;
          right: 16px;
          background-color: yellow;
        `}

  height: 40px;
  width: 40px;
  z-index: 1;

  :hover {
    cursor: pointer;
  }
`
