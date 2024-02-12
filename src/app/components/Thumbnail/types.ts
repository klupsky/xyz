import { TImage } from '../Slider/types'

export type TThumbnailProps = {
  direction: 'Previous' | 'Next'
  image: TImage
  handleClick: (direction: 'Previous' | 'Next') => void
  projectOpen: boolean
}

export type TWrapperProps = {
  direction: 'Previous' | 'Next'
}
