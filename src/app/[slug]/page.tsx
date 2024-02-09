'use client'

import data from '@/app/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import Background from '../components/Background/component'
import Cursor from '../components/Cursor/component'
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
      <>
        <Cursor />
        <Link aria-label="Back to homepage" href="/">
          <ErrorWrapper>
            <ErrorTitle>xyz photographers</ErrorTitle>
            <ErrorMessage>
              this image hasn&apos;t been taken yet. return to homepage.
            </ErrorMessage>
          </ErrorWrapper>
        </Link>
      </>
    )
  }

  const { src, alt } = projectImage

  return (
    <Wrapper>
      <Cursor />
      <Link href="/" aria-label="Back to homepage">
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
      </Link>
    </Wrapper>
  )
}
