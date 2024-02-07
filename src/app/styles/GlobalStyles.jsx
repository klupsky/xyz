import { createGlobalStyle } from 'styled-components'
import { helvetica } from './base/fonts'

const CustomStyles = createGlobalStyle`

:root {
    --c-white: #FFFFFF;
    --c-black: #000000;
}

body {
    height: 100dvh;
    height: 100vh;
    ${helvetica.style}
}`

export function GlobalStyles() {
  return <CustomStyles />
}
