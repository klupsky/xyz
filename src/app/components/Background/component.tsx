'use client'
import { ImageVariants } from '../../lib/animations'
import { ImageWrapper, Wrapper } from './styles'
import { TBackgroundProps } from './types'

export default function Background({ image }: TBackgroundProps) {
  const { src, alt } = image

  return (
    <Wrapper>
      <ImageWrapper
        variants={ImageVariants}
        src={`/${src}.jpg`}
        alt={alt}
        sizes="100%"
      />
    </Wrapper>
  )
}
