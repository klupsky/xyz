'use client'
import data from '@/app/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import Background from '../components/Background/component'
import {
  ErrorMessage,
  ErrorTitle,
  ErrorWrapper,
  ImageWrapper,
  Wrapper,
} from './styles'
import { TProjectProps } from './types'

export default function Project({ params }: TProjectProps) {
  const project = data.projects.find((project) => project.slug === params.slug)
  const projectImage = project ? project.image : null
  if (!projectImage) {
    return (
      <Link href="/">
        <ErrorWrapper>
          <ErrorTitle>xyz photographers</ErrorTitle>
          <ErrorMessage>
            this image hasn&apos;t been taken yet. return to homepage.
          </ErrorMessage>
        </ErrorWrapper>
      </Link>
    )
  }

  const { src, alt } = projectImage

  return (
    <Link href="/">
      <Wrapper>
        <Background image={projectImage} />
        <ImageWrapper>
          <Image
            src={`/${src}@2x.jpg`}
            alt={alt}
            sizes="100vw"
            fill={true}
            priority
          />
        </ImageWrapper>
      </Wrapper>
    </Link>
  )
}
