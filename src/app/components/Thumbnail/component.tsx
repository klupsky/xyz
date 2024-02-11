'use client'
import { motion } from 'framer-motion'
import { ImageWrapper, Wrapper } from './styles'
import { TThumbnailProps } from './types'

export default function Thumbnail({
  image,
  direction,
  handleClick,
}: TThumbnailProps) {
  const { src, alt } = image

  return (
    <>
      <Wrapper
        aria-label={direction}
        direction={direction}
        onClick={() => handleClick(direction)}
      >
        <ImageWrapper
          src={`/${src}.jpg`}
          alt={alt}
          // sizes="50vw"
          // fill={true}
          as={motion.img}
          whileHover={{ scale: 1.1 }}
        />
      </Wrapper>
    </>
  )
}
