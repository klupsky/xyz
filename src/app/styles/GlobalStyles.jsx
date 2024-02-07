import { createGlobalStyle } from 'styled-components'
import { HELVETICA } from './base/fonts'

const CustomStyles = createGlobalStyle`

:root {
    --c-white: #FFFFFF;
    --c-black: #000000;
}

body {
    height: 100dvh;
    height: 100vh;
    overflow: hidden;
    overscroll-behavior-y: none;
    ${HELVETICA.style}
}`

export function GlobalStyles() {
  return <CustomStyles />
}
