'use client'
import { SIZE } from '@/app/styles/base/breakpoints'
import Image from 'next/image'
import Index from '../Index/component'
import { BackgroundTitle, FrontTitle, ImageWrapper, Wrapper } from './styles'
import { TCenterImageProps } from './types'

export default function CenterImage({
  image,
  title,
  projectId,
  activeProjectId,
  projectCount,
}: TCenterImageProps) {
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

        <Index
          projectId={projectId}
          activeProjectId={activeProjectId}
          projectCount={projectCount}
        />
      </ImageWrapper>
    </Wrapper>
  )
}
