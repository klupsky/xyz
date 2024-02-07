import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100%;

  img {
    filter: blur(50px);
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`
