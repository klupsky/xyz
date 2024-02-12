'use client'

import {
  HoverTapFocusVariants,
  ImageVariants,
  OpacityVariants,
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
        onClick={() => !projectOpen && handleClick(direction)}
        animate={
          projectOpen ? OpacityVariants.transparent : OpacityVariants.visible
        }
      >
        <ImageWrapper
          src={`/${src}.jpg`}
          alt={alt}
          variants={ImageVariants}
          whileHover={!projectOpen && HoverTapFocusVariants.hover}
          whileTap={!projectOpen && HoverTapFocusVariants.tap}
          whileFocus={!projectOpen && HoverTapFocusVariants.focus}
        />
      </Wrapper>
    </>
  )
}
