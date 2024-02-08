'use client'
import { SIZE } from '@/app/styles/base/breakpoints'
import Image from 'next/image'
import { BackgroundTitle, FrontTitle, ImageWrapper, Wrapper } from './styles'
import { TCenterImageProps } from './types'

export default function CenterImage({ image, title }: TCenterImageProps) {
  const { src, alt } = image

  return (
    <Wrapper>
      <BackgroundTitle>{title}</BackgroundTitle>

      <ImageWrapper>
        <Image
          src={`/${src}.jpg`}
          alt={alt}
          sizes={`(min-width: ${SIZE.tablet}px) 100vw,
          80vw`}
          fill={true}
          priority
        />
        <FrontTitle>{title}</FrontTitle>
      </ImageWrapper>
    </Wrapper>
  )
}
