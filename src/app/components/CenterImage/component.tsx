'use client'
import Image from 'next/image'
import Index from '../Index/component'
import { BackgroundTitle, Wrapper } from './styles'
import { TCenterImageProps } from './types'

export default function CenterImage({ image, title }: TCenterImageProps) {
  const { src, alt } = image

  return (
    <Wrapper>
      <BackgroundTitle>{title}</BackgroundTitle>

      {/* <ImageWrapper><Image/></ImageWrapper>
      // <FrontTitle>{title}</FrontTitle> */}
    </Wrapper>
  )
}
