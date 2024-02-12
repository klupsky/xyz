'use client'
import { HoverTapFocusVariants } from '@/app/lib/animations'
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
          as={motion.img}
          whileHover={HoverTapFocusVariants.hover}
          whileTap={HoverTapFocusVariants.tap}
          whileFocus={HoverTapFocusVariants.focus}
        />
      </Wrapper>
    </>
  )
}
