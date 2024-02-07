'use client'

import './styles/fonts.css'
import './styles/reset.css'
import Background from './components/Background/component'
import Slider from './components/Slider/component'
import data from './lib/data.js'
import { GlobalStyles } from './styles/GlobalStyles'

export default function Home() {
  return (
    <>
      <GlobalStyles />
      <main>
        <Background />
      </main>
    </>
  )
}
