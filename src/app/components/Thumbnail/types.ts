import { TImage } from '../Slider/types'

export type TThumbnailProps = {
  direction: 'Previous' | 'Next'
  image: TImage
  handleClick: (direction: 'Previous' | 'Next') => void
}

export type TWrapperProps = {
  direction: 'Previous' | 'Next'
}
