'use client'

import {
  HoverTapFocusVariants,
  OpenProjectVariants,
} from '../../lib/animations'
import { ImageWrapper, Wrapper } from './styles'
import { TThumbnailProps } from './types'

export default function Thumbnail({
  image,
  direction,
  handleClick,
  projectOpen,
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
          whileHover={HoverTapFocusVariants.hover}
          whileTap={HoverTapFocusVariants.tap}
          whileFocus={HoverTapFocusVariants.focus}
          variants={
            projectOpen
              ? OpenProjectVariants.projectOpen
              : OpenProjectVariants.projectClosed
          }
        />
      </Wrapper>
    </>
  )
}
