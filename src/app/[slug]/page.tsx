'use client'
import data from '@/app/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import Background from '../components/Background/component'
import { ImageWrapper, Wrapper } from './styles'
import { TProjectProps } from './types'

export default function Project({ params }: TProjectProps) {
  const project = data.projects.find((project) => project.slug === params.slug)
  const projectImage = project ? project.image : null
  const { src, alt } = projectImage

  console.log(src)

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
