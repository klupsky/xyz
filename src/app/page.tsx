'use client'

import './styles/fonts.css'
import './styles/reset.css'
import Slider from './components/Slider/component'
import data from './lib/data.js'
import { GlobalStyles } from './styles/GlobalStyles'

export default function Home() {
  return (
    <>
      <GlobalStyles />
      <main>
        <Slider data={data} />
      </main>
    </>
  )
}
