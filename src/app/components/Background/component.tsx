'use client'
import Image from 'next/image'
import { Wrapper } from './styles'
import { TBackgroundProps } from './types'

export default function Background({ image }: TBackgroundProps) {
  const { src, alt } = image

  return (
    <Wrapper>
      <Image src={`/${src}.jpg`} alt={alt} fill priority sizes="100%" />
    </Wrapper>
  )
}
