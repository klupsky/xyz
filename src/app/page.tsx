import './styles/fonts.css'
import './styles/reset.css'
import './styles/global.css'
import Slider from './components/Slider/component'
import data from './lib/data.js'

export default function Home() {
  return (
    <>
      <main>
        <Slider data={data} />
      </main>
    </>
  )
}
