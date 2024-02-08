import { TImage } from '../Slider/types'

export type TThumbnailProps = {
  direction: 'isPrev' | 'isNext'
  image: TImage
  handleClick: (direction: 'isPrev' | 'isNext') => void
}

export type TWrapperProps = {
  direction: 'isPrev' | 'isNext'
}
