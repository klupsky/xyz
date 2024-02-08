'use client'
import Image from 'next/image'
import { Wrapper } from './styles'
import { TThumbnailProps } from './types'

export default function Thumbnail({
  image,
  direction,
  handleClick,
}: TThumbnailProps) {
  const { src, alt } = image

  return (
    <Wrapper direction={direction} onClick={() => handleClick(direction)}>
      <Image src={`/${src}.jpg`} alt={alt} priority width={100} height={100} />
    </Wrapper>
  )
}
