'use client'

import './styles/fonts.css'
import './styles/reset.css'
import data from './lib/data.js'
import { GlobalStyles } from './styles/GlobalStyles'

console.log(data, 'data')

export default function Home() {
  return (
    <>
      <GlobalStyles />
      <main>hello</main>
    </>
  )
}
