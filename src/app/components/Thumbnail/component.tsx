'use client'
import Image from 'next/image'
import { Wrapper } from './styles'

// import { TThumbnailProps } from './types'

export default function Thumbnail({ direction, handleClick }) {
  // const { src, alt } = image

  return (
    <Wrapper direction={direction} onClick={() => handleClick(direction)}>
      hello
      {/* <Image src={`/${src}.jpg`} alt={alt} fill priority sizes="100%" /> */}
    </Wrapper>
  )
}
