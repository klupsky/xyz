import { createGlobalStyle } from 'styled-components'
import { HELVETICA } from './base/fonts'

const CustomStyles = createGlobalStyle`

:root {
    --c-white: #FFFFFF;
    --c-black: #000000;
    --c-grey: #303030;
}

body {
    height: 100dvh;
    height: 100vh;
    overflow: hidden;
    overscroll-behavior-y: none;
    ${HELVETICA.style}
    position: relative;
    background-color: var(--c-grey);
}`

export function GlobalStyles() {
  return <CustomStyles />
}
